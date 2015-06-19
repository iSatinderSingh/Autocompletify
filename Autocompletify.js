
jQuery Autocompletify v1.0.2
Copyright (c) 2014 Satinder Singh/ http://codepedia.info
GitHub: https://github.com/iSatinderSingh/Autocompletify
License: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {

    $.widget("s.autocompletify", $.ui.autocomplete, {

    options: {
        sTemplate: "<div>One<div><div>two</div>",
        sDataFormat: "",
        sCustomClass: ""
    },
    _renderItem: function (ul, item) {
        ul.addClass(this.options.sCustomClass);
        if (!String.format) {
            String.format = function (format) {
                var args = Array.prototype.slice.call(arguments, 1);
                return format.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
            };
        }

        var outPutArr = [];
        outPutArr = this.options.sDataFormat;
        var getData = "";
        var props = outPutArr.map(function (prop) {
            return item[prop];
        });
        var getData = String.format.apply(null, [this.options.sTemplate].concat(props));
        // console.log(getData);
        return $("<li>")
              .attr("data-value", item.desc)
              .append($("<a>").append(getData))
              .appendTo(ul);
    }, // Add a CSS class name to the odd menu items.
    _renderMenu: function (ul, items) {
        var that = this;
        $.each(items, function (index, item) {
            that._renderItemData(ul, item);
        });
        $(ul).find("li:odd").addClass("odd");
    },
    open: function (event, ui) {
        return this._super();
    }, _init: function () {
        if (this.options.autoOpen) {
            this.open();
        }
    }


}

);
})(jQuery);
