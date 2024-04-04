document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.getElementById('shuffleButton');
    const rainbow = document.getElementById('rainbow');
    const message = document.getElementById('message');

    shuffleButton.addEventListener('click', function() {
        shuffleRainbow();
    });

    rainbow.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.alt);
    });

    rainbow.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    rainbow.addEventListener('drop', function(event) {
        event.preventDefault();
        const draggedAlt = event.dataTransfer.getData('text/plain');
        const droppedAlt = event.target.alt;

        if (draggedAlt === droppedAlt) {
            event.target.src = event.dataTransfer.getData('text/plain') + '.jpg';
        }

        checkRainbow();
    });

    function shuffleRainbow() {
        for (let i = rainbow.children.length; i >= 0; i--) {
            rainbow.appendChild(rainbow.children[Math.random() * i | 0]);
        }
    }

    function checkRainbow() {
        let correctOrder = true;
        for (let i = 0; i < rainbow.children.length; i++) {
            if (rainbow.children[i].alt !== 'Image ' + (i + 1)) {
                correctOrder = false;
                break;
            }
        }
        if (correctOrder) {
            message.textContent = 'Vous avez gagné';
            message.style.color = 'green';
        } else {
            message.textContent = 'Vous avez perdu';
            message.style.color = 'red';
        }
    }
});
