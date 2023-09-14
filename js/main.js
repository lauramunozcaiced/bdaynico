const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
var vid = document.getElementById("video");

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    console.log(modalId);
    if(modalId == 'modal2'){
      vid.autoplay = true;
      vid.load();
    }
    
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

