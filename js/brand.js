/* section 1 - mask */
let maskTT = $('.sec_1 .mask h2'),
  sec1 = $('.sec_1_after'),
  sec2 = $('.sec_2'),
  sec2OST = $('.sec_2').offset().top,
  maskActive = true;


//hide()
$('.sec_2 h2, .sec_2 h3').fadeOut();

$(window).on('scroll', function () {
  let sct = $(window).scrollTop();
  if (sct > 10) {
    //스크롤 발생시, 텍스트 마스크 실행
    maskTT.addClass('active');
    if (sct > 50) {
      setTimeout(() => {
        sec1.addClass('active');
        $('.sec_1_after h2').addClass('animate__fadeInLeft');
        $('.sec_1_after h3').addClass('animate__fadeInRight');
      }, 500, 'easeInOutBack')
    }

    // if(f == true){
    // } else{
    //   gramInnov.removeClass('animate__fadeInUp');
    // }
    // f = false;
    //한번 실행 후, f 값 변경 

    if (sct > sec2OST - 400) {
      sec2.find('h2, h3').fadeIn(1000, function () {
        // sec2.find('h3').addClass('active');
        sec2.find('h3').css({ transition: '0.5s', transform: 'scale(1.5)' });
      })
      //sec2 페이드인


      // if(sct > minusOST - 300){
      //   minus.addClass('acitve');
      //   $('.sec2_bg').fadeOut(1000); 
      // }
    }
  };
});


//minus effect
let minusIcon = $('.minus'),
  minusImg = $('.minus_effect img');

$(window).on('scroll', function ()  {
  let sct = $(window).scrollTop();

  let minusOST = $('.sec_3').offset().top;
  let plusOSP = $('.sec_4').offset().top;

  let count = 0;

  if (sct > minusOST - 400) {
    minusIcon.addClass('acitve');
    $('.minus_bg').fadeOut(1000);
    if (sct >= minusOST) {
      $('.sec_3').addClass('sticky');
    }
  }
  
  console.log($('.sec_4').innerHeight());
 
  let minusOSTt = $('.minus_effect').innerHeight();
  count = Math.floor(((sct) / minusOSTt) * 24)
  if (count > 24) { 
    minusImg.attr({ "src": `imgs/brand/brand_minus/minus_${count}.png`}) 
  }
  // console.log('카운트', count);
  // console.log('스크롤', sct);

  // if (sct > plusOSP + $('.sec_4').innerHeight()) {
  if (sct > plusOSP + 2000) {
    //minus.addClass('acitve');
    $('.plus_bg').fadeOut(1000);

  }
  console.log('plusOSP',plusOSP)
  console.log('sct',sct)
})





let minusAfter = $('.minus_after'),
  minusMoveOST = minusAfter.offset().top;
//추후 스크롤양 계산해서 실행되도록 작성 예정 


let weightTT = $('.weight li'),
  weightUpCount = weightTT.length,
  currentIdx = 0;

$(window).on('scroll', function () {
  if ($(window).scrollTop() > $('.minus_effect').offset().top) {
    console.log($('.minus_effect').offset())
    //weightTT.css({opacity:0})
    let weightUp = setInterval(() => {
      let nextIdx = (currentIdx + 1) % weightUpCount;
      weightTT.eq(currentIdx).show().css({ transformOrigin: '50% 0' }).animate({ transform: 'scaleY(0)', opacity: 1 }, 1000);

      weightTT.eq(nextIdx).css({ transformOrigin: '50% 100%' }).animate({ transform: 'scaleY(1)' }, 1000);
      currentIdx = nextIdx;

      //console.log(currentIdx)
      if (currentIdx == 2) {
        clearInterval(weightUp);
      }
    }, 1500);

  }




})






$('.plus_tt').hide();
$(window).scroll(function () {

  let scrollAmt = $(window).scrollTop();
  let plusOpenOST = $('.plus_open').offset().top;
  //console.log('scroll_ATM :', scroll_AMT);
  console.log('plusOpenOST', plusOpenOST);
  if (scrollAmt > plusOpenOST) {
    $('.plus_open').addClass('sticky');
  } else {
    $('.plus_open').remove('sticky');
  }
  let gram_height = $('.plus_effect').innerHeight();
  let count = Math.floor(((scrollAmt) / gram_height) * 8)
  // console.log('카운트', count);
  // console.log('그램헤이트', gram_height);
  // console.log(`스크롤${scrollAmt}`);
  if (scrollAmt + 300 > 24 * count) {
    $('.plus_effect img').attr({ "src": `imgs/brand/brand_plus/plus_${count + 1}.png` })
    if (count == 35) {
      $('.plus_tt').fadeIn();
    }

  }

})


let plusImg = $('.plus_open img');


$(window).scroll(function () {
  let sct = $(window).scrollTop();
  let plusOSP = $('.sec_4').offset().top;
  //console.log('scroll_ATM :', scroll_AMT);
  if (sct > plusOSP - 300) {
    //minus.addClass('acitve');
    $('.plus_bg').fadeOut(1000);
  }
})
