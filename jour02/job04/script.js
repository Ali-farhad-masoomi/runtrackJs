
 // Nous récupérons cet élément dans JavaScript en utilisant document.getElementById("keylogger").
 var keylogger = document.getElementById("keylogger");

 document.addEventListener("keydown", function(event) {
     // À chaque pression de touche, nous récupérons la touche pressée à l'aide de event.key.
    var key = event.key;
 
     
        if (/^[a-zA-Z]$/.test(key)) {
         // Si la touche est une lettre, nous vérifions si le focus est actuellement dans le <textarea> en comparant (document.activeElement) avec notre élément <textarea>.
            var isFocused = (document.activeElement === keylogger);
 
            // Si le focus est dans le <textarea>, nous ajoutons la lettre deux fois à son contenu en utilisant += pour ajouter du texte à la fin de son contenu actuel.
            // Sinon, nous ajoutons la lettre une fois.
            if (isFocused) {
                keylogger.value += key + key;
               
            } else {
             // Sinon, ajouter la lettre une fois
                keylogger.value += key;
            
         }
     }
 });