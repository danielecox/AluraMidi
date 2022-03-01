function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template String

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    tecla.onKeyDown = function(evento) {
        console.log(evento.code == 'Space');
        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
        }

    };
    tecla.onKeyUp = function() {
        tecla.classList.remove('ativa');
    }


}