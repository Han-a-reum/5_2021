$('body').niceScroll({
  scrollspeed: 10
});

gsap.to('.txt_1_1', {
  y:100,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_1',
    markers:true,
  },
});

gsap.to('.txt_1_2', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_2',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});