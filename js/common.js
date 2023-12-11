$(function(){
    console.log("load")
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })


    //slide
    var $slides=$(".slides");
    var $slide=$slides.children(".slide");    
    var $swidth=$slide.width();
    var slidePosition=0
    var slideLength=$slide.length;
    $auto=null;
    function slideEvent(){
        function slideMove(){
            $slides.stop().animate({
                left:-$swidth*slidePosition,
            })
        }
        function nextPlay(){
            if(slidePosition==slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            slideMove(slidePosition);
        }
        $(".nextbt").click(function(){
            nextPlay();
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition=slideLength-1
            }else{
                slidePosition--;
            }
            slideMove(slidePosition)
        }
        $(".prevbt").click(function(){
            prevPlay();
        })
        $auto=setInterval(function(){
            nextPlay();
        },3000);
        $(".slider-group").hover(
            function(){
                clearInterval($auto);
            },
            function(){
                nextPlay();
            }
        )
        
    }
    slideEvent();
    
    //tap active
    $(".n-g-list>a").click(function(){
        $(".n-g-list>a").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $(this.hash).show();
    })

    //tap notic popup
    $("#notic ul li:first-child").click(function(){
        $(".pop-up").show();
    })
    $(".pop-up button").click(function(){
        $(".pop-up").hide();
    })

    //family site

    $("select").change(function(){
        $href=$(this).val();
        window.open($href,"_blank");
    })

})