function jourTravaille(date) {
    //  Le liste des jours fériés de l'année 2024
    const joursFeries = [
        new Date(2024, 0, 1),  // Nouvel An
        new Date(2024, 3, 1),  // Fête du Travail
        new Date(2024, 4, 8),  // Victoire 1945
        new Date(2024, 4, 30), // Ascension
        new Date(2024, 6, 14), // Fête Nationale
        new Date(2024, 7, 15), // Assomption
        new Date(2024, 10, 1), // Toussaint
        new Date(2024, 10, 11), // Armistice 1918
        new Date(2024, 11, 25) // Noël
    ];

    // Vérifier si la date est un jour férié
    for (let i = 0; i < joursFeries.length; i++) {
        if (date.getTime() === joursFeries[i].getTime()) {
            console.log("Le " + date.toLocaleDateString("fr-FR") + " est un jour férié.");
            return;
        }
    }

    // Vérifier si c'est un week-end (samedi ou dimanche)
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + date.toLocaleDateString("fr-FR") + " est un week-end.");
    } else {
        console.log("Oui, " + date.toLocaleDateString("fr-FR") + " est un jour travaillé.");
    }
}

// Les exemples d'appel de la fonction
jourTravaille(new Date(2024, 0, 1)); // Nouvel An - Jour férié
jourTravaille(new Date(2024, 0, 2)); // Jour travaillé
jourTravaille(new Date(2024, 0, 5)); // Week-end
