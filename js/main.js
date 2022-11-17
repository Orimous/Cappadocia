const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      slides2 = document.querySelectorAll('.slide2'),
      prev2 = document.getElementById('btn-prev-2'),
      next2 = document.getElementById('btn-next-2');

let index = 0;

const activeSlide = n => {
    for(slide2 of slides) {
        slide2.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    }else{
        index++; 
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    }else{
        index--; 
        activeSlide(index);
    }
}

//второй слайд

const activeSlide2 = n => {
    for(slide2 of slides2) {
        slide2.classList.remove('active');
    }
    slides2[n].classList.add('active');
}

const nextSlide2 = () => {
    if(index == slides2.length - 1) {
        index = 0;
        activeSlide2(index);
    }else{
        index++; 
        activeSlide2(index);
    }
}

const prevSlide2 = () => {
    if(index == 0) {
        index = slides2.length - 1;
        activeSlide2(index);
    }else{
        index--; 
        activeSlide2(index);
    }
}





next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
next2.addEventListener('click', nextSlide2);
prev2.addEventListener('click', prevSlide2);
