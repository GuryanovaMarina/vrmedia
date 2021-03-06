//!!! 26.05.2020 ГМС
function validate (target) {
    try {
        //email in footer
        const email = $(target).val();
        if (validateEmail(email)) {
            $(target).parent(".form__block").addClass('valid');
        } else {
            $(target).parent(".form__block").removeClass('valid');
        }
        return false;
    } catch (err) {
        alert(err);
    }
}
function  validateEmail (email) {
    try {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } catch (err) {
        alert(err);
    }
}

$( document ).ready(function() {
    $('.form__fld').focus(function () {
        $(this).prev().addClass('active');
    });
    $('.form__fld').focusout(function () {
        if ($(this).val() == '') {
            $(this).prev().removeClass('active');
        } else if ($(this).val() !== '') {
            $(this).prev().addClass('active');
        }
    });
    $('#form__email__footer').keyup(function () {
        validate($(this));
    });
    $('.verification__inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.verification__inner').find('.tab-item').removeClass('active-tab').hide();
        $('.verification__inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.verification__inner.verification-mobile .tab').on('click', function () {
        $(this).toggleClass('active-mobile');
        $(this).next().toggleClass('show');
    });
});
$(window).on('scroll', function () {
    const offset = 150;
    const html = $('html').scrollTop();
    if ($('.header__top').hasClass('header__other-page')) {
        if (offset <= html) {
            $('.header__top').addClass('active');
            $('.header__top').removeClass('active-static');
        } else {
            $('.header__top').removeClass('active');
            $('.header__top').addClass('active-static');
        }
    } else {
        if (offset <= html) {
            $('.header__top').addClass('active');
        } else {
            $('.header__top').removeClass('active');
        }
    }
});
