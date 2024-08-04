document.querySelector(".text-animation h1").innerHTML = document.querySelector(".text-animation").textContent.replace(/./g, '<span>&&</span>');

let spans = document.querySelectorAll(".text-animation h1 span");
for(let i=0;i<spans.length;i++){
    spans[i].style.animationDelay = (i*250)+"ms";
}

audio.load();
