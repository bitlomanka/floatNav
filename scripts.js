(function ($) {
    $.fn.floatNav = function (options) {
        var settings = $.extend({
                navItems: "a",
                activeClass: "active",
                offsetTop: 20
            }, options),
            items = $(this).find(settings.navItems),
            hrefs = [];

        items.each(function () {
            var href = $(this).attr('href') || $(this).data('href');

            if (hrefs.indexOf(href) === -1) {
                hrefs.push(href);
            }
        });


        function scroll() {
            var scrollTop = $(window).scrollTop();

            for (var i = 0; i < hrefs.length; i++) {
                var idSection = hrefs[i];

                if ($(idSection).offset().top - settings.offsetTop < scrollTop) {
                    items.removeClass(settings.activeClass).filter('[href=' + idSection + ']').addClass(settings.activeClass);
                }
            }
        }

        $(window).on('scroll', function () {
            scroll();
        });

        $(window).on('resize', function () {
            scroll();
        });

        scroll();

        return this;
    };

}(jQuery));
