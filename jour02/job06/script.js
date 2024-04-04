// À chaque fois que l'utilisateur entre la bonne touche dans la séquence, konamiIndex est incrémenté.
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;
 
//  e est l'objet événement qui contient des informations sur l'événement de touche, y compris quelle touche a été pressée.
document.addEventListener('keydown', (e) => {
 
    // Vérifier si la touche pressée est la prochaine dans le code Konami
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++; // Passer à la prochaine touche
 
        if (konamiIndex === konamiCode.length) {
            // Si le code Konami a été entièrement saisi
            activateKonamiStyle();
            konamiIndex = 0; // Réinitialiser l'index pour permettre de réactiver le code
        }
    }else{
        konamiIndex = 0; // Réinitialiser l'index si la séquence est rompue
    }
});
 
function activateKonamiStyle() {
    document.body.classList.add('konami-activated');
}

