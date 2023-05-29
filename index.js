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