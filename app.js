'use strict'
{
  const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    // Toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      body.classList.toggle('noscroll');
      //li animate
      navLinks.forEach((links, index) => {
        if (links.style.animation) {
          links.style.animation = '';
        } else {
          links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
        }
      });
      // burger animation
      burger.classList.toggle('toggle');
    });
  }
  navSlider();

  const textAnimation = () => {
    // textanimation
    const text = document.querySelector('.text');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(let i=0; i < splitText.length;
      i++){
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fade');
      char++
      if(char === splitText.length){
        complete();
        return;
      }
    }
    function complete(){
      clearInterval(timer);
      timer = null;
    }
  }
  textAnimation();

  const smooth = () => {
    // スムーススクロール
    const smoothScrollTrigger = document.querySelectorAll('#smooth');
    for (let i = 0; i < smoothScrollTrigger.length; i++){
      smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      });
    }
  }
  smooth();

  const visualEffect = () => {
    // Visual Effect
    function scrollAppear(){
      let introText = document.querySelector('.about-me');
      let introPosition = introText.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
  
      if (introPosition < screenPosition){
        introText.classList.add('intro-appear');
      }
    }
    window.addEventListener('scroll',scrollAppear);
  }
  visualEffect();
}