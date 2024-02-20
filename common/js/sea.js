var ocean_sitv;
var anchor_sitv;
var welcome_sitv;
var shark_sitv;
var sea_water_len = 0;
var icon_g_c = true;
$(document).ready(function () {
  mouse_wheel();
  creat_water_drop();
  sea_water_len = $('.sea_water_ul li').length;
  $('.water').animate({ bottom: '-0.4%' }, 2000, function () {
    $('.fisherman').animate({ left: '37%' }, 1500, function () {
      $('.sun').fadeIn(1500);
      $('.cloud1').fadeIn(1500);
      $('.cloud2').fadeIn(1500, function () {
        cloud1();
        cloud2();
        mouse_scroll();
        $('.mouse_scroll_wrap').fadeIn(500);
      });
      $('.island').fadeIn(1500);
    });
    setTimeout(function () {
      ocean_sitv = setInterval('wave()', 1200);
    }, 500);
  });
  $('.icon li').click(function () {
    if (icon_g_c == true) {
      icon_g_c = false;
      var idx = $(this).index();
      scroll(idx);
      delta_count = idx;
      if (idx == 0) {
        $('.icon').fadeOut(500);
      } else {
        $('.icon').fadeIn(1000);
      }
      $('#wrap').animate({ opacity: 1 }, 500, function () {
        icon_g_c = true;
      });
    }
  });
});
var delta_count = 0;
var gwang_scroll = true;
function mouse_wheel() {
  $(window).on('mousewheel DOMMouseScroll', function (e) {
    if (gwang_scroll == true) {
      gwang_scroll = false;
      var E = e.originalEvent; //자바스크립트 코어 이벤트
      if (E.detail) {
        delta = ((E.detail * -40) / 120) * -1; // E.detail 파이어폭스
      } else {
        delta = (E.wheelDelta / 120) * -1; // E.wheeldelta 익스 크롬
        delta_count = delta + delta_count;
        if (delta_count < 0) {
          delta_count = 0;
        }
        scroll(delta_count);
      }
      if (delta_count == 0) {
        $('.icon').fadeOut(500);
      } else {
        $('.icon').fadeIn(1000);
      }
      $('#wrap').animate({ opacity: 1 }, 500, function () {
        gwang_scroll = true;
      });
    }
  });
}
function scroll(i) {
  var sct_len = $('#wrap > div').length;
  if (i < sct_len) {
    $('#scroll').animate({ top: -i * 1080 }, 500);
  } else {
    i = sct_len - 1;
  }
  console.log(i);
  if (i == 0) {
    clearInterval(ocean_sitv);
    ocean_sitv = setInterval('wave()', 1500);
    cloud_flag = true;
    cloud1();
    cloud2();
    sct01_w_s_flag = true;
    sct01_w_s();
  } else {
    clearInterval(ocean_sitv);
    cloud_flag = false;
    $('.mouse_scroll_wrap').fadeOut(500);
    sct01_w_s_flag = false;
  }
  if (i == 1) {
    sct02_w_s_flag = true;
    sct02_w_s();
    sct02_coral_flag = true;
    sct02_coral();
    $('.anchor').fadeIn(2000);
    $('.rope').fadeIn(2000, function () {
      anchor_sitv = setInterval('anchor()', 10);
      anchor_water_drop();
    });
  } else {
    sct02_w_s_flag = false;
    sct02_coral_flag = false;
  }
  if (i == 2) {
    sct03_w_s_flag = true;
    sct03_w_s();
    sct03_coral_flag = true;
    sct03_coral();
    sea_horse_flag1 = true;
    sea_horse1();
    $('.fish1').animate({ top: '-40%', left: '100%' }, 5000);
    fishing_line();
  } else {
    sct03_w_s_flag = false;
    water_shadow_flag4 = false;
    sct03_coral_flag = false;
    sea_horse_flag1 = false;
  }
  if (i == 3) {
    sct04_w_s_flag = true;
    sct04_w_s();
    $('.jellyfish2').animate(
      { top: '-50%', left: '30%' },
      5000,
      'easeInOutBounce',
      function () {
        $('.jellyfish2').hide();
      }
    );
    red_gomchi_eye_flag = true;
    blue_gomchi_eye_flag = true;
    green_gomchi_eye_flag = true;
    brown_gomchi_eye_flag = true;
    turquoise_gomchi_eye_flag = true;
    red_gomchi_eye();
    blue_gomchi_eye();
    green_gomchi_eye();
    brown_gomchi_eye();
    turquoise_gomchi_eye();
    $('.over_me').delay(2000).fadeIn(1500);
  } else {
    sct04_w_s_flag = false;
    red_gomchi_eye_flag = false;
    blue_gomchi_eye_flag = false;
    green_gomchi_eye_flag = false;
    brown_gomchi_eye_flag = false;
    turquoise_gomchi_eye_flag = false;
    $('.gomchi_wrap > span').stop().animate({ width: '0%' }, 1500);
    clearInterval(html_percent_sitv);
    clearInterval(css_percent_sitv);
    clearInterval(js_percent_sitv);
    clearInterval(jquery_percent_sitv);
    clearInterval(p_s_percent_sitv);
    html_pct = 0;
    css_pct = 0;
    js_pct = 0;
    jquery_pct = 0;
    p_s_pct = 0;
    $('.gomchi_eye_wrap span').text('');
  }
  if (i == 4) {
    sct05_w_s_flag = true;
    sct05_w_s();
    sct05_coral_flag = true;
    sct05_coral();
    $('.submarine_wrap')
      .delay(1000)
      .animate({ left: '15%' }, 3000, 'easeInQuint', function () {
        $('.window_wrap li').eq(0).find('span').delay(300).fadeIn(1000);
        $('.window_wrap li').eq(1).find('span').delay(600).fadeIn(1000);
        $('.window_wrap li').eq(2).find('span').delay(900).fadeIn(1000);
        $('.window_wrap li').eq(3).find('span').delay(1200).fadeIn(1000);
        $('.window_wrap li').eq(4).find('span').delay(1500).fadeIn(1000);
        $('.ghost_fish').animate({ left: '100%' }, 5400);
        $('.submarine_bubble1').animate({ top: '-80%' }, 3000, function () {
          $('.submarine_bubble1').fadeOut(500);
        });
        submarine_bubble_flag = true;
        submarine_bubble();
      });
  } else {
    sct05_w_s_flag = false;
    sct05_coral_flag = false;
    submarine_bubble_flag = false;
  }
  if (i == 5) {
    sct06_w_s_flag = true;
    sct06_w_s();
    sct06_coral_flag = true;
    sct06_coral();
    shellfish_flag = true;
    shellfish();
    starfish_flag = true;
    starfish();
    crab_flag = true;
    crab();
    $('.nemo').delay(1500).animate({ left: '100%' }, 5000, 'easeInSine');
    $('.dori1').delay(4000).animate({ left: '-15%' }, 5000, 'swing');
    $('.dori2')
      .delay(4000)
      .animate({ top: '54%', left: '-10%' }, 5000, 'swing', function () {
        $('.fish_shadow5')
          .delay(500)
          .animate({ top: '-50%', left: '-45%', opacity: 0 }, 3500);
        $('.octopus_wrap').animate({ left: '5%' }, 2000, function () {
          $('.octopus_click').fadeIn(1500);
        });
      });
  } else {
    sct06_w_s_flag = false;
    sct06_coral_flag = false;
    shellfish_flag = false;
    starfish_flag = false;
    crab_flag = false;
  }
}
var w_width = 0;
var w_height = 0;
$(window).resize(function () {
  w_height = $(window).height();
  if (w_height < 540) {
    $('#section01').css('overflow', 'scroll');
    w_width = $(window).height();
  }
});
function img_change() {
  var img_temp = $(this).attr('src');
  img_temp = img.temp.replace('_off.png', '_on.png');
  $(this).attr('src', img_temp);
}
/* 파도 Str */
var sea_water = 0;
var water_shadow_str = true;
function wave() {
  if (water_shadow_str == true) {
    $('.water_shadow1').show();
    sct01_w_s();
    water_shadow_str = false;
  }
  if (sea_water == sea_water_len) {
    sea_water = 0;
  }
  $('.sea_water_ul li').eq(sea_water).fadeIn(0);
  $('.sea_water_ul li').eq(sea_water).siblings().fadeOut(0);
  $('.water').fadeOut(0);
  $('.wave_ul li').eq(sea_water).fadeIn(0);
  $('.wave_ul li').eq(sea_water).siblings().fadeOut(0);
  sea_water = sea_water + 1;
}
/* 파도 End */

/* 구름 Str */
var cloud_flag = true;
function cloud1() {
  if (cloud_flag == true) {
    $('.cloud1')
      .stop()
      .animate({ left: '25%' }, 15000, function () {
        $('.cloud1')
          .stop()
          .animate({ left: '-15%' }, 15000, function () {
            cloud1();
          });
      });
  }
}
function cloud2() {
  if (cloud_flag == true) {
    $('.cloud2')
      .stop()
      .animate({ right: '-15%' }, 12000, function () {
        $('.cloud2')
          .stop()
          .animate({ right: '20%' }, 12000, function () {
            cloud2();
          });
      });
  }
}
/* 구름 End */

/* 마우스 스크롤 Str */
function mouse_scroll() {
  $('.mouse_scroll').animate({ bottom: '61%' }, 1200);
  $('.mouse_scroll').animate({ bottom: '68%' }, 0, function () {
    mouse_scroll();
  });
}
/* 마우스 스크롤 End */

/* 물 그림자 Str */
var sct01_w_s_flag = true;
function sct01_w_s() {
  if (sct01_w_s_flag == true) {
    $('.water_shadow1')
      .stop()
      .animate({ left: '66.92%' }, 7000, function () {
        $('.water_shadow1')
          .stop()
          .animate({ left: '71.92%' }, 7000, function () {
            sct01_w_s();
          });
      });
  }
}
var sct02_w_s_flag = true;
function sct02_w_s() {
  if (sct02_w_s_flag == true) {
    $('.water_shadow2')
      .stop()
      .animate({ left: '32.13%' }, 7000, function () {
        $('.water_shadow2')
          .stop()
          .animate({ left: '27.13%' }, 7000, function () {
            sct02_w_s();
          });
      });
  }
}
var sct03_w_s_flag = true;
function sct03_w_s() {
  if (sct03_w_s_flag == true) {
    $('.water_shadow3').stop().animate({ left: '12.08%' }, 7000);
    $('.water_shadow4')
      .stop()
      .animate({ left: '75%' }, 7000, function () {
        $('.water_shadow3').stop().animate({ left: '7.08%' }, 7000);
        $('.water_shadow4')
          .stop()
          .animate({ left: '80%' }, 7000, function () {
            sct03_w_s();
          });
      });
  }
}
var sct04_w_s_flag = true;
function sct04_w_s() {
  if (sct04_w_s_flag == true) {
    $('.water_shadow5')
      .stop()
      .animate({ left: '0%' }, 7000, function () {
        $('.water_shadow5')
          .stop()
          .animate({ left: '5%' }, 7000, function () {
            sct04_w_s();
          });
      });
  }
}
var sct05_w_s_flag = true;
function sct05_w_s() {
  if (sct05_w_s_flag == true) {
    $('.water_shadow6').stop().animate({ left: '7%' }, 7000);
    $('.water_shadow7')
      .stop()
      .animate({ left: '67%' }, 7000, function () {
        $('.water_shadow6').stop().animate({ left: '2%' }, 7000);
        $('.water_shadow7')
          .stop()
          .animate({ left: '72%' }, 7000, function () {
            sct05_w_s();
          });
      });
  }
}
var sct06_w_s_flag = true;
function sct06_w_s() {
  if (sct06_w_s_flag == true) {
    $('.water_shadow8').stop().animate({ left: '-5%' }, 7000);
    $('.water_shadow9')
      .stop()
      .animate({ left: '11.92%' }, 7000, function () {
        $('.water_shadow8').stop().animate({ left: '0%' }, 7000);
        $('.water_shadow9')
          .stop()
          .animate({ left: '6.92%' }, 7000, function () {
            sct06_w_s();
          });
      });
  }
}
/* 물 그림자 End */

/* 물방울 Str */
function creat_water_drop() {
  for (var i = 0; i < 10; i++) {
    $('.water_drop1').append(
      "<img src='common/images/water_drop1.png' alt='물방울1'>"
    );
    $('.water_drop2').append(
      "<img src='common/images/water_drop2.png' alt='물방울2'>"
    );
    $('.water_drop3').append(
      "<img src='common/images/water_drop3.png' alt='물방울3'>"
    );
    $('.water_drop4').append(
      "<img src='common/images/water_drop4.png' alt='물방울4'>"
    );
    $('.water_drop5').append(
      "<img src='common/images/water_drop5.png' alt='물방울5'>"
    );
    $('.water_drop6').append(
      "<img src='common/images/water_drop6.png' alt='물방울6'>"
    );
    $('.water_drop7').append(
      "<img src='common/images/water_drop7.png' alt='물방울7'>"
    );
    water_drop1(i);
    water_drop2(i);
    water_drop3(i);
    water_drop4(i);
    water_drop5(i);
    water_drop6(i);
    water_drop7(i);
  }
}
/*
function creat_water_drop(){
	for(var i = 0; i < 10; i++){
		$(".water_drop1").append("<img src='common/images/water_drop1.png' alt='물방울1'>");
		$(".water_drop2").append("<img src='common/images/water_drop2.png' alt='물방울2'>");
		$(".water_drop3").append("<img src='common/images/water_drop3.png' alt='물방울3'>");
		water_drop1(i);
		water_drop2(i);
		water_drop3(i);
	}
	for(var i = 0; i < 20; i++){
		$(".water_drop4").append("<img src='common/images/water_drop4.png' alt='물방울4'>");
		$(".water_drop5").append("<img src='common/images/water_drop5.png' alt='물방울5'>");
		$(".water_drop6").append("<img src='common/images/water_drop6.png' alt='물방울6'>");
		water_drop4(i);
		water_drop5(i);
		water_drop6(i);
	}
	for(var i = 0; i < 30; i++){
		$(".water_drop7").append("<img src='common/images/water_drop7.png' alt='물방울7'>");
		water_drop7(i);
	}
}
*/

var w_d_top_str = 500;
var w_d_top_end = -5;
function water_drop1(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop1 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop1 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop1(i);
    });
}
function water_drop2(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop2 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop2 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop2(i);
    });
}
function water_drop3(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop3 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop3 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop3(i);
    });
}
function water_drop4(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop4 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop4 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop4(i);
    });
}
function water_drop5(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop5 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop5 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop5(i);
    });
}
function water_drop6(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop6 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop6 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop6(i);
    });
}
function water_drop7(i) {
  var w_d_left = Math.floor(Math.random() * 100) + 0;
  var w_d_speed = Math.floor(Math.random() * 30000) + 10000;
  $('.water_drop7 img')
    .eq(i)
    .css({ top: w_d_top_str + '%', left: w_d_left + '%' });
  $('.water_drop7 img')
    .eq(i)
    .animate({ top: w_d_top_end + '%' }, w_d_speed, function () {
      water_drop7(i);
    });
}
/* 물방울 End */

/* 산호 Str */
var sct02_coral_flag = true;
function sct02_coral() {
  if (sct02_coral_flag == true) {
    $('.coral1').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: -10,
    });
    $('.coral2').stop().rotate({
      duration: 7000,
      angle: -5,
      animateTo: 5,
    });
    $('.coral3')
      .stop()
      .rotate({
        duration: 7000,
        angle: 0,
        animateTo: -10,
        callback: function () {
          $('.coral1').stop().rotate({
            duration: 7000,
            angle: -10,
            animateTo: 0,
          });
          $('.coral2').stop().rotate({
            duration: 7000,
            angle: 5,
            animateTo: -5,
          });
          $('.coral3')
            .stop()
            .rotate({
              duration: 7000,
              angle: -10,
              animateTo: 0,
              callback: function () {
                sct02_coral();
              },
            });
        },
      });
  }
}
var sct03_coral_flag = true;
function sct03_coral() {
  if (sct03_coral_flag == true) {
    $('.coral4').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: 10,
    });
    $('.coral5').stop().rotate({
      duration: 7000,
      angle: 5,
      animateTo: -5,
    });
    $('.coral6').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: -10,
    });
    $('.coral7').stop().rotate({
      duration: 7000,
      angle: -5,
      animateTo: 5,
    });
    $('.coral8')
      .stop()
      .rotate({
        duration: 7000,
        angle: 0,
        animateTo: -10,
        callback: function () {
          $('.coral4').stop().rotate({
            duration: 7000,
            angle: 10,
            animateTo: 0,
          });
          $('.coral5').stop().rotate({
            duration: 7000,
            angle: -5,
            animateTo: 5,
          });
          $('.coral6').stop().rotate({
            duration: 7000,
            angle: -10,
            animateTo: 0,
          });
          $('.coral7').stop().rotate({
            duration: 7000,
            angle: 5,
            animateTo: -5,
          });
          $('.coral8')
            .stop()
            .rotate({
              duration: 7000,
              angle: -10,
              animateTo: 0,
              callback: function () {
                sct03_coral();
              },
            });
        },
      });
  }
}

var sct05_coral_flag = true;
function sct05_coral() {
  if (sct05_coral_flag == true) {
    $('.coral9').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: 5,
    });
    $('.coral10').stop().rotate({
      duration: 7000,
      angle: 5,
      animateTo: -5,
    });
    $('.coral11').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: -10,
    });
    $('.coral12')
      .stop()
      .rotate({
        duration: 7000,
        angle: 5,
        animateTo: -5,
        callback: function () {
          $('.coral9').stop().rotate({
            duration: 7000,
            angle: 10,
            animateTo: 0,
          });
          $('.coral10').stop().rotate({
            duration: 7000,
            angle: -5,
            animateTo: 5,
          });
          $('.coral11').stop().rotate({
            duration: 7000,
            angle: -10,
            animateTo: 0,
          });
          $('.coral12')
            .stop()
            .rotate({
              duration: 7000,
              angle: -5,
              animateTo: 5,
              callback: function () {
                sct05_coral();
              },
            });
        },
      });
  }
}
var sct06_coral_flag = true;
function sct06_coral() {
  if (sct06_coral_flag == true) {
    $('.coral13').stop().rotate({
      duration: 7000,
      angle: 5,
      animateTo: -5,
    });
    $('.coral14').stop().rotate({
      duration: 7000,
      angle: -5,
      animateTo: 5,
    });
    $('.coral15').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: 10,
    });
    $('.coral16').stop().rotate({
      duration: 7000,
      angle: 0,
      animateTo: 10,
    });
    $('.coral17')
      .stop()
      .rotate({
        duration: 7000,
        angle: 0,
        animateTo: -10,
        callback: function () {
          $('.coral13').stop().rotate({
            duration: 7000,
            angle: -5,
            animateTo: 5,
          });
          $('.coral14').stop().rotate({
            duration: 7000,
            angle: 5,
            animateTo: -5,
          });
          $('.coral15').stop().rotate({
            duration: 7000,
            angle: 10,
            animateTo: 0,
          });
          $('.coral16').stop().rotate({
            duration: 7000,
            angle: 10,
            animateTo: 0,
          });
          $('.coral17')
            .stop()
            .rotate({
              duration: 7000,
              angle: -10,
              animateTo: 0,
              callback: function () {
                sct06_coral();
              },
            });
        },
      });
  }
}
/* 산호 End */

/* 닻 Str */
var anchor_top = -20;
var rope_top = -125;
function anchor() {
  if (anchor_top >= -20 && anchor_top < 10) {
    anchor_top = anchor_top + 1;
    rope_top = rope_top + 1;
  } else if (anchor_top >= 10 && anchor_top <= 80) {
    anchor_top = anchor_top + 0.1;
    rope_top = rope_top + 0.1;
    if (anchor_top > 40) {
      welcome();
    }
  }
  $('.anchor').css('top', anchor_top + '%'); //80
  $('.rope').css('top', rope_top + '%'); //-25
}

var a_w_d_flag = true;
function anchor_water_drop() {
  if (a_w_d_flag == true) {
    a_w_d_flag = false;
    $('.anchor_water_drop1').animate({ top: '-15%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop2').animate({ top: '2%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop3').animate({ top: '0%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop4').animate({ top: '-1%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop5').animate({ top: '-6%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop6').animate({ top: '0%' }, 500, 'easeOutCirc');
    $('.anchor_water_drop7').animate({ top: '17%' }, 460, 'easeOutCirc');
    $('.anchor_water_drop8').animate({ top: '-23%' }, 440, 'easeOutCirc');
    $('.anchor_water_drop9').animate({ top: '31%' }, 420, 'easeOutCirc');
    $('.anchor_water_drop10').animate(
      { top: '10%' },
      440,
      'easeOutCirc',
      function () {
        $('.anchor_water_drop1').delay(0).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop2').delay(0).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop3').delay(0).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop4').delay(180).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop5').delay(200).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop6').delay(220).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop7').delay(180).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop8').delay(200).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop9').delay(220).animate({ top: '-45%' }, 3500);
        $('.anchor_water_drop10').delay(180).animate({ top: '-45%' }, 3500);
      }
    );
  }
}
/* 닻 End */

/* 웰컴 Str */
var welcome_flag = true;
function welcome() {
  if (welcome_flag == true) {
    welcome_flag = false;
    fish_shadow1();
    $('.welcome').show();
    $('.welcome').animate({ top: '30%' }, 1500, 'easeOutBack');
    $('.welcome').rotate({
      duration: 2000,
      angle: 0,
      animateTo: 25,
    });
    $('.welcome').rotate({
      duration: 2000,
      angle: 25,
      animateTo: 0,
      callback: function () {
        shark_sitv = setInterval('shark()', 10);
        setTimeout(function () {
          fish_shadow2();
        }, 1500);
      },
    });
    $('.welcome_water_drop1').animate({ top: '-4%' }, 400, 'easeOutCirc');
    $('.welcome_water_drop2').animate({ top: '-5%' }, 500, 'easeOutCirc');
    $('.welcome_water_drop3').animate({ top: '0%' }, 600, 'easeOutCirc');
    $('.welcome_water_drop4').animate({ top: '19%' }, 400, 'easeOutCirc');
    $('.welcome_water_drop5').animate({ top: '0%' }, 500, 'easeOutCirc');
    $('.welcome_water_drop6').animate({ top: '-4%' }, 600, 'easeOutCirc');
    $('.welcome_water_drop7').animate({ top: '0%' }, 400, 'easeOutCirc');
    $('.welcome_water_drop8').animate({ top: '29%' }, 500, 'easeOutCirc');
    $('.welcome_water_drop9').animate({ top: '0%' }, 600, 'easeOutCirc');
    $('.welcome_water_drop10').animate({ top: '0%' }, 400, 'easeOutCirc');
    $('.welcome_water_drop11').animate({ top: '0%' }, 500, 'easeOutCirc');
    $('.welcome_water_drop12').animate({ top: '-3%' }, 600, 'easeOutCirc');
    $('.welcome_water_drop13').animate({ top: '34%' }, 400, 'easeOutCirc');
    $('.welcome_water_drop14').animate(
      { top: '17%' },
      500,
      'easeOutCirc',
      function () {
        $('.welcome_water_drop1').delay(0).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop2').delay(0).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop3').delay(0).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop4').delay(0).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop5').delay(0).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop6').delay(180).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop7').delay(200).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop8').delay(220).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop9').delay(240).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop10').delay(260).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop11').delay(280).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop12').delay(300).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop13').delay(180).animate({ top: '-60%' }, 3500);
        $('.welcome_water_drop14').delay(200).animate({ top: '-60%' }, 3500);
      }
    );
  }
}
/* 웰컴 End */

/* 물고기 그림자 Str */
function fish_shadow1() {
  $('.fish_shadow1').css('opacity', 1);
  $('.fish_shadow1').animate({ left: '5%', opacity: 0 }, 4000);
}
function fish_shadow2() {
  $('.fish_shadow2').css('opacity', 1);
  $('.fish_shadow2').animate({ left: '50%', opacity: 0 }, 2500);
}
/* 물고기 그림자 End */

/* 백상어 Str */
var shark_move = -54;
function shark() {
  shark_move = shark_move + 0.4;
  console.log(shark_move);
  if (shark_move > -18 && shark_move < 18) {
    var img_temp = $('.shark img').attr('src');
    img_temp = img_temp.replace('_off.png', '_on.png');
    $('.shark img').attr('src', img_temp);
  }
  if (shark_move > 18) {
    $('.welcome').hide();
    var img_temp = $('.shark img').attr('src');
    img_temp = img_temp.replace('_on.png', '_off.png');
    $('.shark img').attr('src', img_temp);
  }
  if (shark_move > 100) {
    clearInterval(shark_sitv);
  }
  $('.shark').css('left', shark_move + '%');
}
/* 백상어 End */

/* 해마 Str */
var sea_horse_flag1 = true;
function sea_horse1() {
  if (sea_horse_flag1 == true) {
    $('.sea_horse1')
      .stop()
      .animate({ top: '26.11%' }, 3000, 'easeOutSine', function () {
        $('.sea_horse1')
          .stop()
          .animate({ top: '6.11%' }, 3000, 'easeOutSine', function () {
            sea_horse1();
          });
      });
  }
}
/* 해마 End */

/* 낚싯줄 Str */
var fishing_line_flag = true;
function fishing_line() {
  if (fishing_line_flag == true) {
    $('.fishing_line_wrap').fadeIn(2000);
    $('.fishing_line_wrap').animate({ top: '-40%' }, 3000, function () {
      $('.tuna_click').fadeIn(1500);
    });
  }
}
var gold_tuna_g_c = true;
function tuna_click() {
  if (gold_tuna_g_c == true) {
    gold_tuna_g_c = false;
    $('.tuna_click').fadeOut(500);
    $('.gold_tuna').animate({ left: '47%' }, 2000, 'easeInSine', function () {
      $('.gold_tuna').css({ top: '73%', left: '41%' });
      $('.gold_tuna').rotate(90);
      $('.born').delay(500).fadeIn(500);
      $('.elementary_school').delay(700).fadeIn(500);
      $('.middle_school').delay(900).fadeIn(500);
      $('.high_school').delay(1100).fadeIn(500);
      $('.university').delay(1300).fadeIn(500);
      $('.company')
        .delay(1500)
        .fadeIn(500, function () {
          $('.fish_shadow3').animate(
            { top: '-30%', left: '100%' },
            5000,
            'easeInOutCirc'
          );
        });
      $('.gold_tuna').animate({ top: '-25%' }, 3000, function () {
        $('.gold_tuna').hide();
      });
      $('.fishing_line_wrap').animate({ top: '-138%' }, 3000, function () {
        $('.fishing_line_wrap').hide();
        gold_tuna_g_c = true;
        fishing_line_flag = false;
      });
    });
  }
}
/* 낚싯줄 End */

/* 곰치 눈 Str */
var red_gomchi_eye_flag = true;
function red_gomchi_eye() {
  if (red_gomchi_eye_flag == true) {
    $('.red_gomchi_eye img').fadeIn(3000, function () {
      $('.red_gomchi_eye img').fadeOut(100, function () {
        red_gomchi_eye();
      });
    });
  }
}
var blue_gomchi_eye_flag = true;
function blue_gomchi_eye() {
  if (blue_gomchi_eye_flag == true) {
    $('.blue_gomchi_eye img')
      .delay(500)
      .fadeIn(3000, function () {
        $('.blue_gomchi_eye img').fadeOut(200, function () {
          blue_gomchi_eye();
        });
      });
  }
}
var green_gomchi_eye_flag = true;
function green_gomchi_eye() {
  if (green_gomchi_eye_flag == true) {
    $('.green_gomchi_eye img')
      .delay(1000)
      .fadeIn(3000, function () {
        $('.green_gomchi_eye img').fadeOut(500, function () {
          green_gomchi_eye();
        });
      });
  }
}
var brown_gomchi_eye_flag = true;
function brown_gomchi_eye() {
  if (brown_gomchi_eye_flag == true) {
    $('.brown_gomchi_eye img').fadeIn(3000, function () {
      $('.brown_gomchi_eye img').fadeOut(500, function () {
        brown_gomchi_eye();
      });
    });
  }
}
var turquoise_gomchi_eye_flag = true;
function turquoise_gomchi_eye() {
  if (turquoise_gomchi_eye_flag == true) {
    $('.turquoise_gomchi_eye img')
      .delay(1000)
      .fadeIn(3000, function () {
        $('.turquoise_gomchi_eye img').fadeOut(500, function () {
          turquoise_gomchi_eye();
        });
      });
  }
}
/* 곰치 눈 End */

var gomchi_skill_percent = 0;
var gomchi_right = 0;
var html_percent_sitv;
var css_percent_sitv;
var js_percent_sitv;
var jquery_percent_sitv;
var p_s_percent_sitv;
/* 동굴에서 나오는 곰치 Str */
function come_out_gomchi(i) {
  $('.gomchi_eye_wrap > div').eq(i).find('img').hide();
  if (i == 0) {
    red_gomchi_eye_flag = false;
    gomchi_skill_percent = 50;
    gomchi_right = 9;
    html_percent_sitv = setInterval('html_percent()', 35);
  } else if (i == 1) {
    blue_gomchi_eye_flag = false;
    gomchi_skill_percent = 50;
    gomchi_right = 9;
    css_percent_sitv = setInterval('css_percent()', 35);
  } else if (i == 2) {
    green_gomchi_eye_flag = false;
    gomchi_skill_percent = 50;
    gomchi_right = 9;
    js_percent_sitv = setInterval('js_percent()', 35);
  } else if (i == 3) {
    brown_gomchi_eye_flag = false;
    gomchi_skill_percent = 50;
    gomchi_right = 9;
    $('.fish_shadow4').animate({ top: '20%', left: '100%' }, 3000);
    jquery_percent_sitv = setInterval('jquery_percent()', 35);
  } else if (i == 4) {
    turquoise_gomchi_eye_flag = false;
    gomchi_skill_percent = 50;
    gomchi_right = 9;
    p_s_percent_sitv = setInterval('photo_shop_percent()', 35);
  }
  $('.gomchi_wrap > span')
    .eq(i)
    .animate(
      { width: gomchi_skill_percent + '%', right: gomchi_right + '%' },
      3000
    );
}
/* 동굴에서 나오는 곰치 End */

/* 곰치 퍼센트 Str */
var html_pct = 0;
function html_percent() {
  if (html_pct < 50) {
    html_pct = html_pct + 1;
  } else {
    clearInterval(html_percent_sitv);
  }
  $('.skill_percent1').text(html_pct + '%');
}
var css_pct = 0;
function css_percent() {
  if (css_pct < 50) {
    css_pct = css_pct + 1;
  } else {
    clearInterval(css_percent_sitv);
  }
  $('.skill_percent2').text(css_pct + '%');
}
var js_pct = 0;
function js_percent() {
  if (js_pct < 50) {
    js_pct = js_pct + 1;
  } else {
    clearInterval(js_percent_sitv);
  }
  $('.skill_percent3').text(js_pct + '%');
}
var jquery_pct = 0;
function jquery_percent() {
  if (jquery_pct < 50) {
    jquery_pct = jquery_pct + 1;
  } else {
    clearInterval(jquery_percent_sitv);
  }
  $('.skill_percent4').text(jquery_pct + '%');
}
var p_s_pct = 0;
function photo_shop_percent() {
  if (p_s_pct < 50) {
    p_s_pct = p_s_pct + 1;
  } else {
    clearInterval(p_s_percent_sitv);
  }
  $('.skill_percent5').text(p_s_pct + '%');
}
/* 곰치 퍼센트 End */

/* 잠수함 내부 Str */
function submarine_inside(i) {
  $('.submarine_wrap').hide();
  $('.submarine_inside_wrap').show();
  $('.submarine_inside li').eq(i).show();
  $('.submarine_inside li').eq(i).siblings().hide();
  $('.submarine_fish').animate({ left: '100%' }, 5000, function () {
    $('.submarine_fish').css('left', '-10%');
  });
}
/* 잠수함 내부 End */

/* 잠수함 닫기 Str */
function submarine_close() {
  $('.submarine_wrap').show();
  $('.submarine_inside_wrap').hide();
}
/* 잠수함 닫기 End */

/* 잠수함 물방울 Str */
var submarine_bubble_flag = true;
function submarine_bubble() {
  if (submarine_bubble_flag == true) {
    $('.submarine_bubble2').show();
    $('.submarine_bubble2')
      .stop()
      .animate({ top: '-54%' }, 2000, function () {
        $('.submarine_bubble2').hide();
        $('.submarine_bubble2')
          .stop()
          .animate({ top: '-7.8%' }, 4000, function () {
            submarine_bubble();
          });
      });
  }
}
/* 잠수함 물방울 End */

/* 조개 Str */
var shellfish_flag = true;
function shellfish() {
  if (shellfish_flag == true) {
    $('.shellfish_top').stop().animate({ top: '78.5%', left: '77.4%' }, 2500);
    $('.shellfish_top').rotate({
      duration: 5000,
      angle: 0,
      animateTo: 45,
      callback: function () {
        $('.shellfish_top').stop().animate({ top: '82%', left: '76.2%' }, 2800);
        $('.shellfish_top').rotate({
          duration: 6000,
          angle: 45,
          animateTo: 0,
          callback: function () {
            shellfish();
          },
        });
        $('.shellfish_bubble img').show();
        $('.shellfish_bubble')
          .stop()
          .animate({ top: '-2000%' }, 3000, function () {
            $('.shellfish_bubble').css('top', '-174%');
            $('.shellfish_bubble img').hide();
          });
      },
    });
  }
}
/* 조개 End */

/* 불가사리 Str */
var starfish_flag = true;
function starfish() {
  if (starfish_flag == true) {
    $('.starfish1').stop().rotate({
      duration: 4000,
      angle: 0,
      animateTo: 10,
    });
    $('.starfish2')
      .stop()
      .rotate({
        duration: 4000,
        angle: 5,
        animateTo: -5,
        callback: function () {
          $('.starfish1').stop().rotate({
            duration: 4000,
            angle: 10,
            animateTo: 0,
          });
          $('.starfish2')
            .stop()
            .rotate({
              duration: 4000,
              angle: -5,
              animateTo: 5,
              callback: function () {
                starfish();
              },
            });
        },
      });
  }
}
/* 불가사리 End */

/* 꽃게 Str */
var crab_flag = true;
function crab() {
  if (crab_flag == true) {
    $('.crab')
      .stop()
      .animate({ top: '91.29%', left: '43.59%' }, 5000, function () {
        $('.crab')
          .stop()
          .animate({ top: '86.29%', left: '53.59%' }, 5000, function () {
            crab();
          });
      });
  }
}
/* 꽃게 End */

/* 문어 클릭 Str */
var meokmul_g_c = true;
var matrix_sitv;
function octopus_click() {
  if (meokmul_g_c == true) {
    meokmul_g_c = false;
    $('.meokmul li').eq(0).delay(0).fadeIn(1500);
    $('.meokmul li').eq(1).delay(700).fadeIn(1500);
    $('.meokmul li')
      .eq(2)
      .delay(1400)
      .fadeIn(1500, function () {
        $('.octopus_wrap').css('z-index', 0);
      });
    $('.meokmul li').eq(3).delay(2100).fadeIn(1500);
    $('.meokmul li').eq(4).delay(2800).fadeIn(1500);
    $('.meokmul li')
      .eq(5)
      .delay(3000)
      .fadeIn(1500, function () {
        //$("#section06").css({"background":"url('common/images/meokmul_wrap.png')","background-repeat":"repeat","background-position":"center center"});
        meokmul_g_c = true;
        setTimeout(function () {
          matrix_sitv = setInterval('matrix()', 54);
        }, 3000);
      });
    //gwang_scroll = false;
    sct06_w_s_flag = false;
    sct06_coral_flag = false;
    shellfish_flag = false;
    starfish_flag = false;
    crab_flag = false;
  }
}
/* 문어 클릭 End */

/* 홈페이지 정보 Str */
var text_temp =
  'I wanted to create an interesting website that is different from others I would appreciate it if you have fun. Copyright ⓒ kkami All Rights Reserved.';
var matrix_text = '';
var text_len = 0;
function matrix() {
  text_len = text_temp.length;
  if (text_temp.substring(0, 1) == '.') {
    matrix_text = matrix_text + text_temp.substring(0, 1) + '</br>';
  } else if (text_temp.substring(0, 1) == 'C') {
    matrix_text = matrix_text + '<p>' + text_temp.substring(0, 1);
  } else {
    matrix_text += text_temp.substring(0, 1);
  }
  text_temp = text_temp.substring(1, text_len);
  $('.matrix_eng').html(matrix_text);
  if (text_len == 0) {
    clearInterval(matrix_sitv);
    $('.kor').fadeIn(1500);
    $('.logo').delay(0).fadeIn(1500);
    $('.personal_information').delay(500).fadeIn(1500);
    $('.t_y_f_w').delay(800).fadeIn(1500);
  }
}
/* 홈페이지 정보 End */

/* 언어 Str */
function language(i) {
  $('.matrix li').eq(i).fadeIn(1500);
  $('.matrix li').eq(i).siblings().hide();
  $('.language li').eq(i).siblings().fadeIn(1500);
  $('.language li').eq(i).hide();
}
/* 언어 End */
