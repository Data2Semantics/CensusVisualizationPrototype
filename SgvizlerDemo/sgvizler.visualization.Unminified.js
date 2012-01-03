/*  Sgvizler visualization functions
 *  (c) 2011 Martin G. Skjæveland
 *
 *  Sgvizler is freely distributable under the terms of an MIT-style license.
 *  Sgvizler web site: https://code.google.com/p/sgvizler/
 *--------------------------------------------------------------------------*/
var ___;
sgvizler.visualization.sMap = function (a) {
    this.container = a;
}, sgvizler.visualization.sMap.prototype = {
    id: "sMap",
    name: "Map+",
    draw: function (a, b) {
        var c, d = a.getNumberOfColumns();
        if (d > 3) {
            c = a.clone();
            for (var e = d - 1; e > 2; e--) c.removeColumn(e);
            for (var f = 0; f < a.getNumberOfRows(); f++) {
                var g = "<div class='sgvizler sgvizler-sMap'>";
                g += "<h1>" + a.getValue(f, 2) + "</h1>", 5 < d && a.getValue(f, 5) !== null && (g += "<div class='img'><img src='" + a.getValue(f, 5) + "'/></div>"), 3 < d && a.getValue(f, 3) !== null && (g += "<p class='text'>" + a.getValue(f, 3) + "</p>"), 4 < d && a.getValue(f, 4) !== null && (g += "<p class='link'><a href='" + sgvizler.util.unprefixify(a.getValue(f, 4)) + "'>" + a.getValue(f, 4) + "</a></p>"), g += "</div>", c.setCell(f, 2, g);
            }
        } else c = dDataTable;
        chart = new google.visualization.Map(this.container), chart.draw(c, b);
    }
}, sgvizler.visualization.List = function (a) {
    this.container = a;
}, sgvizler.visualization.List.prototype = {
    id: "sList",
    name: "List",
    draw: function (a, b) {
        var c = a.getNumberOfColumns(),
            d = a.getNumberOfRows(),
            e = $.extend({
                list: "ul",
                cellSep: "___",
                rowPrefix: "",
                rowPostfix: ""
            }, b),
            f = $(document.createElement(e.list));
        for (var g = 0; g < d; g++) {
            var h = e.rowPrefix;
            for (var i = 0; i < c; i++) h += a.getValue(g, i), i + 1 !== c && (h += e.cellSep);
            h += e.rowPostfix, f.append($(document.createElement("li")).html(h));
        }
        $(this.container).empty(), $(this.container).append(f);
    }
}, sgvizler.visualization.DefList = function (a) {
    this.container = a;
}, sgvizler.visualization.DefList.prototype = {
    id: "sDefList",
    name: "Definition List",
    draw: function (a, b) {
        var c = a.getNumberOfColumns(),
            d = a.getNumberOfRows(),
            e = $.extend({
                cellSep: " ",
                termPrefix: "",
                termPostfix: ":",
                definitionPrefix: "",
                definitionPostfix: ""
            }, b),
            f = $(document.createElement("dl"));
        for (var g = 0; g < d; g++) {
            var h = e.termPrefix + a.getValue(g, 0) + e.termPostfix;
            f.append($(document.createElement("dt")).html(h));
            var i = e.definitionPrefix;
            for (var j = 1; j < c; j++) i += a.getValue(g, j), j + 1 !== c && (i += e.cellSep);
            i += e.definitionPostfix, f.append($(document.createElement("dd")).html(i));
        }
        $(this.container).empty(), $(this.container).append(f);
    }
}, sgvizler.visualization.Text = function (a) {
    this.container = a;
}, sgvizler.visualization.Text.prototype = {
    id: "sText",
    name: "Text",
    draw: function (a, b) {
        var c = a.getNumberOfColumns(),
            d = a.getNumberOfRows(),
            e = $.extend({
                cellSep: ", ",
                cellPrefix: "",
                cellPostfix: "",
                rowPrefix: "<p>",
                rowPostfix: "</p>",
                resultsPrefix: "<div>",
                resultsPostfix: "</div>"
            }, b),
            f = e.resultsPrefix;
        for (var g = 0; g < d; g++) {
            var h = e.rowPrefix;
            for (var i = 0; i < c; i++) h += e.cellPrefix + a.getValue(g, i) + e.cellPostfix, i + 1 !== c && (h += e.cellSep);
            f += h + e.rowPostfix;
        }
        f += e.resultsPostfix, $(this.container).empty(), $(this.container).html(f);
    }
};
sgvizler.visualization.List = function (container) {
    this.container = container;
};