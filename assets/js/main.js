/**
 * Portfolio Elie Loola - Main JS
 * Chargement dynamique des composants
 */

// Import des modules
import { loadHeader } from './components/header.js';
import { loadProjects } from './components/projects.js';

// Configuration initiale
const config = {
    apiBaseUrl: '',
    enableAnalytics: true
};

// Chargement des composants
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialisation des composants
        loadHeader();
        loadProjects();
        
        // Analytics
        if (config.enableAnalytics) {
            initAnalytics();
        }
        
        console.log('Application initialisée avec succès');
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
    }
});

function initAnalytics() {
    // Implementation analytics
}