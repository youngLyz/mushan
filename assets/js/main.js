
$(function(){
    fontAuto();
$(window).resize(fontAuto);
    
    $('#xsNavbtn').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $("#xsNavList").fadeOut();
        }else{
            $(this).addClass('active');
            $("#xsNavList").fadeIn();
        }
    })

    $('.news-item-box').click(function(){
        var img = $(this).find('.news-item-wrap');
       // alert(document.documentElement.style.fontSize+','+$(this).parent('.news-item').width()+','+img.width()+','+img.height());
    })

    if($('.studio-img-wrap').length>0 && cw>1200){
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
