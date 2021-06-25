$(document).ready(function(){
    
    ww = $(window).width();
    wh = $(window).height();
    $('section').css({
        width: ww,
        height: wh,
    });
    
    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        $('section').css({
            width: ww,
            height: wh,
        });
    })
    
    function intro(){
        $('.intro').css({
            display: 'block',
            transform: 'translateZ(0px)',
        });
        $('article').not('.intro').css({
            display: 'none',
        });
        $('nav').css({display:'none'});
        $('.fog').fadeOut(500);
    }
    function resume(){
            $('#resume').css({
                top: 45,
                left: 683,
            }); 
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(1).addClass('side-on');
            $('article').not('.wallpaper').css({
                display: 'none',
            });
    }
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        $('#process').css({width: ''+sct/(21000-969)*100+'%'});//process bar
        
        if(sct>=0 && sct<1000){ //open door
            $('#door').css({
                transform: 'rotateY('+ (0.12*sct) +'deg)',
            });
            intro();
        }
        
        
        else if(sct>=1000 && sct < 2000){ //close up
            $('.intro').css({
                transform: 'translateZ(2000px)',
                display: 'block', 
            });
            $('article').not('.intro').css({
                display: 'none',
            });
            $('nav').fadeOut(500);
        }
        
        
        else if(sct>=2000 && sct < 6500){ //fog
            $('.fog').css({
                display: 'block',
            });
            $('article').not('.fog').css({
                display: 'none',
            });
            for(i=0; i<4 ; i++){
                $('.fog-item').eq(i).css({
                   transform: 'translateZ('+((-1500*i)+(sct-2000))+'px)' ,
                });
                if( sct >= 2000+(i*1500) && sct < 2000+((i+1)*1500) ){
                    $('.fog-item').eq(i).fadeIn(300);
                    $('.fog-item').eq(i-1).fadeOut(300);
                }
            }
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(0).addClass('side-on');
            $('.intro-item').removeClass('intro-item-after');
        }
        
        
        
        else if(sct>=6500 && sct < 11000){ //intro-text
            $('.intro-text').css({
                display: 'block',
            });
            for(i=0;i<4;i++){
                if(sct >= 7000+(i*1000) && sct < 8000+(i*1000)){
                    if(i != 3){
                        $('.intro-item').eq(i+1).removeClass('intro-item-after');
                    }
                    $('.intro-item').eq(i).addClass('intro-item-after');
                }
            }
            $('.wallpaper').fadeOut(300);
            $('.fog-item').css({opacity:0.3,});
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(0).addClass('side-on');
            $('.board-wrap').css({left:'100%',});
        }
        
        
        
        else if(sct>=11000 && sct < 13000){ //wallpaper
            $('.wallpaper').fadeIn(500);
            $('.fog-item').css({opacity:0});
            $('.fog').fadeIn(300);
            $('.intro-text').fadeOut(300);
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(1).addClass('side-on');
            $('.board-wrap').css({left: '18%'});
            $('#resume').css({top: '-100%'});
            $('.resume-wrap').fadeOut(300);
        }
        
        
        
        else if(sct >= 13000 && sct < 15000){ // board
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(1).addClass('side-on');
            $('.resume-wrap').fadeIn(300);
            $('#resume').css({top: '4.643962%',left: '35.57292%'});
            $('#skill-wrap').css({top: '-100%'});
        }
        
        else if(sct >= 15000 && sct < 17000){ // resume
            $('#resume').css({left: '-100%'});
            $('#skill-wrap').css({top: '13.4158%', left: '14.0625%'});
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(2).addClass('side-on');
            $( document ).on( "mousemove", function(e) {
                var posX = e.pageX;
                var posY = e.pageY - sct;
                
                $('.skill-text-wrap').css({
                    left: posX/50,
                    top: posY/50,
                });
                $('.skill-pic').css({
                    left: ''+ 38.47826086 -(posX/50)/1920*100+'%',
                    top: ''+ 20.833333 -(posY/50)/969*100+'%',
                })
            });           
            $('#line-left').css({
                left: '-130.2083%',
            });           
            $('#line-right').css({
                right: '-120.3125%',
            });
            $('.portfolio').css({
                display: 'none',
            });
            $('.wallpaper').css({
                display: 'block',
            }); 
        }
        else if(sct >= 17000 && sct < 17500){            
            $('#line-left').css({
                left: '-31.25%',
            });           
            $('#line-right').css({
                right: '-31.25%',
            });
        }    
        
        else if(sct >= 17500 && sct < 18000){ // line           
            $('#line-left').css({
                left: '-130.2083%',
            });           
            $('#line-right').css({
                right: '-120.3125%',
            });
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(3).addClass('side-on');
            $('.portfolio').css({
                display: 'block',
            });
            $('.wallpaper').css({
                display: 'none',
            }); 
        }
        else if(sct >= 18000 && sct < 20000){
            $('.portfolio').css({
                display: 'block',
            }); 
            $('.wallpaper').fadeOut(500);
            $('.portfolio-in-wrap').fadeIn(1000);
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(3).addClass('side-on');
            
            $('.portfolio-img').hover(function(){
                var imgHeight = $(this).height();
                var imgWrap = $('.portfolio-clip').height();
                $(this).css({
                    top: -imgHeight+imgWrap,
                });
            },function(){
                $(this).css({
                    top: 0,
                });
            })
            $('.portfolio-item-wrap').hover(function(){
                $('.portfolio-darken').stop().fadeIn(300);
                $(this).addClass('portfolio-on');
                $(this).children('.portfolio-tape').stop().fadeOut(300);
                $(this).children('.portfolio-icon-wrap').addClass('active');
            },function(){
                $('.portfolio-darken').stop().fadeOut(300);
                $(this).removeClass('portfolio-on');
                $(this).children('.portfolio-tape').stop().fadeIn(300);
                $(this).children('.portfolio-icon-wrap').removeClass('active');
            });
            $('.icon-wrap').fadeIn(500);
            $('.contact').fadeOut(100);
        }
        else if(sct >= 20000 && sct < 20500){
            $('.wallpaper').fadeOut(500);
            $('.portfolio-in-wrap').fadeOut(100);
            $('.contact').fadeIn(500);
            $('.icon-wrap').fadeOut(100);
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(4).addClass('side-on');
        }
        else if(sct >= 20500){
            $('.wallpaper').fadeOut(500);
            $('.portfolio').css({display: 'block'});
            $('article').not('.portfolio').css({display: 'none'});
            $('nav').fadeIn(500);
            $('.side-item').removeClass('side-on');
            $('.side-item').eq(4).addClass('side-on');
        }
    });
    
    
    $('#return-but').click(function(){  //return home button
        $('html, body').animate({
            scrollTop : 0,
        },2000);
    });
    
    
    
    $('.side-item').click(function(){   //side menu click event
       var clickIndex = $(this).index();
        
        if(clickIndex == 0){
            $('html, body').stop().animate({scrollTop: 0,},1000);
            intro();
        }
        else if(clickIndex == 1){
            $('html, body').stop().animate({scrollTop: 13000,},1000);
            resume();
        }
        else if(clickIndex == 2){
            $('html, body').stop().animate({scrollTop: 15000,},1000);            
        }
        else if(clickIndex == 3){
            $('html, body').stop().animate({scrollTop: 18000,},1000);            
        }
        else if(clickIndex == 4){
            $('html, body').stop().animate({scrollTop: 21000,},1000);
        }
    });
    
});     //end