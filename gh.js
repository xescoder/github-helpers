(function($, g) {

    var gh = g.g = {};

    g.gf = gh.files = function(isVisible) {

        var selector = '.file' + (isVisible ? ':visible' : ''),
            files = [];

        console.clear();

        $(selector).each(function() {

            var $file = $(this),
                path = $file.find('.js-selectable-text').attr('title'),
                diffstat = parseInt($file.find('.diffstat').text());

            console.log(path + ' (' + diffstat + ')');

        });

        return '';

    };

    g.go = gh.only = function(files) {

        !files && (files = '');
        !$.isArray(files) && (files = [files]);

        var strategies = {

                string: function(pattern) {
                    return function(str) {
                        return ~str.indexOf(pattern);
                    }
                },

                regexp: function(pattern) {
                    return function(str) {
                        return pattern.test(str);
                    }
                }

            },
            patterns = [], i;

        for (i=0; i<files.length; i++) {
            patterns.push(strategies[files[i].test ? 'regexp' : 'string'](files[i]));
        }

        $('.file').each(function() {

            var $file = $(this),
                path = $file.find('.js-selectable-text').attr('title'),
                hide = true, i;

            for (i=0; i<patterns.length; i++) {
                if (patterns[i](path)) {
                    hide = false;
                    break;
                }
            }

            hide
                ? $file.hide()
                : $file.show();

        });

        return gh.files(true);

    };

    g.gc = gh.comments = function() {

        console.clear();

        return $('.inline-comments')
            .toggle()
            .is(':visible')
                ? 'comments visible'
                : 'comments not visible';

    };

    console.clear();
    return 'github helpers inited';

})(jQuery, window);
