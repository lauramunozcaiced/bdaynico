const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
var vid = document.getElementById("video");
const question = [
  'Cuál ha sido tu mejor recuerdo durante 27 años y por qué?',
  'Piensa en cinco cosas que quisiste tener o ser hasta ahora lo has logrado. No importa lo mínimo que sea', 
  'Cómo quieres vivir?',
  'Que le dirías al Nicolas del pasado, del presente y del futuro', 
  'Algo que quieras dejar de tus 26 años', 
  'Cierra los ojos y como si apagaras una velita de cumpleaños, pide un deseo',
  'Date las gracias por algo o varias cosas',
  'Cómo te ves en un año?',
  'Que huella te gustaría dejar en el mundo?'
]

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    if(modalId == 'modalVid'){
      vid.autoplay = true;
      vid.load();
    }else if(modalId == 'modal'){
      document.getElementById('question').innerText = question[el.dataset.number]
    }
    document.getElementById(modalId).classList.add(isVisible);
    console.log(modalId);
    
    
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    vid.pause();
    vid.currentTime = 0;
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    vid.pause();
    vid.currentTime = 0;
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    vid.pause();
    vid.currentTime = 0;
  }
});

setInterval(function(){
    document.getElementById('modal-buton').classList.add('shake');
    setTimeout(function(){
        document.getElementById('modal-buton').classList.remove('shake');  
    },1000)
}, 5000)

