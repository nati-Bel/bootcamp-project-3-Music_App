
function createAudioPlayer(elementId, audioFile) {
    let element = document.getElementById(elementId);
    element.addEventListener("click", () => {
      let audioTag = document.createElement("audio");
      audioTag.setAttribute("src", audioFile);
      audioTag.play();
    });
  }
  
  createAudioPlayer("crash", "sonidos/crash.wav");
  createAudioPlayer("hiHat", "sonidos/hit-hat.wav");
  createAudioPlayer("highTom", "sonidos/tom1.wav");
  createAudioPlayer("rideCymbal", "sonidos/redoblante.wav");
  createAudioPlayer("floorTom", "sonidos/tom4.wav");
  createAudioPlayer("midTom", "sonidos/tom2.wav");
  createAudioPlayer("snareDrum", "sonidos/tom3.wav");
  

//animaciones

function addAnimationEventListener(elementId, key, animationClass) {
    const element = document.getElementById(elementId);
  
    document.addEventListener("keydown", function(event) {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        element.classList.add(animationClass);
      }
    });
  
    document.addEventListener("keyup", function(event) {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        element.classList.remove(animationClass);
      }
    });
  }
  
  const elementAnimations = [
    { id: "crash", key: "q", animationClass: "crash-animation" },
    { id: "hiHat", key: "a", animationClass: "hiHat-animation" },
    { id: "highTom", key: "w", animationClass: "highTom-animation" },
    { id: "snareDrum", key: "s", animationClass: "snareDrum-animation" },
    { id: "midTom", key: "o", animationClass: "midTom-animation" },
    { id: "rideCymbal", key: "p", animationClass: "rideCymbal-animation" },
    { id: "floorTom", key: "l", animationClass: "floorTom-animation" }
  ];
  
  elementAnimations.forEach(({ id, key, animationClass }) => {
    addAnimationEventListener(id, key, animationClass);
  });

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
    
document.addEventListener('keydown', handleKeyDown,);
      

