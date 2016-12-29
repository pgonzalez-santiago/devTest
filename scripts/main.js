$(document).ready(function() {
    $('.terms .title').on('click', function() {
        console.log('clicked');
        $('.terms').find('.content').toggleClass('active');
        changeIcon($('.terms'));

    });

    $('.button').on('click', function() {
        if ($(this).hasClass('active')) {
            window.location.replace("https://www.partycasino.com/en/registration?wm=3066900");
        }
    });

    var changeIcon = function(elem) {
        if (elem.find('.title i').hasClass('ion-chevron-down')) {
            elem.find('.title i').removeClass('ion-chevron-down');
            elem.find('.title i').addClass('ion-chevron-up');
            $('html, body').animate({
                scrollTop: elem.find('.content p').offset().top
            }, 1000);
        } else {
            elem.find('.title i').removeClass('ion-chevron-up');
            elem.find('.title i').addClass('ion-chevron-down');
        }
    }
});
