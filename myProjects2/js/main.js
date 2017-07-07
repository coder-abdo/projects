/*global console,$:true, plusplus:true*/
$(document).ready(function () {
    'use strict';
    var clicked = false,
        $header = $('header'),
        $mainSection = $('.main-section');
// drop down menu effect
    $header.find('.nav-btn').click(function () {
        var $this = $(this);
        if (!clicked) {
            clicked = true;
            $this.parent().toggleClass('active');
            setTimeout(function () {
                clicked = false;
            }, 1450);
        }
    });
    $(document).on('click', function (e) {
        var clickOver = $(e.target);
        if (!clickOver.closest('header').length && $('nav').hasClass('active')) {
            $('nav').removeClass('active');
        }
    });
//sticky nav
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $mainSection.height() - 100) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });
    //menu-slider functions
    function menuSlider() {
        var $sliderContainer = $('.slider-container'),
            $slider = $sliderContainer.find('.slider'),
            $sliderBaner = $sliderContainer.find('.slider-baner'),
            $sliderItems = $sliderBaner.find('.slider-item'),
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev'),
            itemsLength = $sliderItems.length,
            slidesToshow = 3,
            activeSlides = slidesToshow,
            left = 0,
            itemMove = 0,
            clicked = false,
            itemsWidth,
            itemWidth;
        function responsiveSlides() {
            activeSlides -= slidesToshow;
            if ($(window).width() <= 991 && $(window).width() > 550) {
                slidesToshow = 2;
            } else if ($(window).width() <= 550) {
                slidesToshow = 1;
            } else {
                slidesToshow = 3;
            }
            activeSlides += slidesToshow;
        }
        responsiveSlides();
        $sliderItems.outerWidth(parseInt($slider.width() / slidesToshow));
        function fixWidth() {
            itemWidth = $('.menu-slider .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBaner.width(itemsWidth);
        }
        fixWidth();
        function leftCalc() {
            return itemWidth * itemMove;
        }
        $(window).resize(function () {
            responsiveSlides();
            $sliderItems.outerWidth(parseInt($slider.width() / slidesToshow));
            fixWidth();
            $sliderBaner.css('left', -leftCalc());
        });
        function checkStatus() {
            if (activeSlides === itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }
            if (activeSlides === slidesToshow) {
                $prevBtn.addClass('disabled');
            } else {
                $prevBtn.removeClass('disabled');
            }
        }
        checkStatus();
        $nextBtn.click(function () {
            if (!clicked) {
                if (activeSlides !== itemsLength) {
                    clicked = true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBaner.css('left', left);
                    activeSlides++;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });
        $prevBtn.click(function () {
            if (!clicked) {
                if (activeSlides > slidesToshow) {
                    clicked = true;
                    itemMove--;
                    left = -leftCalc();
                    $sliderBaner.css('left', left);
                    activeSlides--;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });
    }
    menuSlider();
    //chief-slider functions
    function chiefSlider() {
        var $sliderContainer = $('.chief-slider'),
            $slider = $sliderContainer.find('.slider'),
            $sliderBaner = $sliderContainer.find('.slider-baner'),
            $sliderItems = $sliderBaner.find('.slider-item'),
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev'),
            itemsLength = $sliderItems.length,
            slidesToshow = 1,
            activeSlides = slidesToshow,
            left = 0,
            itemMove = 0,
            clicked = false,
            itemsWidth,
            itemWidth;
        $sliderItems.outerWidth(parseInt($slider.width() / slidesToshow));
        function fixWidth() {
            itemWidth = $('.chief-slider .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBaner.width(itemsWidth);
        }
        fixWidth();
        function leftCalc() {
            return itemWidth * itemMove;
        }
        $(window).resize(function () {
            $sliderItems.outerWidth(parseInt($slider.width() / slidesToshow));
            fixWidth();
            $sliderBaner.css('left', -leftCalc());
        });
        function checkStatus() {
            if (activeSlides === itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }
            if (activeSlides === slidesToshow) {
                $prevBtn.addClass('disabled');
            } else {
                $prevBtn.removeClass('disabled');
            }
        }
        checkStatus();
        $nextBtn.click(function () {
            if (!clicked) {
                if (activeSlides !== itemsLength) {
                    clicked = true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBaner.css('left', left);
                    activeSlides++;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });
        $prevBtn.click(function () {
            if (!clicked) {
                if (activeSlides > slidesToshow) {
                    clicked = true;
                    itemMove--;
                    left = -leftCalc();
                    $sliderBaner.css('left', left);
                    activeSlides--;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });
    }
    chiefSlider();
});