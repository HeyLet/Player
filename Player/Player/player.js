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
playlist = ["music/Red Hot Chili Peppers Snow (Hey oh) (HQ, HD Audio).mp3", "music/Shawn Mendes - Señorita Ft. Camila Cabello (Audio).mp3", "music/KVSH, Breno Rocha Feat. NoOne  - Sede Pra Te Ver.mp3", "music/Não Vou Mentir.mp3", "music/She Will Be Loved.mp3", "music/This Love - Maroon 5.mp3", "music/Wish You Were Here.mp3"]




function play() {
    let btnPause = document.getElementById("pause");
    let btnPlay = document.getElementById("play1");
    audio = document.getElementById("player");
    if (btnPlay.style.display === "block") {
        btnPlay.style.display = "none";
        btnPause.style.display = "block";
        audio.src = player[i].music;
        playAudio();

    } else {
        btnPlay.style.display = "none";
    }
}

function duration() {

    var audio = document.getElementById("player");
    if (audio.readyState > 0) {
        console.log("rodando");
        var minutes = parseInt(audio.duration / 60, 10);
        var seconds = parseInt(audio.duration % 60);
        document.getElementById('timeend').innerHTML = minutes + ":" + seconds;
    }
}


function pause() {
    let btnPause = document.getElementById("pause");
    let btnPlay = document.getElementById("play1");
    if (btnPause.style.display === "block") {
        btnPlay.style.display = "block";
        btnPause.style.display = "none";
        audio.pause();

    } else {
        btnPlay.style.display = "none";
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
    let btnPause = document.getElementById("pause");
    let btnPlay = document.getElementById("play1");
    audio = document.getElementById("player");
    audio.pause();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
    audio.src = player[div.id].music;
    document.getElementById("musicas").innerHTML = nome[div.id].musicas;
    document.getElementById("capadoAlbum").src = album[div.id].cover;
    playAudio();

}

async function progresso() {
    audio = document.getElementById("player");
    var tempoAtual = audio.currentTime;
    var totalMusica = audio.duration;
    var minutes = parseInt(tempoAtual / 60, 10);
    var seconds = parseInt(tempoAtual % 60);
    document.getElementById("timestart").innerHTML = minutes + ":" + seconds;
    console.log("Atual: " + tempoAtual + " Total: = " + totalMusica);
    var poc = (tempoAtual * 100) / totalMusica;
    console.log(poc);
    document.getElementById("barraProgresso").value = poc;
    setTimeout(function() {
        progresso();
    }, 1000);
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
console.log("clicando", w3_open)

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}