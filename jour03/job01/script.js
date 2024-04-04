document.addEventListener('DOMContentLoaded', function() {
    // Sélection du bouton pour faire apparaître le texte
    const showButton = document.getElementById('showButton');

    // Sélection du bouton pour cacher le texte
    const hideButton = document.getElementById('hideButton');

    // Sélection de l'élément de texte
    const quote = document.getElementById('quote');

    // Gestionnaire d'événement pour faire apparaître le texte
    showButton.addEventListener('click', function() {
        quote.style.display = 'block';
    });

    // Gestionnaire d'événement pour cacher le texte
    hideButton.addEventListener('click', function() {
        quote.style.display = 'none';
    });
});
