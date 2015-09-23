$( document ).ready(function() {
    //eyes animation when page loaded
    $(".bob .sponge .eye.right .pupil").animate({
        left: "+=35"
    }, 1000, function() {
        $(this).animate({
            left:10
        }, 1000)
    })
    $(".bob .sponge .eye.left .pupil").animate({
        left: "+=10"
    }, 1000, function() {
        $(this).animate({
            left:25
        }, 1000)
    })

$(".all_right_hand").rotate({bind:{
    click: function(){
        $(this).rotate({
            angle: 0,
            animateTo:-80,
            center: ["100%", "100%"],
            duration:1000,
            callback: function(){
                $(this).rotate({
                animateTo:0
                })
            }
        })
    }
}
});
$(".all_left_hand").rotate({bind:{
    click: function(){
        $(this).rotate({
            angle: 0,
            animateTo:80,
            center: ["0%", "0%"],
            duration:1000,
            callback: function(){
                $(this).rotate({
                    animateTo:0
                })
            }
        })
    }
}
    });

});