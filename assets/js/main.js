
$(function(){
    var cw = window.screen.availWidth;//document.documentElement.clientWidth;
    if(cw<1200){
      //  if(cw<375){
            document.documentElement.style.fontSize = cw*50/375 +'px';//cw*(window.devicePixelRatio||1) / + 'px';
        // }else{
        //     document.documentElement.style.fontSize = '50px';
        // }
      //  alert(cw+','+window.devicePixelRatio)       
        
    }else{
        document.documentElement.style.fontSize = cw * 100 / 1920 + 'px';
    }
    
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
        alert(document.documentElement.style.fontSize+','+$(this).parent('.news-item').width()+','+img.width()+','+img.height());
    })
})
AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});