document.addEventListener('DOMContentLoaded', function () {
    const laudioElement = document.getElementById("lover");
    const saudioElement = document.getElementById("speaknow");
    const faudioElement = document.getElementById("fearless");
    const albumLover = document.getElementById("albumlover");
    const albumSpeakNow = document.getElementById('albumspeaknow');
    const albumFearless = document.getElementById('albumfearless');
    const plakLover = document.getElementById('plaklover');
    const plakSpeakNow = document.getElementById('plakspeaknow');
    const plakFearless = document.getElementById('plakfearless');
    const lyric = document.getElementById("Lyric");
    const loverlyric = document.getElementById("loverlyric");
    const speaknowlyric = document.getElementById("speaknowlyric");
    const fearlesslyric = document.getElementById("fearlesslyric");

    function stopOtherAudios(currentAudioElement) {
        const audioElements = [laudioElement, saudioElement, faudioElement];

        audioElements.forEach((audioElement) => {
            if (audioElement !== currentAudioElement && !audioElement.paused) {
                audioElement.pause();
            }
        });
    }



    function playAudio(audioElement, albumElement, plakElement, sarkisozu) {

        setTimeout(function () {
        albumElement.style.bottom = "150px";
        plakElement.style.bottom = "150px";
        }, 3000);

        setTimeout(function () {
            albumElement.style.left = "150px";
            plakElement.style.left = "150px";
        }, 4000);

        setTimeout(function () {
            plakElement.style.opacity = "1";
            plakElement.style.left = "300px";
        }, 5000);

        stopOtherAudios(audioElement);

        sarkisozu.style.display= "block";
    }

    laudioElement.addEventListener("play", function () {
        playAudio(laudioElement, albumLover, plakLover, loverlyric);
    });

    saudioElement.addEventListener("play", function () {
        playAudio(saudioElement, albumSpeakNow, plakSpeakNow, speaknowlyric);
    });

    faudioElement.addEventListener("play", function () {
        playAudio(faudioElement, albumFearless, plakFearless, fearlesslyric);
    });

    function pauseAudio(audioElement, albumElement, plakElement, sarkisozu) {
        
        plakElement.style.left = "150px";
        albumElement.style.left = "150px";

        setTimeout(function () {
            plakElement.style.left = "";
            plakElement.style.opacity = "";
            albumElement.style.left = "";
        }, 1000);

        setTimeout(function () {
            albumElement.style.bottom = "";
            plakElement.style.bottom = "";
        }, 2000);

        sarkisozu.style.display= "";
    }

    laudioElement.addEventListener("pause", function () {
        pauseAudio(laudioElement, albumLover, plakLover, loverlyric);
    });

    saudioElement.addEventListener("pause", function () {
        pauseAudio(saudioElement, albumSpeakNow, plakSpeakNow, speaknowlyric);
    });

    faudioElement.addEventListener("pause", function () {
        pauseAudio(faudioElement, albumFearless, plakFearless, fearlesslyric);
    });
    
});

