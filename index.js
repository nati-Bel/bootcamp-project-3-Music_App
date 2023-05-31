

let crashPlay = document.getElementById("crash")

crashPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/crash.wav")
    audioTag.play()
})

let hiHatPlay = document.getElementById("hiHat")

hiHatPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/hit-hat.wav")
    audioTag.play()
})

let highTomPlay = document.getElementById("highTom")

highTomPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/tom1.wav")
    audioTag.play()
})

let rideCymbalPlay = document.getElementById("rideCymbal")

rideCymbalPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/redoblante.wav")
    audioTag.play()
})

let floorTomPlay = document.getElementById ("floorTom")

floorTomPlay.addEventListener ("click", () =>{
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/tom4.wav")
    audioTag.play()

})

let midTomPlay = document.getElementById ("midTom")

midTomPlay.addEventListener ("click", () =>{
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/tom2.wav")
    audioTag.play()
})

let snareDrumPlay = document.getElementById ("snareDrum")

snareDrumPlay.addEventListener ("click", () => {

    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "sonidos/tom3.wav")
    audioTag.play()

})

//PRUEBAS CON JAVASCRIPT PARA LAS TECLAS

// // Obtener una referencia al elemento con el ID "crash"
// let crashElement = document.getElementById("crash");

// // Función para reproducir el sonido al presionar la tecla "A"
// function playCrashSound() {
//     let audioTag = document.createElement("audio");
//     audioTag.setAttribute("src", "sonidos/crash.wav");
//     audioTag.play();
// }

// Evento para detectar la tecla "A" presionada y soltada
document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        crashElement.classList.add("crash-animation");
        playCrashSound();
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "a" || event.key === "A") {
        crashElement.classList.remove("crash-animation");
    }
});

//js de YOLANDA

let soundMap = {
    'q': 'crash.wav',
    'a': 'hit-hat.wav',
    'w': 'tom1.wav',
    's': 'tom3.wav',
    'o': 'tom2.wav',
    'l': 'tom4.wav',
    'p': 'redoblante.wav'
  };
  
  function handleKeyDown(event) {
    let key = event.key.toLowerCase();
    if (soundMap.hasOwnProperty(key)) {
      playSound(soundMap[key]);
    }
  }
  
  function playSound(soundFile) {
    let audio = new Audio(`sonidos/${soundFile}`);
    audio.play();
  }

  // Funcion para animacion

  function playAnimation(event) {
    let audio = new Audio(`sonidos/${soundFile}`);
    audio.play();
  }
      
    document.addEventListener('keydown', handleKeyDown,);
      