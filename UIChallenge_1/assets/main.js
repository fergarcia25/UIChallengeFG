let slides = document.querySelectorAll('.slide-banner .slide-view');
let slideSayisi = slides.length;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
let loop = 0 + 1000*slideSayisi;

function goNext(){
    loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
                prev.classList.remove('active');
                next.classList.add('active');
            }
}

function goPrev(){
    loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
                prev.classList.add('active');
                next.classList.remove('active');
            }
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);

document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});

function loadSite() {
    const autor = document.getElementById('autor');                    
    autor.style.transform = "translateX(10%)";
    autor.style.opacity = 1;

    const slider = document.getElementById('slider');                    
    slider.style.opacity = 1;
    //document.getElementById('block-banner').style.display = 'block';
}