/**
 * WAO (WeAreOur) - Common utilities for mobile plans views
 */
window.WAO = (function() {
  'use strict';
  
  // State management
  let currentSort = 'price-asc';
  let sortedProviders = [];
  let allProviders = [];
  let currentFilters = {
    priceRise: 'all',
    fiveG: 'all',
    contract: 'all',
    network: 'all'
  };
  let renderCallback = null;
  
  /**
   * Initialize WAO with data and render callback
   */
  function init(data, callback) {
    allProviders = data;
    sortedProviders = [...data];
    renderCallback = callback;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Initial render
    sortPlans(currentSort);
  }
  
  /**
   * Toggle dark/light theme
   */
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  /**
   * Apply all active filters
   */
  function applyFilters() {
    currentFilters.priceRise = document.getElementById('filter-price-rise').value;
    currentFilters.fiveG = document.getElementById('filter-5g').value;
    currentFilters.contract = document.getElementById('filter-contract').value;
    currentFilters.network = document.getElementById('filter-network').value;
    
    sortedProviders = allProviders.filter(plan => {
      // Price rise filter
      if (currentFilters.priceRise === 'no-rises') {
        if (plan.priceIncrease && plan.priceIncrease !== 'None') return false;
      } else if (currentFilters.priceRise === 'with-rises') {
        if (!plan.priceIncrease || plan.priceIncrease === 'None') return false;
      }
      
      // 5G filter
      if (currentFilters.fiveG === '5g-only') {
        if (!plan['5g']) return false;
      }
      
      // Contract length filter
      if (currentFilters.contract !== 'all') {
        if (!plan.contractLength || !plan.contractLength.includes(currentFilters.contract.replace('-', ' '))) return false;
      }
      
      // Network filter
      if (currentFilters.network !== 'all') {
        if (plan.network !== currentFilters.network) return false;
      }
      
      return true;
    });
    
    sortPlans(currentSort);
  }
  
  /**
   * Sort providers by field and direction
   */
  function sortPlans(sortType) {
    currentSort = sortType;
    const [field, direction] = sortType.split('-');
    
    sortedProviders.sort((a, b) => {
      let aVal, bVal;
      
      switch(field) {
        case 'price':
          aVal = a.price;
          bVal = b.price;
          break;
        case 'data':
          aVal = parseData(a.data);
          bVal = parseData(b.data);
          break;
        case 'provider':
          aVal = a.provider.name.toLowerCase();
          bVal = b.provider.name.toLowerCase();
          break;
        default:
          return 0;
      }
      
      if (direction === 'asc') {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }
    });
    
    if (renderCallback) {
      renderCallback(sortedProviders);
    }
  }
  
  /**
   * Parse data string to comparable number (in GB)
   */
  function parseData(dataStr) {
    if (!dataStr || dataStr === 'N/A') return -1;
    if (dataStr.toLowerCase() === 'unlimited') return 999999;
    const match = dataStr.match(/(\d+(?:\.\d+)?)\s*(GB|MB)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    return unit === 'GB' ? value : value / 1024;
  }
  
  /**
   * Format currency using Intl.NumberFormat
   */
  function formatCurrency(amount, currency) {
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency || 'GBP',
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    });
    return formatter.format(amount);
  }
  
  /**
   * Format roaming information
   */
  function formatRoaming(roaming) {
    if (!roaming || !roaming.euDailyCharge) return 'N/A';
    const charge = roaming.euDailyCharge.toLowerCase();
    if (charge === 'free' || charge === 'none') {
      const limit = roaming.euDataLimit || '';
      // Only show cap if it's a specific value (not Unknown, Unlimited, or empty)
      if (limit && limit.toLowerCase() !== 'unknown' && limit.toLowerCase() !== 'unlimited') {
        return `Free EU (up to ${limit})`;
      }
      return 'Free EU';
    }
    return roaming.euDailyCharge;
  }
  
  /**
   * Get current sorted providers
   */
  function getSortedProviders() {
    return sortedProviders;
  }
  
  // Public API
  return {
    init,
    toggleTheme,
    applyFilters,
    sortPlans,
    parseData,
    formatCurrency,
    formatRoaming,
    getSortedProviders
  };
})();
