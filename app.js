let drumButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

function playAudio(fileSound) {
    const audio = new Audio(`sounds/${fileSound}`)
    audio.play()
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            playAudio("tom-1.mp3")
            break
        case "a":
            playAudio("tom-2.mp3")
            break
        case "s":
            playAudio("tom-3.mp3")
            break
        case "d":
            playAudio("tom-4.mp3")
            break
        case "j":
            playAudio("snare.mp3")
            break
        case "k":
            playAudio("crash.mp3")
            break
        case "l":
            playAudio("kick-bass.mp3")
            break

        default: console.log(key)
    }
}

function buttonAnimation(currentKey) {
   let activeButton = document.querySelector("." + currentKey)
   
   activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 300)
}



/*
const drumButtons = document.querySelectorAll(".drum");

function playAudio(fileSound) {
    const audio = new Audio(`sounds/${fileSound}.mp3`);
    audio.play();
}

function makeSound(key) {
    const soundMappings = {
        'w': 'tom-1',
        'a': 'tom-2',
        's': 'tom-3',
        'd': 'tom-4',
        'j': 'snare',
        'k': 'crash',
        'l': 'kick-bass',
    };

    const fileSound = soundMappings[key];

    if (fileSound) {
        playAudio(fileSound);
        buttonAnimation(key);
    } else {
        console.log("Tecla no reconocida:", key);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 300);
}

drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
});

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});
*/