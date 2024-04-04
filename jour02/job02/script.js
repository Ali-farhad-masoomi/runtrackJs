function showhide() {
    var articleContainer = document.getElementById("articleContainer");

    // Si l'article est déjà affiché, on le cache
    if (articleContainer.innerHTML !== '') {
        articleContainer.innerHTML = ''; // Vide le contenu de l'article
        articleContainer.style.display = 'none'; // Cache l'article
    } else {
        // Si l'article n'est pas affiché, on l'ajoute
        var article = document.createElement('article');
        var articleText = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
        article.appendChild(articleText);
        articleContainer.appendChild(article);
        articleContainer.style.display = 'block'; // Affiche l'article
    }
}
