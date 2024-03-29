
function loadAllDataHome(){
    setInterval(()=>{
        if(document.querySelector("#conduit-feed-frame > form > button")){
            document.querySelector("#conduit-feed-frame > form > button").click()
        }
    },1000);

}

function nextPage(){
    if(document.querySelector("div.paginate-container > div > a:nth-child(2)")){
            document.querySelector("div.paginate-container > div > a:nth-child(2)").click()
        setTimeout(()=>{window.location.reload},500);
    }
}

function clickAllStars(){
    paths = document.querySelectorAll("button > svg.octicon.octicon-star.d-inline-block.mr-2");
    paths.forEach(path => {
        path.parentNode.click();
    });
}

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
        if(document.querySelector("#user-profile-frame > div > div.paginate-container > div > a:nth-child(2)")){
            document.querySelector("#user-profile-frame > div > div.paginate-container > div > a:nth-child(2)").click()
            setTimeout(()=>{window.location.reload();},2000);
        }
        // alert('Followed All Accounts');
    }
}


setTimeout(()=>{loadAllDataHome();},1000);

//setTimeout(()=>{clickAllStars();},1000);
clickAllStars()


// Inicia el proceso de clic gradual solo en los botones "Follow" con retraso aleatorio
var botones = document.querySelectorAll('input.btn.btn-sm');
clicGradual(botones, 0);
