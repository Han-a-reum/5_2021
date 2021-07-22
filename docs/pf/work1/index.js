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
    trigger:'.bn_1_1',
    markers:true,
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

// 로고
gsap.to('.txt_3_2', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.txt_3_2',
    markers:true,
    start:'0% 100%',
    end:'100% 0',
  },
});

// 컬러
gsap.to('.txt_3_3', {
  opacity:1,
  duration:2,
  delay:1,
  scrollTrigger:{
    trigger:'.txt_3_3',
    markers:true,
    start:'0% 100%',
    end:'100% 0',
  },
});

// 타이포
gsap.to('.txt_3_4', {
  opacity:1,
  duration:2,
  delay:2,
  scrollTrigger:{
    trigger:'.txt_3_4',
    markers:true,
    start:'0% 100%',
    end:'100% 0',
  },
});

// 와이어프레임
gsap.to('.bn_3_1', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_3_1',
    markers:true,
    start:'0% 100%',
    end:'100% 0',
  },
});

// 로그인 화면
gsap.to('.bn_4_1', {
  x:-360,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_4_1',
    markers:true,
    start:'100% 100%',
    end:'100% 0',
  },
});

// 스플래쉬 화면
gsap.to('.bn_4_2', {
  x:900,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_4_2',
    markers:true,
    start:'100% 100%',
    end:'100% 0',
  },
});

// 캐릭터 성장
gsap.to('.section-9>div:nth-child(2)', {
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.section-9>div:nth-child(2)',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});

// 위젯1
gsap.to('.section-10>div:last-child', {
  y:300,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.section-10>div:last-child',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});

// 위젯2
gsap.to('.section-11>div:first-child', {
  y:300,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.section-11>div:first-child',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});


// 알림
gsap.to('.section-11>div:last-child', {
  y:600,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.section-11>div:last-child',
    markers:true,
    start:'50% 100%',
    end:'100% 0',
  },
});