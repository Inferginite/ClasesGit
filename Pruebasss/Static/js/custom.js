/*
 *
 *		CUSTOM.JS
 *
 */
(function($) {
    "use strict";
    // GOOGLE MAPS //
    $(document).ready(function() {
        if (typeof $.fn.gmap3 !== 'undefined') {
            var mapCont = $(".map");
            if (mapCont.length > 0) {
                mapCont.each(function() {
                    var data_zoom = 15;
                    if ($(this).attr("data-zoom") !== undefined) {
                        data_zoom = parseInt($(this).attr("data-zoom"), 10);
                    }
                    $(this).gmap3({
                        marker: {
                            values: [{
                                address: $(this).attr("data-address"),
                                data: $(this).attr("data-address-details")
                            }],
                            options: {
                                draggable: false
                            },
                            events: {
                                mouseover: function(marker, event, context) {
                                    var map = $(this).gmap3("get"),
                                        infowindow = $(this).gmap3({
                                            get: {
                                                name: "infowindow"
                                            }
                                        });
                                    if (infowindow) {
                                        infowindow.open(map, marker);
                                        infowindow.setContent(context.data);
                                    } else {
                                        $(this).gmap3({
                                            infowindow: {
                                                anchor: marker,
                                                options: {
                                                    content: context.data
                                                }
                                            }
                                        });
                                    }
                                },
                                mouseout: function() {
                                    var infowindow = $(this).gmap3({
                                        get: {
                                            name: "infowindow"
                                        }
                                    });
                                    if (infowindow) {
                                        infowindow.close();
                                    }
                                }
                            }
                        },
                        map: {
                            options: {
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                zoom: data_zoom,
                                scrollwheel: false
                            }
                        }
                    });
                });
            }
        }
        // END MAP //
        // PLACEHOLDER //
        if (typeof $.fn.placeholder !== 'undefined') {
            $("input, textarea").placeholder();
        }
        // END PLACEHOLDER //
        // CONTACT FORM VALIDATE & SUBMIT //
        // VALIDATE //
        if (typeof $.fn.validate !== 'undefined') {
            $("#contact-form").validate({
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your name!"
                    },
                    email: {
                        required: "Please enter your email!",
                        email: "Please enter a valid email address"
                    },
                    subject: {
                        required: "Please enter the subject!"
                    },
                    message: {
                        required: "Please enter your message!"
                    }
                },
                // SUBMIT //
                submitHandler: function(form) {
                    var result;
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "plugins/php-form/send.php",
                        success: function(msg) {
                            if (msg == 'OK') {
                                result = '<div class="alert alert-success">Your message was successfully sent!</div>';
                                $("#contact-form").clearForm();
                            } else {
                                result = msg;
                            }
                            $("#alert-area").html(result);
                        },
                        error: function() {
                            result = '<div class="alert alert-danger">There was an error sending the message!</div>';
                            $("#alert-area").html(result);
                        }
                    });
                }
            });
        }
        // END VALIDATE //
        // ISOTOPE //
        if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
            var isotope = $(".isotope");
            if (isotope.length > 0) {
                isotope.imagesLoaded(function() {
                    var container = $(".isotope");
                    container.isotope({
                        itemSelector: '.isotope-item',
                        layoutMode: 'masonry',
                        transitionDuration: '0.8s'
                    });
                    var filter = $(".filter li a");
                    filter.on("click", function() {
                        filter.removeClass("active");
                        $(this).addClass("active");
                        var selector = $(this).attr("data-filter");
                        container.isotope({
                            filter: selector
                        });
                        return false;
                    });
                    $(window).resize(function() {
                        container.isotope();
                    });
                });
            }
        }
        // END ISOTOPE //
        // TYPED //
        if (typeof $.fn.typed !== 'undefined') {
            var typed = $("#typed");
            if (typed.length > 0) {
                typed.typed({
                    // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                    stringsElement: $('#typed-strings'),
                    typeSpeed: 120,
                    backDelay: 1000,
                    loop: false,
                    contentType: 'html', // or text
                    // defaults to false for infinite loop
                    loopCount: false,
                    callback: function() {},
                    resetCallback: function() {
                        newTyped();
                    }
                });
                $(".reset").on("click", function() {
                    typed.typed('reset');
                });
            }
        }
        // END TYPED //
        // SHOW/HIDE MOBILE MENU //
        show_hide_mobile_menu();
        // MOBILE MENU //
        mobile_menu();
        // CHARTS //
        charts();
        // FANCYBOX //
        if (typeof $.fn.fancybox !== 'undefined') {
            $(".fancybox").fancybox({
                prevEffect: 'none',
                nextEffect: 'none'
            });
            $("a[data-fancybox-group=gallery]").fancybox({
                'transitionIn': 'none',
                'transitionOut': 'none',
                'titlePosition': 'over',
                'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
                }
            });
        }
        // END FANCYBOX //
        // OWL CAROUSEL //
        if (typeof $.fn.owlCarousel !== 'undefined') {
            if ($("#equipo").length > 0) {
                var owl = $("#equipo").owlCarousel({
                    itemsCustom: [
                        [0, 2],
                        [450, 3],
                        [600, 4],
                        [700, 5],
                        [1000, 5],
                        [1200, 5],
                        [1400, 5],
                        [1600, 5]
                    ],
                });
            }
            // OWL CAROUSEL //
            if ($("#equipo2").length > 0) {
                var owl_slide = $("#equipo2").owlCarousel({
                    itemsCustom: [
                        [0, 2],
                        [450, 3],
                        [600, 4],
                        [700, 3],
                        [1000, 3],
                        [1200, 3],
                        [1400, 3],
                        [1600, 3]
                    ],
                });
            }
            // OWL CAROUSEL //
            if ($("#equipo.large").length > 0) {
                var owl = $("#equipo.large").owlCarousel({
                    itemsCustom: [
                        [0, 2],
                        [450, 1],
                        [600, 2],
                        [700, 3],
                        [1000, 3],
                        [1200, 3],
                        [1400, 3],
                        [1600, 3]
                    ],
                });
            }
            if ($("#gallery").length > 0) {
                var owl = $("#gallery").owlCarousel({
                    itemsCustom: [
                        [0, 2],
                        [450, 2],
                        [600, 3],
                        [700, 4],
                        [1000, 4],
                        [1200, 4],
                        [1400, 4],
                        [1600, 4]
                    ],
                });
            }
            // Custom Navigation Events
            $(".next").on("click", function() {
                owl.trigger('owl.next');
            })
            $(".prev").on("click", function() {
                owl.trigger('owl.prev');
            })
        }
        // END OWL CAROUSEL //
        // REVOLUTION SLIDER //
        if (typeof $.fn.revolution !== 'undefined') {
            $(".rev_slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 9000,
                navigation: {
                    arrows: {
                        style: "custom",
                        enable: true,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "custom",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: '',
                        direction: "horizontal",
                        space: 10,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 60
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: false,
                        swipe_direction: "horizontal"
                    }
                },
                gridwidth: 1170,
                gridheight: 720
            });
        }
        // END REVOLUTION SLIDER //
        // WAYPOINT //
        if (!window.waypoint_animation) {
            window.waypoint_animation = function() {
                $.each($('.animate_when_almost_visible:not(.start_animation):not(.t-inside), .tmb-media .animate_when_almost_visible:not(.start_animation)'), function(index, val) {
                    new Waypoint({
                        element: val,
                        handler: function() {
                            var element = $(this.element),
                                index = element.index(),
                                delayAttr = element.attr('data-delay');
                            if (delayAttr == undefined) delayAttr = 0;
                            setTimeout(function() {
                                element.addClass('start_animation');
                            }, delayAttr);
                            // COUNTER //
                            if (element.hasClass("counter-value")) {
                                element.each(function() {
                                    if (!$(this).hasClass("animated")) {
                                        $(this).addClass("animated");
                                        $(this).jQuerySimpleCounter({
                                            start: 0,
                                            end: $(this).attr("data-value"),
                                            duration: 2400
                                        });
                                    }
                                });
                            }
                            if (element.find(".pie-chart-container").length > 0) {
                                charts();
                            }
                            this.destroy();
                        },
                        offset: '90%'
                    });
                });
            }
        }
        // END WAYPOINT //
    });
    // SHOW/HIDE MOBILE MENU //
    function show_hide_mobile_menu() {
        $("#mobile-menu-button").on("click", function(e) {
            e.preventDefault();
            $("#mobile-menu").slideToggle(300);
        });
    }
    // MOBILE MENU //
    function mobile_menu() {
        if ($("#menu").length > 0) {
            if ($("#mobile-menu").length < 1) {
                $("#menu").clone().attr({
                    id: "mobile-menu",
                    class: ""
                }).insertAfter("#header");
                $("#mobile-menu .megamenu > a").on("click", function(e) {
                    e.preventDefault();
                    $(this).toggleClass("open").next("div").slideToggle(300);
                });
                $("#mobile-menu .dropdown > a").on("click", function(e) {
                    e.preventDefault();
                    $(this).toggleClass("open").next("ul").slideToggle(300);
                });
            }
        }
    }
    // CHARTS //
    function charts() {
        $(".pie-chart").each(function() {
            $(this).easyPieChart({
                animate: 1500,
                lineCap: "square",
                lineWidth: $(this).attr("data-line-width"),
                size: $(this).attr("data-size"),
                barColor: $(this).attr("data-bar-color"),
                trackColor: $(this).attr("data-track-color"),
                scaleColor: "transparent",
                onStep: function(from, to, percent) {
                    $(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
                }
            });
        });
    }
    setTimeout(function() {
        window.waypoint_animation();
    }, 100);
    // WINDOW RESIZE //
    $(window).resize(function() {
        mobile_menu();
    });
})(window.jQuery);