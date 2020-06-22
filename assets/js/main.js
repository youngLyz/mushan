
$(function(){
    fontAuto();
    $(window).resize(fontAuto);
    
    $('#xsNavbtn,#xsStickyNavbtn').click(function(){
        if($(this).hasClass('active')){
            $('#xsNavbtn').removeClass('active');
            $("#xsNavList").fadeOut();
            $('html').removeClass('xs-body');
        }else{
            $('#stickyHeader').hide();
            $('#xsNavbtn').addClass('active');
            $("#xsNavList").fadeIn();
            $('html').addClass('xs-body');
        }
    })
    
    if ($('#stickyHeader').length > 0) {
        var $stickyHeader = $('#stickyHeader'),
            screenHeight = window.screen.availHeight;

        $(document).on("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            s = $(window).scrollTop();
            // console.log('sss='+s+'delta='+delta)
          
            if (delta > 0 && s>screenHeight) {               
               $stickyHeader.slideDown(300)
            }else if (delta < 0 ||s < screenHeight) {
                // 向下滚              
               $stickyHeader.slideUp(300)
            }
        })
        mobileTouch();
    }

    $('.news-item-box').click(function(){
        var img = $(this).find('.news-item-wrap');
       // alert(document.documentElement.style.fontSize+','+$(this).parent('.news-item').width()+','+img.width()+','+img.height());
    })

    if($('.studio-img-wrap').length>0 && document.documentElement.clientWidth>1200){
        var fontSize = parseInt(document.documentElement.style.fontSize);
        $(".studio-img-wrap .studio-img").mouseenter(function(e){
            if(e.offsetX/fontSize > 3.375){
                $(".studio-left-pop").fadeOut();
                $(".studio-right-pop").fadeIn();
            }else{
                $(".studio-right-pop").fadeOut();
                $(".studio-left-pop").fadeIn();
            }
            // console.log('enter',e.offsetX,e.offsetX/fontSize)
        }).mousemove(function(e){
            // console.log('move',e.offsetX,e.offsetX/fontSize)
            if(e.offsetX/fontSize > 3.375){
                $(".studio-left-pop").fadeOut();
                $(".studio-right-pop").fadeIn();
            }else{
                $(".studio-right-pop").fadeOut();
                $(".studio-left-pop").fadeIn();
            }
        }).mouseout(function(){
            $(".studio-left-pop").fadeOut();
            $(".studio-right-pop").fadeOut();
        })
    }

    scrollToTop();

    readWorksDetail();
})
//字体
function fontAuto(){
    var cw = document.documentElement.clientWidth;
       if(cw<1367){
           if(cw<768){
               document.documentElement.style.fontSize = cw*50/375 +'px';//cw*(window.devicePixelRatio||1) / + 'px';
            }else{
                document.documentElement.style.fontSize = cw*70/1366 +'px';
            }           
           
       }else{
           document.documentElement.style.fontSize = cw * 100 / 1920 + 'px';
       }
   }
AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
//字体
function fontAuto(){
 var cw = document.documentElement.clientWidth;
    if(cw<1200){
        if(cw<768){
            document.documentElement.style.fontSize = cw*50/375 +'px';//cw*(window.devicePixelRatio||1) / + 'px';
         }else{
             document.documentElement.style.fontSize = '50px';
         }
      //  alert(cw+','+window.devicePixelRatio)       
        
    }else{
        document.documentElement.style.fontSize = cw * 100 / 1920 + 'px';
    }
}
//  scoll to Top
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });     
        jQuery(window).on('scroll', function(){
            var strickyScrollPos = screen.availHeight;
            if ($(window).scrollTop() > strickyScrollPos) {         
                $('.scroll-to-top').fadeIn(1500);
            } else{           
                $('.scroll-to-top').fadeOut(1500);
            }
        });   
    }
}

/***
 * worksDet
 */
function readWorksDetail(){
    if($("#readMoreDetail").length>0){
        $("#readMoreDetail").click(function(){
            $("#worksInfoMore").slideDown();
            $("#worksInfoFirst").removeClass("first");
            $(this).hide();
        })
    }
}

function mobileTouch(){
    var $stickyHeader = $('#stickyHeader');
var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}
//手指接触屏幕
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener("touchend", function(e) {
    var scrollTop = $(window).scrollTop();
   if(scrollTop<300){
    $stickyHeader.slideUp(300)
    return false;
   }

    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
   
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            // alert("未滑动！");
            break;
        case 1:
          //  alert("向上！");
          $stickyHeader.slideUp(300)
            break;
        case 2:
          //  alert("向下！");
          $stickyHeader.slideDown(300)
            break;
        case 3:
           // alert("向左！");
            break;
        case 4:
          //  alert("向右！");
            break;
        default:
    }
}, false);
}
