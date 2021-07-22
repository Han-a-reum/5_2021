$('body').niceScroll({
  scrollspeed: 10
});

// 타이틀
gsap.to('.txt_1_1', {
  y:100,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_1',
    markers:true,
  },
});

// 오버뷰
gsap.to('.bn_1_1', {
  y:100,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_1_1',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});

// 프로젝트골
gsap.to('.txt_2_1', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_2_1',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});

// 페르소나
gsap.to('.txt_2_2', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_2_2',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});

// 디자인시스템 타이틀
gsap.to('.txt_3_1', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_3_1',
    markers:true,
    start:'0% 100%',
    end:'100% 0',
  },
});