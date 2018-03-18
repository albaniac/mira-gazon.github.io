var scroll_active = false;
var on_scroll = 0;
const plural_const = 15;
const block_top_offset = 15;

var down_point = 0;

jQuery(document).ready(function ($) {


    $('.wpcf7-submit').click(function () {
        yaCounter24848231.reachGoal('MAIN_FORM');
        return true;
    });

    $('#wrap-gazonprice .small-bottom').click(function () {
        yaCounter24848231.reachGoal('GAZON-ORDER');
        return true;
    });

    $('.wrap-wood .small-bottom').click(function () {
        yaCounter24848231.reachGoal('GAZON-COMPLETE-ORDER');
        return true;
    });

    $(".fnbox").hover(function () {

        $(this).append("<img id='zoom' src='wp-content/themes/gazon/img/zoom.png' alt='' />");
        $("#zoom").fadeIn({duration: 500, specialEasing: {
            opacity: 'linear',
            height: 'swing'
        }});

    }, function () {
        $('#zoom').remove()
    });

    $(".fnbox").fancybox();

    $("#gallery>ul").carouFredSel({
        width: 1000,
        height: 379,
        items: {
            visible: 1,
            minimum: 1,
            start: "random",
            width: 833,
            height: 379
        },
        scroll: 1,
        auto: false,
        swipe: true,
        mousewheel: false,
        prev: "#galleft",
        next: "#galright"
    });


    function updateScroll() {
        if (($(window).scrollTop() >= on_scroll) && (!scroll_active)) {
            scroll_active = true;
            $('.right-list-super-cont').fadeIn(500);
        } else if (($(window).scrollTop() < on_scroll) && (scroll_active)) {
            scroll_active = false;
            $('.right-list-super-cont').fadeOut(500);
        }
    }

    on_scroll = $('header').position().top + $('header').height();// + plural_const;
    $(window).scroll(function () {
        updateScroll();
    });

    $('.left-list-white-down,.right-list-white-down').click(function(){
      if(down_point)
        $('body').animate({scrollTop: down_point}, 500);
      else
        $('body').animate({scrollTop: on_scroll+plural_const}, 500);
      updateScroll();
    });

    $('.right-list-super-cont').click(function () {
        down_point = $(window).scrollTop();
        $('body').animate({scrollTop: 0}, 1000);
        updateScroll();
    });


    $('.box-1 .small-bottom').click(function () {
        $('.box-1 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });

    $('.box-2 .small-bottom').click(function () {
        $('.box-2 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('.box-3 .small-bottom').click(function () {
        $('.box-3 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('.box-4 .small-bottom').click(function () {
        $('.box-4 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('#gazprice-box-1 .small-bottom').click(function () {
        $('#gazprice-box-1 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('#gazprice-box-2 .small-bottom').click(function () {
        $('#gazprice-box-2 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('#gazprice-box-3 .small-bottom').click(function () {
        $('#gazprice-box-3 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });
    $('#gazprice-box-4 .small-bottom').click(function () {
        $('#gazprice-box-4 .form-widget').show().animate({opacity: 0.0}, 10).animate({ opacity: 1}, 100);
    });


    $('.wpcf7-not-valid-tip').removeData();
    setTimeout(function () {
        $('.wpcf7-not-valid-tip').hide()
    }, 5000);

    setInterval(function () {
        var t = new Date();

        if (t.getHours() < 24 && t.getHours() > 1) {
            var backH = 24 - t.getHours();
            var backM = 60 - t.getMinutes();
            if (backM < 10) {
                backM = '0' + backM;
            }
            var backS = 60 - t.getSeconds();
            if (backS < 10) {
                backS = '0' + backS;
            }
            $('.countdown').html('<span class="countdown-row countdown-show3"><span class="countdown-section"><span class="countdown-amount">' + backH + '<span class="countdown-period">часов </span></span></span><span class="countdown-section"><span class="countdown-amount">' + backM + '<span class="countdown-period">минут</span></span></span><span class="countdown-section"><span class="countdown-amount">' + backS + '<span class="countdown-period">секунд </span></span></span></span>');

            if (t.getHours() < 1) {
                var backM = 60 - t.getMinutes();
                if (backM < 10) {
                    backM = '0' + backM;
                }
                var backS = 60 - t.getSeconds();
                if (backS < 10) {
                    backS = '0' + backS;
                }
                $('.countdown').html(00 + ':' + backM + ':' + backS);
            }
        }
    }, 1000);

    jQuery(".foot-right .textwidget").find("span").html("8 (495) 984-16-96");
});

jQuery(document).on("click", function(event){
    event = event || window.event;

    if(!jQuery(event.target).closest(".small-bottom").length && !jQuery(event.target).closest(".wpcf7-form-control").length){
        jQuery(".form-widget").hide();
        jQuery(".wpcf7-mail-sent-ok").hide();
    }
}).on("submit", "#active-action form", function(){
        ga('send', 'event', 'form_top', 'form_top');
        console.log('send', 'event', 'form_top', 'form_top');
}).on("submit", "#wrap-gazonprice form", function(){
        ga('send', 'event', 'form_centr', 'form_centr');
        console.log('send', 'event', 'form_centr', 'form_centr');
}).on("submit", "#wood form", function(){
        ga('send', 'event', 'form_centr', 'form_centr');
        console.log('send', 'event', 'form_centr', 'form_centr');
}).on("submit", "#trava form", function(){
        ga('send', 'event', 'form_3', 'form_3');
        console.log('send', 'event', 'form_3', 'form_3');
}).on("submit", "#akcia form", function(){
        ga('send', 'event', 'form_4', 'form_4');
        console.log('send', 'event', 'form_4', 'form_4');
}).on("click", "#galleft", function(){
        ga('send', 'event', 'portfolio', 'portfolio');
        yaCounter24848231.reachGoal('portfolio');
        console.log('click', 'event', 'portfolio', 'portfolio');

}).on("click", "#galright", function(){
        ga('click', 'event', 'portfolio', 'portfolio');
        yaCounter24848231.reachGoal('portfolio');
        console.log('send', 'event', 'portfolio', 'portfolio');
});
