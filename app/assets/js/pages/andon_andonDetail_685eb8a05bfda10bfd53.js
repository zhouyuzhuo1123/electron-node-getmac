webpackJsonp([38],{617:function(t,a,o){"use strict";(function(t,a){var o={init:function(){this.loadPage(),this.event()},event:function(){setTimeout(function(){t.each(t("a[type='andon']"),function(a,o){var n=t(o);2==n.attr("statusCode")?(n.css("background-color",n.parents(".tab").attr("touchColor")),n.attr("statusCode")):(n.css("background-color",n.parents(".tab").attr("normalColor")),n.attr("statusCode"))}),t("a[type='andon']").on("click",function(a){var o=t(a.target);"A"!=a.target.tagName&&(o=o.parents("a")),2==o.attr("statusCode")?(console.log(o.parents(".tab").attr("touchColor")),o.css("background-color",o.parents(".tab").attr("normalColor")),o.attr("statusCode",1)):(o.css("background-color",o.parents(".tab").attr("touchColor")),o.attr("statusCode",2))})},100)},loadPage:function(o){t.getJSON(a.xhrUrl+"andondata.json",function(t){a.tplManager("andonTpl",t,"andonRender")})},render:function(t){}};F7.onPageInit("andonDetail",function(a){t(document).off("keydown"),o.init()})}).call(a,o(4),o(77))}});
//# sourceMappingURL=andon_andonDetail_685eb8a05bfda10bfd53.js.map