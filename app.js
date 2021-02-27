const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const textContainer = intro.querySelector('div');
const title = textContainer.querySelector('h1');
const subtitle = textContainer.querySelector('p');
const logo = textContainer.querySelector('img');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

//Text Animation
const subAnim = TweenMax.fromTo(subtitle, 3, { opacity: 0 }, { opacity: 1 })
const titleAnim = TweenMax.fromTo(title, 3, { opacity: 0 }, { opacity: 1 })
const logoAnim = TweenMax.fromTo(logo, 3, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 1000
})
.setTween(logoAnim)
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 500
})
.setTween(titleAnim)
.addTo(controller)

let scene4 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: intro,
    triggerHook: 0
  })
  .setTween(subAnim)
  .addTo(controller);