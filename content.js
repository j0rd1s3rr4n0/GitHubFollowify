// Función para hacer clic en los botones "Follow" gradualmente con retraso aleatorio
function clicGradual(botones, indice) {
    if (indice < botones.length) {
        // Verifica si el botón actual contiene el texto "Unfollow"
        if (botones[indice].value === 'Unfollow') {
            // Ignora el botón actual y pasa al siguiente
            setTimeout(function() {
                clicGradual(botones, indice + 1);
            }, 125); // Retraso de 1 segundo
            return;
        }
        
        // Verifica si el botón actual contiene el texto "Follow"
        if (botones[indice].value === 'Follow') {
            // Aplica un borde rojo al botón
            botones[indice].style.border = "1px solid red";

            // Hace clic en el botón actual
            botones[indice].click();
        }

        // Genera un retraso aleatorio entre 1 y 3 segundos
        var retraso = Math.floor(Math.random() * 1.1) + 500;
        // Configura el temporizador para el próximo clic con retraso aleatorio
        setTimeout(function() {
            clicGradual(botones, indice + 1);
        }, retraso);
    } else {
        // Cuando finaliza, muestra un mensaje de alerta
        alert('Followed All Accounts');
    }
}

// Inicia el proceso de clic gradual solo en los botones "Follow" con retraso aleatorio
var botones = document.querySelectorAll('input.btn.btn-sm');
clicGradual(botones, 0);
