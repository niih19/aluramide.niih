function tocaSom (seletorAudio) {
    const elemento =document.querySelector(selectorAudio);

    if (elemento && elemento.LocalName === 'audio') {
        elemento.play();
    }
    else {
        
        console.log('Elemento não encontrado ou seletor inválido')
    }

}