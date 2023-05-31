let crashPlay = document.getElementById("crash")

crashPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/crash.wav")
    audioTag.play()
})








let hiHatPlay = document.getElementById("hiHat")

hiHatPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/hit-hat.wav")
    audioTag.play()
})

let highTomPlay = document.getElementById("highTom")

highTomPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/tom1.wav")
    audioTag.play()
})




let rideCymbalPlay = document.getElementById("rideCymbal")

rideCymbalPlay.addEventListener ("click", () => {
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/redoblante.wav")
    audioTag.play()
})

let floorTomPlay = document.getElementById ("floorTom")

floorTomPlay.addEventListener ("click", () =>{
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/tom4.wav")
    audioTag.play()

})

let midTomPlay = document.getElementById ("midTom")

midTomPlay.addEventListener ("click", () =>{
    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/tom2.wav")
    audioTag.play()
})

let snareDrumPlay = document.getElementById ("snareDrum")

snareDrumPlay.addEventListener ("click", () => {

    let audioTag = document.createElement("audio")
    audioTag.setAttribute("src", "resources/sonidos/tom3.wav")
    audioTag.play()

})
