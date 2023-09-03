document.addEventListener('DOMContentLoaded', function () {
    var loverAudio = document.getElementById('lover');
    var speaknowAudio = document.getElementById('speaknow');
    var fearlessAudio = document.getElementById('fearless');
    var albumDiv = document.getElementById('album');
    
    var audioElements = [loverAudio, speaknowAudio, fearlessAudio];
    
    audioElements.forEach(function (audio) {
        audio.addEventListener('play', function () {
            albumDiv.style.backgroundImage = getBackgroundImageForAudio(audio.id);
            
            // Diğer audio elementlerini durdurun
            audioElements.forEach(function (otherAudio) {
                if (otherAudio !== audio && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
        
        audio.addEventListener('pause', function () {
            albumDiv.style.backgroundImage = "none";
        });
    });

    function getBackgroundImageForAudio(audioId) {
        const backgrounds = {
            'lover': "url(https://upload.wikimedia.org/wikipedia/tr/c/cd/Taylor_Swift_-_Lover.png)",
            'speaknow': "url(https://i.scdn.co/image/ab67616d0000b2730b04da4f224b51ff86e0a481)",
            'fearless': "url(https://hips.hearstapps.com/hmg-prod/images/148022559-884819482089040-4676896142298036016-n-1613146852.jpg?crop=0.850xw:0.850xh;0.129xw,0.111xh&resize=1200:*)",
        };

        return backgrounds[audioId] || "none";
    }
});