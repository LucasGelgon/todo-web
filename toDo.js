/**
 * Enregistrement des préférences de l'utilisateur
 */

var userPreferences = {
    theme : 'black',
    language : 'fr-FR'
}

var serializedPreferences = JSON.stringify(userPreferences);
localStorage.setItem("userPreferences", serializedPreferences);

/**
 * Récupération des préférences de l'utilisateur
 */

var serializedPreferences = localStorage.getItem("userPreferences");
var userPreferences = JSON.parse(serializedPreferences);