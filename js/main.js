$(document).ready(() => {
    const yearSpan = $('#yearSpan');
    let date = new Date();
    yearSpan.html(date.getFullYear());
    const sidebar_div = $('#sidebar_div');

    if($(window).width() < 768){
        sidebar_div.addClass('order-first')            
    } else {
        sidebar_div.removeClass('order-first');
    }

    $(window).on('scroll', () => {
        if (window.scrollY > 50) {
            $('#navbar_top').addClass('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = $('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            $('#navbar_top').removeClass('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
    
    $(window).resize(() =>{        
        if($(window).width() < 768){
            sidebar_div.addClass('order-first')            
        } else {
            sidebar_div.removeClass('order-first');
        }
    });

})
