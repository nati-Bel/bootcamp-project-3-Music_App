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
