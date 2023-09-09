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


    const fearlesslyric = [
        { text: "Love Story", time: 0 },
        { text: "We were both young when I first saw you", time: 5000 }, // 5 saniye sonra
        { text: "I close my eyes and the flashback starts", time: 10000 }, // 10 saniye sonra
        { text: "I'm standing there", time: 15000 }, // 15 saniye sonra
        { text: "On a balcony in summer air", time: 20000 }, // 20 saniye sonra
        { text: "See the lights, see the party, the ball gowns", time: 25000 }, // 25 saniye sonra
        { text: "See you make your way through the crowd", time: 30000 }, // 30 saniye sonra
        { text: 'And say "Hello"', time: 35000 }, // 35 saniye sonra
        { text: "Little did I know", time: 40000 }, // 40 saniye sonra
        { text: "That you were Romeo, you were throwing pebbles", time: 45000 }, // 45 saniye sonra
        { text: 'And my daddy said, "Stay away from Juliet"', time: 50000 }, // 50 saniye sonra
        { text: "And I was crying on the staircase", time: 55000 }, // 55 saniye sonra
        { text: 'Begging you, "Please don\'t go"', time: 60000 }, // 60 saniye sonra
        { text: "And I said", time: 65000 }, // 65 saniye sonra
        { text: '"Romeo take me somewhere we can be alone', time: 70000 }, // 70 saniye sonra
        { text: "I'll be waiting, all there's left to do is run", time: 75000 }, // 75 saniye sonra
        { text: "You'll be the prince, and I'll be the princess", time: 80000 }, // 80 saniye sonra
        { text: "It's a love story, baby, just say yes", time: 85000 }, // 85 saniye sonra
        { text: "So I sneak out to the garden to see you", time: 90000 }, // 90 saniye sonra
        { text: "We keep quiet 'cause we're dead if they knew", time: 95000 }, // 95 saniye sonra
        { text: "So close your eyes", time: 100000 }, // 100 saniye sonra
        { text: "Escape this town for a little while, oh, oh", time: 105000 }, // 105 saniye sonra
        { text: "Cause you were Romeo, I was a scarlet letter", time: 110000 }, // 110 saniye sonra
        { text: 'And my daddy said, "Stay away from Juliet"', time: 115000 }, // 115 saniye sonra
        { text: "But you were everything to me", time: 120000 }, // 120 saniye sonra
        { text: 'I was begging you, "Please don\'t go"', time: 125000 }, // 125 saniye sonra
        { text: "And I said", time: 130000 }, // 130 saniye sonra
        { text: '"Romeo, take me somewhere we can be alone', time: 135000 }, // 135 saniye sonra
        { text: "I'll be waiting, all there's left to do is run", time: 140000 }, // 140 saniye sonra
        { text: "You'll be the prince, and I'll be the princess", time: 145000 }, // 145 saniye sonra
        { text: "It's a love story, baby, just say yes", time: 150000 }, // 150 saniye sonra
        { text: "Romeo, save me, they're trying to tell me how to feel", time: 155000 }, // 155 saniye sonra
        { text: "This love is difficult, but it's real", time: 160000 }, // 160 saniye sonra
        { text: "Don't be afraid, we'll make it out of this mess", time: 165000 }, // 165 saniye sonra
        { text: "It's a love story, baby, just say yes", time: 170000 }, // 170 saniye sonra
        { text: "Oh, oh", time: 175000 }, // 175 saniye sonra
        { text: "I got tired of waiting", time: 180000 }, // 180 saniye sonra
        { text: "Wondering if you were ever coming around", time: 185000 }, // 185 saniye sonra
        { text: "My faith in you was fading", time: 190000 }, // 190 saniye sonra
        { text: "When I met you on the outskirts of town", time: 195000 }, // 195 saniye sonra
        { text: "And I said", time: 200000 }, // 200 saniye sonra
        { text: '"Romeo, save me, I\'ve been feeling so alone', time: 205000 }, // 205 saniye sonra
        { text: "I keep waiting for you, but you never come", time: 210000 }, // 210 saniye sonra
        { text: "Is this in my head? I don't know what to think", time: 215000 }, // 215 saniye sonra
        { text: "He knelt to the ground and pulled out a ring", time: 220000 }, // 220 saniye sonra
        { text: "And said", time: 225000 }, // 225 saniye sonra
        { text: '"Marry me, Juliet, you\'ll never have to be alone', time: 230000 }, // 230 saniye sonra
        { text: "I love you, and that's all I really know", time: 235000 }, // 235 saniye sonra
        { text: "I talked to your dad, go pick out a white dress", time: 240000 }, // 240 saniye sonra
        { text: "It's a love story, baby, just say yes", time: 245000 }, // 245 saniye sonra
        { text: "Oh, oh", time: 250000 }, // 250 saniye sonra
        { text: "Oh, oh, oh", time: 255000 }, // 255 saniye sonra
        { text: "Cause we were both young when I first saw you", time: 260000 }, // 260 saniye sonra
    ];

    function displayNextLine() {
        if (currentLine < fearlesslyric.length) {
            lyric.innerHTML = fearlesslyric[currentLine].text;
            currentLine++;
        } else {
            clearInterval(interval);
        }
    }

    const speaknowlyric = [
        { text: "Enchanted", time: 0 },
        { text: "There I was again tonight", time: 5000 }, // 5 saniye sonra
        { text: "Forcing laughter, faking smiles", time: 10000 }, // 10 saniye sonra
        { text: "Same old tired, lonely place", time: 15000 }, // 15 saniye sonra
        { text: "Walls of insincerity, shifting eyes and vacancy", time: 20000 }, // 20 saniye sonra
        { text: "Vanished when I saw your face", time: 25000 }, // 25 saniye sonra
        { text: "All I can say is, it was enchanting to meet you", time: 30000 }, // 30 saniye sonra
        { text: "Your eyes whispered, 'Have we met?'", time: 35000 }, // 35 saniye sonra
        { text: "'Cross the room your silhouette", time: 40000 }, // 40 saniye sonra
        { text: "Starts to make its way to me", time: 45000 }, // 45 saniye sonra
        { text: "The playful conversation starts", time: 50000 }, // 50 saniye sonra
        { text: "Counter all your quick remarks", time: 55000 }, // 55 saniye sonra
        { text: "Like passing notes in secrecy", time: 60000 }, // 60 saniye sonra
        { text: "And it was enchanting to meet you", time: 65000 }, // 65 saniye sonra
        { text: "All I can say is, I was enchanted to meet you", time: 70000 }, // 70 saniye sonra
        { text: "This night is sparkling, don't you let it go", time: 75000 }, // 75 saniye sonra
        { text: "I'm wonderstruck, blushing all the way home", time: 80000 }, // 80 saniye sonra
        { text: "I'll spend forever wondering if you knew", time: 85000 }, // 85 saniye sonra
        { text: "I was enchanted to meet you", time: 90000 }, // 90 saniye sonra
        { text: "The lingering question kept me up", time: 95000 }, // 95 saniye sonra
        { text: "2 AM, who do you love?", time: 100000 }, // 100 saniye sonra
        { text: "I wonder 'til I'm wide awake", time: 105000 }, // 105 saniye sonra
        { text: "And now I'm pacing back and forth", time: 110000 }, // 110 saniye sonra
        { text: "Wishing you were at my door", time: 115000 }, // 115 saniye sonra
        { text: "I'd open up and you would say, 'Hey'", time: 120000 }, // 120 saniye sonra
        { text: "It was enchanting to meet you", time: 125000 }, // 125 saniye sonra
        { text: "All I know is, I was enchanted to meet you", time: 130000 }, // 130 saniye sonra
        { text: "This night is sparkling, don't you let it go", time: 135000 }, // 135 saniye sonra
        { text: "I'm wonderstruck, blushing all the way home", time: 140000 }, // 140 saniye sonra
        { text: "I'll spend forever wondering if you knew", time: 145000 }, // 145 saniye sonra
        { text: "That this night is flawless, don't you let it go", time: 150000 }, // 150 saniye sonra
        { text: "I'm wonderstruck, dancing around all alone", time: 155000 }, // 155 saniye sonra
        { text: "I'll spend forever wondering if you knew", time: 160000 }, // 160 saniye sonra
        { text: "I was enchanted to meet you", time: 165000 }, // 165 saniye sonra
        { text: "This is me praying that", time: 170000 }, // 170 saniye sonra
        { text: "This was the very first page", time: 175000 }, // 175 saniye sonra
        { text: "Not where the story line ends", time: 180000 }, // 180 saniye sonra
        { text: "My thoughts will echo your name, until I see you again", time: 185000 }, // 185 saniye sonra
        { text: "These are the words I held back, as I was leaving too soon", time: 190000 }, // 190 saniye sonra
        { text: "I was enchanted to meet you", time: 195000 }, // 195 saniye sonra
        { text: "Please don't be in love with someone else", time: 200000 }, // 200 saniye sonra
        { text: "Please don't have somebody waiting on you", time: 205000 }, // 205 saniye sonra
        { text: "Please don't be in love with someone else", time: 210000 }, // 210 saniye sonra
        { text: "Please don't have somebody waiting on you", time: 215000 }, // 215 saniye sonra
        { text: "This night is sparkling, don't you let it go", time: 220000 }, // 220 saniye sonra
        { text: "I'm wonderstruck, blushing all the way home", time: 225000 }, // 225 saniye sonra
        { text: "I'll spend forever wondering if you knew", time: 230000 }, // 230 saniye sonra
        { text: "This night is flawless, don't you let it go", time: 235000 }, // 235 saniye sonra
        { text: "I'm wonderstruck, dancing around all alone", time: 240000 }, // 240 saniye sonra
        { text: "I'll spend forever wondering if you knew", time: 245000 }, // 245 saniye sonra
        { text: "I was enchanted to meet you", time: 250000 }, // 250 saniye sonra
        { text: "Please don't be in love with someone else", time: 255000 }, // 255 saniye sonra
        { text: "Please don't have somebody waiting on you", time: 260000 } // 260 saniye sonra
    ];

    function displayNextLine() {
        if (currentLine < speaknowlyric.length) {
            lyric.innerHTML = speaknowlyric[currentLine].text;
            currentLine++;
        } else {
            clearInterval(interval);
        }
    }

    const loverlyric = [
        { text: "Cruel Summer", time: 0 },
        { text: "Fever dream high in the quiet of the night", time: 5000 }, // 5 saniye sonra
        { text: "You know that I caught it", time: 10000 }, // 10 saniye sonra
        { text: "Bad, bad boy", time: 15000 }, // 15 saniye sonra
        { text: "Shiny toy with a price", time: 20000 }, // 20 saniye sonra
        { text: "You know that I bought it", time: 25000 }, // 25 saniye sonra
        { text: "Killing me slow, out the window", time: 30000 }, // 30 saniye sonra
        { text: "I'm always waiting for you to be waiting below", time: 35000 }, // 35 saniye sonra
        { text: "Devils roll the dice, angels roll their eyes", time: 40000 }, // 40 saniye sonra
        { text: "What doesn't kill me makes me want you more", time: 45000 }, // 45 saniye sonra
        { text: "And it's new, the shape of your body", time: 50000 }, // 50 saniye sonra
        { text: "It's blue, the feeling I've got", time: 55000 }, // 55 saniye sonra
        { text: "And it's ooh, whoa, oh", time: 60000 }, // 60 saniye sonra
        { text: "It's a cruel summer", time: 65000 }, // 65 saniye sonra
        { text: "It's cool, that's what I tell 'em", time: 70000 }, // 70 saniye sonra
        { text: "No rules in breakable heaven", time: 75000 }, // 75 saniye sonra
        { text: "But ooh, whoa oh", time: 80000 }, // 80 saniye sonra
        { text: "It's a cruel summer", time: 85000 }, // 85 saniye sonra
        { text: "With you", time: 90000 }, // 90 saniye sonra
        { text: "Hang your head low", time: 95000 }, // 95 saniye sonra
        { text: "In the glow of the vending machine", time: 100000 }, // 100 saniye sonra
        { text: "I'm not dying", time: 105000 }, // 105 saniye sonra
        { text: "You say that we'll just screw it up in these trying times", time: 110000 }, // 110 saniye sonra
        { text: "We're not trying", time: 115000 }, // 115 saniye sonra
        { text: "So cut the headlights, summer's a knife", time: 120000 }, // 120 saniye sonra
        { text: "I'm always waiting for you just to cut to the bone", time: 125000 }, // 125 saniye sonra
        { text: "Devils roll the dice, angels roll their eyes", time: 130000 }, // 130 saniye sonra
        { text: "And if I bleed, you'll be the last to know", time: 135000 }, // 135 saniye sonra
        { text: "Oh, it's new, the shape of your body", time: 140000 }, // 140 saniye sonra
        { text: "It's blue, the feeling I've got", time: 145000 }, // 145 saniye sonra
        { text: "And it's ooh, whoa, oh", time: 150000 }, // 150 saniye sonra
        { text: "It's a cruel summer", time: 155000 }, // 155 saniye sonra
        { text: "It's cool, that's what I tell 'em", time: 160000 }, // 160 saniye sonra
        { text: "No rules in breakable heaven", time: 165000 }, // 165 saniye sonra
        { text: "But ooh, whoa, oh", time: 170000 }, // 170 saniye sonra
        { text: "It's a cruel summer", time: 175000 }, // 175 saniye sonra
        { text: "With you", time: 180000 }, // 180 saniye sonra
        { text: "I'm drunk in the back of the car", time: 185000 }, // 185 saniye sonra
        { text: "And I cried like a baby coming home from the bar (oh)", time: 190000 }, // 190 saniye sonra
        { text: "Said, 'I'm fine, ' but it wasn't true", time: 195000 }, // 195 saniye sonra
        { text: "I don't wanna keep secrets just to keep you", time: 200000 }, // 200 saniye sonra
        { text: "And I snuck in through the garden gate", time: 205000 }, // 205 saniye sonra
        { text: "Every night that summer just to seal my fate (oh)", time: 210000 }, // 210 saniye sonra
        { text: "And I screamed for whatever it's worth", time: 215000 }, // 215 saniye sonra
        { text: "\"I love you, \" ain't that the worst thing you ever heard?", time: 220000 }, // 220 saniye sonra
        { text: "He looks up grinning like a devil", time: 225000 }, // 225 saniye sonra
        { text: "It's new, the shape of your body", time: 230000 }, // 230 saniye sonra
        { text: "It's blue, the feeling I've got", time: 235000 }, // 235 saniye sonra
        { text: "And it's ooh, whoa, oh", time: 240000 }, // 240 saniye sonra
        { text: "It's a cruel summer", time: 245000 }, // 245 saniye sonra
        { text: "It's cool, that's what I tell 'em", time: 250000 }, // 250 saniye sonra
        { text: "No rules, in breakable heaven", time: 255000 }, // 255 saniye sonra
        { text: "But ooh, whoa, oh", time: 260000 }, // 260 saniye sonra
        { text: "It's a cruel summer", time: 265000 }, // 265 saniye sonra
        { text: "With you", time: 270000 }, // 270 saniye sonra
        { text: "I'm drunk in the back of the car", time: 275000 }, // 275 saniye sonra
        { text: "And I cried like a baby coming home from the bar (oh)", time: 280000 }, // 280 saniye sonra
        { text: "Said, 'I'm fine, ' but it wasn't true", time: 285000 }, // 285 saniye sonra
        { text: "I don't wanna keep secrets just to keep you", time: 290000 }, // 290 saniye sonra
        { text: "And I snuck in through the garden gate", time: 295000 }, // 295 saniye sonra
        { text: "Every night that summer just to seal my fate (oh)", time: 300000 }, // 300 saniye sonra
        { text: "And I screamed for whatever it's worth", time: 305000 }, // 305 saniye sonra
        { text: "\"I love you, \" ain't that the worst thing you ever heard?", time: 310000 }, // 310 saniye sonra
    ];


    function displayNextLine() {
        if (currentLine < loverlyric.length) {
            lyric.innerHTML = loverlyric[currentLine].text;
            currentLine++;
        } else {
            clearInterval(interval);
        }
    }


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

