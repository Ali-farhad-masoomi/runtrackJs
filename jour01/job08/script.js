function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Exemple d'appel de la fonction
console.log(sommeNombresPremiers(5, 7)); // Devrait retourner 12 (5 + 7)
console.log(sommeNombresPremiers(4, 7)); // Devrait retourner false (4 n'est pas un nombre premier)
