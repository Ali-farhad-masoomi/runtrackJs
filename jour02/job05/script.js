// À chaque fois que l'utilisateur fait défiler la page, la fonction anonyme est déclenchée.
window.addEventListener("scroll", function() {
 

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
 
   
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = color;
    var color = getColorFromPercentage(scrollPercentage);
});
 
// Cette fonction prend le pourcentage de scrolling en paramètre.
function getColorFromPercentage(percentage) {
    // Elle convertit ce pourcentage en une teinte de couleur (hue) en multipliant le pourcentage par 1.2 (pour augmenter la variation de couleur).
    var hue = (percentage * 1.2) / 100;
    // Elle retourne une couleur au format HSL (Teinte, Saturation, Luminosité) en fonction de la teinte calculée et des valeurs de saturation et de luminosité prédéfinies.
    return "hsl(" + hue + ", 80%, 50%)";
}
 
 