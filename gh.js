(function($, g) {

    var gh = g.gh = {};

    gh.files = function(isVisible) {

        var selector = '.file' + (isVisible ? ':visible' : ''),
            files = [];

        $(selector).each(function() {

            var $file = $(this),
                path = $file.find('.js-selectable-text').attr('title'),
                diffstat = parseInt($file.find('.diffstat').text());

            console.log(path + ' (' + diffstat + ')');

        });

        return '';

    };

    gh.only = function(files) {

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
                title = $file.find('.js-selectable-text').attr('title'),
                hide = true, i;

            for (i=0; i<patterns.length; i++) {
                if (patterns[i](title)) {
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

    gh.comments = function() {
        $('.inline-comments').toggle();
        return $('.inline-comments').is(':visible') ? 'visible' : 'not visible';
    };

    g.gf = gh.files;
    g.go = gh.only;
    g.gc = gh.comments;

    console.clear();
    return 'github helpers inited';

})(jQuery, window);
