let g = gsap;
let tl = gsap.timeline;

g.to('#scrollingTextpage1', {
  transform: 'translateX(-80%)',

  scrollTrigger: {
    trigger: '.page1',
    scroller: 'body',
    scrub: 4,
    pin: true,
    start: 'top 0',
    end: 'top -2000',
  },
});
gsap.from('.width', {
  stagger: 0.3,
  delay: 0.15,
  width: '0%',
  scrollTrigger: {
    scrub: 3,
    pin: true,
    trigger: '.page2',
    scroller: 'body',
    start: 'top 0',
    end: 'top -1500',
  },
});

gsap.from('.cardinside', {
  stagger: 0.5,
  delay: 0.2,
  width: '0%',
  opacity: '0',
  color: 'transparent',
  fontSize: '0px',
  scrollTrigger: {
    scrub: 3,
    trigger: '.page2',
    scroller: 'body',
    start: 'top 100',
    end: 'top -1500',
  },
});

gsap.from('.cardimage', {
  stagger: 0.5,
  delay: 0.2,
  width: '0px',
  opacity: 0,
  scrollTrigger: {
    scrub: 2,
    trigger: '.cardinside',
    scroller: 'body',
    start: 'top 0',
    end: 'top -1500',
  },
});

gsap.to('.skillsection', {
  transform: 'translateX(-40%)',
  scrollTrigger: {
    scroller: 'body',
    trigger: '.page3',
    scrub: 2,
    pin: true,
    start: 'top 0',
    end: 'top -1500',
  },
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scrollbar').style.width = scrolled + 7 + '%';
}

let cursorinside = document.getElementById('customcursorinside');

let cursoroutside = document.getElementById('customcursoroutside');

let cursorback = document.getElementById('customcursorback');

window.addEventListener('mousemove', function (e) {
  cursorinside.style.left = e.clientX + 'px';
  cursorinside.style.top = e.clientY + 'px';
  cursorback.style.left = e.clientX + 'px';
  cursorback.style.top = e.clientY + 'px';

  // cursoroutside.style.top = e.clientY + 'px';
  // cursoroutside.style.left = e.clientX + 'px';

  cursoroutside.animate(
    {
      left: e.clientX + 'px',
      top: e.clientY + 'px',
    },
    {
      duration: 150,
      fill: 'forwards',
    }
  );
});
