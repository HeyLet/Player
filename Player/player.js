var player = [
    { music: "musicas/Red Hot Chili Peppers Snow (Hey oh) (HQ, HD Audio).mp3", },
    { music: "musicas/Shawn Mendes - Señorita Ft. Camila Cabello (Audio).mp3" },
    { music: "musicas/KVSH, Breno Rocha Feat. NoOne  - Sede Pra Te Ver.mp3" },
    { music: "musicas/Não Vou Mentir.mp3" },
    { music: "musicas/She Will Be Loved.mp3" },
    { music: "musicas/This Love - Maroon 5.mp3" },
    { music: "musicas/Wish You Were Here.mp3" }
]

var nome = [
    { musicas: "Red Hot Chili Peppers Snow (Hey oh) (HQ, HD Audio)" },
    { musicas: "Shawn Mendes - Señorita Ft. Camila Cabello (Audio)" },
    { musicas: "KVSH, Breno Rocha Feat. NoOne- Sede Pra Te Ver" },
    { musicas: "Não Vou Mentir" },
    { musicas: "She Will Be Loved" },
    { musicas: "This Love - Maroon 5" },
    { musicas: "Wish You Were Here" }
]

var album = [
    { cover: "Album/redhot.jpg" },
    { cover: "Album/shawn.png" },
    { cover: "Album/KVSH.jpg" },
    { cover: "Album/lagum.jpg" },
    { cover: "Album/maroon5.png" },
    { cover: "Album/maroonfive.png" },
    { cover: "Album/pinkfloyd.jpg" }

]

var i = 0;
var nomeMusica = nome[i];
var capadoAlbum;
audio = document.getElementById('player');
audioState = false;
playlist = ["music/Red Hot Chili Peppers Snow (Hey oh) (HQ, HD Audio).mp3", "music/Shawn Mendes - Señorita Ft. Camila Cabello (Audio).mp3", "music/KVSH, Breno Rocha Feat. NoOne  - Sede Pra Te Ver.mp3", "music/Não Vou Mentir.mp3", "music/She Will Be Loved.mp3", "music/This Love - Maroon 5.mp3", "music/Wish You Were Here.mp3"]



function changePlay() {
    let imagem = document.getElementById("playButtonImg");
    let audio = document.getElementById("player");
    if (audioState === false) {
        audioState = true;
        imagem.src = "imagens/icons/pause.png"
        audio.src = player[i].music;
        playAudio();
    } else {
        audioState = false;
        imagem.src = "imagens/icons/play.png"
        audio.pause();
    }
}

function duration() {

    var audio = document.getElementById("player");
    if (audio.readyState > 0) {

        var minutes = parseInt(audio.duration / 60, 10);
        var seconds = parseInt(audio.duration % 60);
        document.getElementById('timeend').innerHTML = minutes + ":" + seconds;
    }
}




function proximo() {
    if (i >= (player.length - 1)) {
        i = 0;
    } else {
        i++;
    }

    document.getElementById("musicas").innerHTML = nome[i].musicas;
    document.getElementById("capadoAlbum").src = album[i].cover;
    audio.src = player[i].music;
    temp = 0;
    p = 1;
    playAudio();
}

function anterior() {
    if (i == 0) {
        i = 6;
    } else {
        i--;
    }
    document.getElementById("musicas").innerHTML = nome[i].musicas;
    document.getElementById("capadoAlbum").src = album[i].cover;
    audio.src = player[i].music;
    temp = 0;
    p = 1;
    playAudio();

}

function aleatorio() {
    i = Math.floor(Math.random() * 4 + 0);
    document.getElementById("musicas").innerHTML = nome[i].musicas;
    document.getElementById("capadoAlbum").src = album[i].cover;
    p = 1;
    audio.src = player[i].music;
    playAudio();
}

function loop() {
    music.loop = true;
    music.load();
}

function repetir() {
    music.repetir = true;
    music.load();
}

function playAudio() {
    audio = document.getElementById("player");
    audio.load();
    audio.oncanplay = function() {
        duration();
        audio.play();
        progresso();
    };
}

function mudaMusica(div) {
    audio = document.getElementById("player");
    audio.pause();
    var id = div.id.replace('msc', '');
    audio.src = player[id].music;
    document.getElementById("musicas").innerHTML = nome[id].musicas;
    document.getElementById("capadoAlbum").src = album[id].cover;
    document.getElementById("timeend").innerHTML = "time";
    changePlay();
}

async function progresso() {
    audio = document.getElementById("player");
    var tempoAtual = audio.currentTime;
    var totalMusica = audio.duration;
    var minutes = parseInt(tempoAtual / 60, 10);
    var seconds = parseInt(tempoAtual % 60);
    document.getElementById("timestart").innerHTML = minutes + ":" + seconds;

    var poc = (tempoAtual * 100) / totalMusica;

    document.getElementById("rangeValue").value = poc;
    setTimeout(function() {
        progresso();
    }, 1000);
}






function changeNav() {
    if (document.getElementById("barra").style.display == "block") {
        document.getElementById("barra").style.display = "none";
        document.getElementById("blackdrop").style.display = "none"
    } else {
        document.getElementById("barra").style.display = "block"
        document.getElementById("blackdrop").style.display = "block"
    }

}