function tocaSom (seletorAudio) {
    const elemento = document.querySelector (seletrAudio) ;

    if (elemento && elemento.localName === 'audio') { 
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.long(Elemento não emcontrado ou seletor inálido);
    }
}

const listaDeTeclas =document.querySelectorAll ('.tecla');

//para
for (let contador = 0 < listaDeTeclas.length; contador++){

    const tecla = lista DeTeclas [contador];
    const intrumento = tecla.classList[1];
    const idAudio = 'som_${instrumento}'; //template string

    tecla.onclik = function () {
        tocaSo(idAudio);
    }

    tecla.onkeydown = functiomn (evento) {

        if (evento.code === 'Space'||evento.code === 'Enteder') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
