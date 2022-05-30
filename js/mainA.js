

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h1');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h2');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h3');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h4');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h5');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h6');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h7');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h8');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});


window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h9');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h10');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h11');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});

window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('h12');
  const likeUnlikePost = function () {
    if (heart.classList.contains('like')) {
      heart.classList.remove('like');
      heart.classList.add('unlike');
    } else {
      heart.classList.remove('unlike');
      heart.classList.add('like');
    }
  }
  heart.addEventListener('click', likeUnlikePost)
});


/*Intersection Observer*/

let imagen1 = document.getElementById('img-one');
let imagen2 = document.getElementById('img-two');

let tipos = document.getElementById('tipos');

let cargar = (entradas, observador) =>{

  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible');
    }else{
      // entrada.target.classList.remove('visible');
    }   
  });
}

  const observador = new IntersectionObserver(cargar,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  });
 
  observador.observe(imagen1);
  observador.observe(imagen2);
  observador.observe(tipos);






















