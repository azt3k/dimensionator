;(function($, window, document, undefined) {

    "use strict"

    var pluginName = "dimensionator",
        pluginVersion = "0.1.0";

    function Plugin(element) {
        this.$element = $(element);
        this.init();
    }

    Plugin.prototype = {


        init: function() {
            var id = this.$element.attr('id');
            if (!id) {
                while (!id || $('#' + id).length) {
                    id = Math.floor(Math.random() * 1000) + 1;
                }
                this.$element.attr('id', id);
            }
        },

        measure: function(dim) {
            if (dim == 'h') dim = 'height';
            if (dim == 'w') dim = 'width';
            var $e = this.$element;
            var id = $e.attr('id');
            var pre = $e[dim]();
            if ($.scrollDims == undefined) $.scrollDims = {};
            if ($.scrollDims[id] == undefined) $.scrollDims[id] = {};
            if ($.scrollDims[id][dim] == undefined || !$.scrollDims[id][dim]) {
                var style = $e.attr('style');
                if (style == undefined) style = '';
                $e.css('overflow', 'hidden');
                var post = $e[dim]();
                $e.attr('style', style);
                $.scrollDims[id][dim] = post - pre;
            }
            return pre + $.scrollDims[id][dim];
        }

    };

    $.fn[pluginName] = function(dim) {
        var $elem = this.first();
        var obj = new Plugin($elem);
        return obj.measure(dim);
    };

    $.fn['dim'] = function(dim) {
        var $elem = this.first();
        var obj = new Plugin($elem);
        return obj.measure(dim);
    };

})(jQuery, window, document);