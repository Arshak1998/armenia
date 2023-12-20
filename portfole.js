const knopka = document.querySelector('.audioner i');
const erg = document.querySelector('.audioner audio');
erg.currentTime = .8;

knopka.onclick = () => {
    if (erg.paused) {
        knopka.className = 'fa-solid fa-circle-pause'
        erg.play()
    } else {
        knopka.className = 'fa-solid fa-circle-play'
        erg.pause()
    }
};