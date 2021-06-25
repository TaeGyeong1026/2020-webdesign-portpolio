$(document).ready(function () {    
    
    var ww = $(window).width();
    var wh = $(window).height();
    $('.mobile_ver').css({
        width: ww,
        height: wh,
    });
    
    $(window).resize(function(){
        var ww = $(window).width();
        var wh = $(window).height();
        $('.mobile_ver').css({
            width: ww,
            height: wh,
        });       
//        $('.mobile_ver').children('article').css({
//            display: 'none',
//        });
//        $('.m-intro').css({
//            display: 'block',
//        });
//        if (ww < 768){
//            INIT();
//        }
    })
    
    //intro touch
    $('.touch').click(function () {
        $(this).fadeOut(300);
        $('#m-door').transition({
           "rotateY": "120deg",
        },1000,function(){
            $('.m-intro').transition({
                scale: 2,
            },1000,function(){
                $('.m-fog').fadeIn(500);
                $('.m-fog').transition({
                    scale: 1,
                },100,function(){
                    $('.m-intro-text').css({display:'block'})
                    .animate({
                        opacity: 1,
                    },function(){
                        $('.m-intro-text-item').eq(0).animate({
                            opacity: 1,
                        },1000,function(){
                            $('.m-intro-text-item').eq(1).animate({
                                opacity: 1,
                            },1000,function(){
                                $('.m-intro-text-item').eq(2).animate({
                                    opacity: 1,
                                },1000,function(){
                                    $('.m-intro').fadeOut(500);
                                    $('.m-intro-text').fadeOut(500);
                                    $('.m-wallpaper').fadeIn(500);
                                    $('.m-wallpaper').animate({
                                        opacity: 1,
                                    },500,function(){
                                        $('.m-board').fadeIn(1000);
                                        $('.board-touch').fadeIn(1500);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    
    // board touch
    $('.board-touch').click(function(){
        $(this).fadeOut(300);
        $('.m-resume-wrap').fadeIn(500);
        $('.m-resume').animate({
            top: 70,
        });
        $('.next-but').fadeIn(500);
        
    });
    
    // next button touch
    var clickIndex = 0;
    $('.next-but').click(function(){
        clickIndex++;
       $('.m-resume').animate({
           left: '-100%',
       },500);
        $('.m-skill').animate({
            left: 0,
        },1000,function(){
            $('.m-skill-text').animate({
                width: '100%',
                opacity: 1,
            },500);
        });
        if(clickIndex == 2){
            $('.m-line.left').animate({
               right: 0, 
            },function(){
                $('.m-line.left').animate({
                    right: '100%',
                });
            });
            $('.m-line.right').animate({
                left: 0,
            },function(){
                $('.m-line.right').animate({
                    left: '100%',
                });
            });
            $('.m-wallpaper').fadeOut(500);
            $('.m-portfolio').fadeIn(500);
            clickIndex = 0;
        }
    });
    
    // contact button touch
    $('.contact-button').click(function(){
        $('.m-contact').fadeIn(500);
        $('.m-contact').animate({
            left: 0,
        });
    });
    
    // home button touch
    $('.home-button').click(function(){
        INIT();
    });
    
    // contact back button touch
    $('.m-contact-back').click(function(){
        $('.m-contact').fadeOut(500);
        $('.m-contact').animate({
            left: '100%',
        });
    });
    
     // INITIALIZE Funcion
    function INIT(){
        $('article').not('.m-intro').css({display:'none'});
        $('.m-intro').fadeIn(300);
        $('.touch').fadeIn(300);
        
        $('#m-door').css({transform: 'rotateY(0deg)'});
        $('.m-intro').transition({scale: 1});
        $('.m-fog').css({display: 'none'})
        $('.m-intro-text').css({display:'none'})
        .animate({opacity: 1,});
        $('.m-intro-text-item').css({opacity: 0,});
        $('.m-board').css({display:'none'});
        $('.board-touch').css({display:'none'});
        $('.m-skill').css({left: "100%"});
        $('.next-but').css({display:'none'});
        $('.m-resume-wrap').css({display: 'none'});
        $('.m-resume').css({top: -640, left: 25,});
        $('.m-skill-text').css({width: 0,});
        $('html, body').css({scrollTop: 0,});
        
    }
    
}); //end
