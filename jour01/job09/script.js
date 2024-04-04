function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("L'ordre de tri n'est pas spécifié correctement.");
        return numbers; // Retourne le tableau non trié si l'ordre n'est pas valide
    }
}

// Exemples d'appel de la fonction:

let tableau = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Tableau initial :", tableau);
console.log("Tri ascendant :", tri(tableau.slice(), "asc")); // Slice() pour créer une copie du tableau
console.log("Tri descendant :", tri(tableau.slice(), "desc")); // Slice() pour créer une copie du tableau
