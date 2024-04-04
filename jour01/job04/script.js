function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Teste de la fonction 
console.log(bisextile(2000)); // Doit afficher true
console.log(bisextile(2024)); // Doit afficher true
console.log(bisextile(2100)); // Doit afficher false
console.log(bisextile(2023)); // Doit afficher false
