/**
 * Component-based architecture implementation
 * This file handles loading and rendering of HTML components
 */

// Component loader function
function loadComponent(url, targetId, data = {}) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load component: ${url}`);
      }
      return response.text();
    })
    .then(html => {
      // Replace template variables with data
      const renderedHtml = renderTemplate(html, data);
      
      // Insert into DOM
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.innerHTML = renderedHtml;
      } else {
        console.error(`Target element not found: ${targetId}`);
      }
      
      return renderedHtml;
    })
    .catch(error => {
      console.error('Error loading component:', error);
    });
}

// Simple template rendering function
function renderTemplate(template, data) {
  let rendered = template;
  
  // Replace all {{variable}} occurrences with data
  Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    rendered = rendered.replace(regex, data[key]);
  });
  
  return rendered;
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Load section components
  loadComponent('components/sections/about.html', 'about-container');
  
  // Example of loading UI components with data
  loadComponent('components/ui/achievement-card.html', 'achievement-1', {
    icon: 'bx-code-block',
    title: 'Microservices Architecture',
    description: 'Led the migration from monolithic to microservices architecture, reducing deployment time by 60%.'
  });
  
  loadComponent('components/ui/achievement-card.html', 'achievement-2', {
    icon: 'bx-data',
    title: 'Data Processing Pipeline',
    description: 'Designed and implemented a real-time data processing pipeline handling 10M+ daily transactions.'
  });
});

// Example of how to create a component factory
class ComponentFactory {
  constructor(baseUrl = 'components/') {
    this.baseUrl = baseUrl;
  }
  
  async createComponent(type, targetId, data = {}) {
    let url;
    
    switch (type) {
      case 'about':
        url = `${this.baseUrl}sections/about.html`;
        break;
      case 'achievement':
        url = `${this.baseUrl}ui/achievement-card.html`;
        break;
      default:
        throw new Error(`Unknown component type: ${type}`);
    }
    
    return loadComponent(url, targetId, data);
  }
}

// Export for use in other scripts
window.ComponentFactory = ComponentFactory;
window.loadComponent = loadComponent; 