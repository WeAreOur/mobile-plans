#!/usr/bin/env node

/**
 * Validation Script for Mobile Plans Data
 * 
 * Validates all provider JSON files against the schema and checks for:
 * - Schema compliance using JSON Schema validation
 * - Required fields presence
 * - Data type correctness
 * - URL validity (sourceUrl, affiliateUrl)
 * - Logical consistency (e.g., price >= 0, data >= 0)
 * - Metadata completeness
 * 
 * Usage: node scripts/validate.js
 * Exit codes: 0 = success, 1 = validation errors found
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Color output helpers
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

function log(color, ...args) {
  console.log(color, ...args, colors.reset);
}

// Initialize AJV with strict schema validation
const ajv = new Ajv({ 
  allErrors: true, 
  strict: true,
  validateFormats: true
});
addFormats(ajv);

// Load schema
const schemaPath = path.join(rootDir, 'api/v1/schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const validate = ajv.compile(schema);

// Validation stats
const stats = {
  files: 0,
  plans: 0,
  errors: 0,
  warnings: 0,
  providers: new Set()
};

// Validation error collection
const errors = [];
const warnings = [];

/**
 * Validate URL format and accessibility
 */
function validateUrl(url, fieldName, fileName) {
  if (!url) return;
  
  try {
    new URL(url);
  } catch (e) {
    errors.push(`${fileName}: Invalid ${fieldName}: ${url}`);
    stats.errors++;
  }
}

/**
 * Validate a single plan within a provider file
 */
function validatePlan(plan, providerName, fileName, planIndex) {
  const planId = `${fileName} - Plan ${planIndex + 1} (${plan.name || 'unnamed'})`;
  
  // Check for required fields
  const requiredFields = ['name', 'data', 'minutes', 'texts', 'price', 'contractLength'];
  for (const field of requiredFields) {
    if (plan[field] === undefined || plan[field] === null || plan[field] === '') {
      errors.push(`${planId}: Missing required field '${field}'`);
      stats.errors++;
    }
  }
  
  // Validate numeric values
  if (typeof plan.price === 'number' && plan.price < 0) {
    errors.push(`${planId}: Price cannot be negative: ${plan.price}`);
    stats.errors++;
  }
  
  // Validate data field
  if (plan.data && typeof plan.data === 'string') {
    const dataLower = plan.data.toLowerCase();
    const validDataPatterns = /^(\d+(\.\d+)?)\s*(mb|gb)|unlimited$/i;
    if (!validDataPatterns.test(dataLower)) {
      warnings.push(`${planId}: Unusual data format: '${plan.data}' (should be e.g., '5GB', '500MB', or 'Unlimited')`);
      stats.warnings++;
    }
  }
  
  // Validate minutes and texts
  const validateCallsTexts = (value, fieldName) => {
    if (value && typeof value === 'string') {
      const validPatterns = /^(\d+|unlimited)$/i;
      if (!validPatterns.test(value)) {
        warnings.push(`${planId}: Unusual ${fieldName} format: '${value}' (should be number or 'Unlimited')`);
        stats.warnings++;
      }
    }
  };
  validateCallsTexts(plan.minutes, 'minutes');
  validateCallsTexts(plan.texts, 'texts');
  
  // Validate contract length
  if (typeof plan.contract === 'number' && plan.contract < 0) {
    errors.push(`${planId}: Contract length cannot be negative: ${plan.contract}`);
    stats.errors++;
  }
  
  // Validate URLs
  validateUrl(plan.sourceUrl, 'sourceUrl', planId);
  validateUrl(plan.affiliateUrl, 'affiliateUrl', planId);
  
  // Validate status
  const validStatuses = ['draft', 'community', 'complete'];
  if (plan.status && !validStatuses.includes(plan.status)) {
    errors.push(`${planId}: Invalid status '${plan.status}' (must be: ${validStatuses.join(', ')})`);
    stats.errors++;
  }
  
  // Validate metadata
  if (plan.metadata) {
    if (plan.metadata.confidence) {
      const validConfidence = ['low', 'medium', 'high', 'verified'];
      if (!validConfidence.includes(plan.metadata.confidence)) {
        errors.push(`${planId}: Invalid confidence '${plan.metadata.confidence}' (must be: ${validConfidence.join(', ')})`);
        stats.errors++;
      }
    }
    
    // Warn if missing lastReviewed for verified plans
    if (plan.metadata.confidence === 'verified' && !plan.metadata.lastReviewed) {
      warnings.push(`${planId}: Verified plan missing 'lastReviewed' date`);
      stats.warnings++;
    }
  }
  
  // Validate schema-specific fields
  if (plan.network && !['EE', 'Vodafone', 'Three', 'O2'].includes(plan.network)) {
    warnings.push(`${planId}: Unusual network value: '${plan.network}' (expected: EE, Vodafone, Three, or O2)`);
    stats.warnings++;
  }
  
  if (plan.speedCap && typeof plan.speedCap === 'string' && 
      !plan.speedCap.match(/^\d+\s*Mbps$/i) && 
      !['Uncapped', 'N/A'].includes(plan.speedCap)) {
    warnings.push(`${planId}: Speed cap format should be like '10 Mbps' or 'Uncapped': '${plan.speedCap}'`);
    stats.warnings++;
  }
  
  stats.plans++;
}

/**
 * Validate a provider file
 */
function validateProviderFile(filePath) {
  const fileName = path.basename(filePath);
  stats.files++;
  
  let data;
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(content);
  } catch (e) {
    errors.push(`${fileName}: Failed to parse JSON: ${e.message}`);
    stats.errors++;
    return;
  }
  
  // Validate against schema
  const valid = validate(data);
  if (!valid) {
    validate.errors.forEach(err => {
      errors.push(`${fileName}: Schema validation error at ${err.instancePath}: ${err.message}`);
      stats.errors++;
    });
  }
  
  // Track provider
  if (data.provider?.name) {
    stats.providers.add(data.provider.name);
  }
  
  // Validate each plan
  if (Array.isArray(data.plans)) {
    data.plans.forEach((plan, index) => {
      validatePlan(plan, data.provider?.name, fileName, index);
    });
  } else {
    errors.push(`${fileName}: 'plans' must be an array`);
    stats.errors++;
  }
  
  // Validate provider metadata
  if (!data.provider?.name) {
    errors.push(`${fileName}: Missing provider.name`);
    stats.errors++;
  }
  
  validateUrl(data.provider?.website, 'provider.website', fileName);
  validateUrl(data.provider?.logo, 'provider.logo', fileName);
}

/**
 * Main validation function
 */
function main() {
  log(colors.blue, '\n🔍 Mobile Plans Data Validation\n');
  log(colors.gray, `Schema: ${schemaPath}\n`);
  
  // Find all provider files
  const providersDir = path.join(rootDir, 'api/v1/uk/providers');
  
  if (!fs.existsSync(providersDir)) {
    log(colors.red, `✗ Providers directory not found: ${providersDir}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(providersDir)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(providersDir, file));
  
  if (files.length === 0) {
    log(colors.red, '✗ No provider files found');
    process.exit(1);
  }
  
  log(colors.gray, `Found ${files.length} provider files\n`);
  
  // Validate each file
  files.forEach(validateProviderFile);
  
  // Print results
  log(colors.blue, '\n📊 Validation Results\n');
  log(colors.gray, `Files validated: ${stats.files}`);
  log(colors.gray, `Providers: ${stats.providers.size}`);
  log(colors.gray, `Plans validated: ${stats.plans}`);
  
  if (errors.length > 0) {
    log(colors.red, `\n✗ ${stats.errors} Errors:\n`);
    errors.forEach(err => log(colors.red, `  • ${err}`));
  }
  
  if (warnings.length > 0) {
    log(colors.yellow, `\n⚠ ${stats.warnings} Warnings:\n`);
    warnings.forEach(warn => log(colors.yellow, `  • ${warn}`));
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    log(colors.green, '\n✓ All validation checks passed!\n');
    process.exit(0);
  } else if (errors.length === 0) {
    log(colors.yellow, `\n✓ Validation passed with ${stats.warnings} warnings\n`);
    process.exit(0);
  } else {
    log(colors.red, `\n✗ Validation failed with ${stats.errors} errors\n`);
    process.exit(1);
  }
}

main();
