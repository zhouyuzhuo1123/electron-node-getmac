webpackJsonp([32],{624:function(e,o,t){"use strict";(function(o,n,a){var u=t(115),i=function(e){return e&&e.__esModule?e:{default:e}}(u),r=t(122),d=t(34),l=t(35),c={init:function(){d.setBreadcrumb([]),this.navMenu.init(),this.event(),this.menuHotKeyEvent(),d.translate(".page[data-page='home']")},refresh:function(){this.navMenu.refresh()},event:function(){function e(e){var n=o(".tests").index(o(".selected-btn"));if(-1===n)return void o(".tests").eq(0).addClass("selected-btn");t.removeClass("selected-btn"),t.eq(n+e).addClass("selected-btn")}var t=o(".tests");o(document).on("keydown",function(o){37==o.keyCode&&e(-1),39==o.keyCode&&e(1),38==o.keyCode&&e(-4),40==o.keyCode&&e(4),13==o.keyCode&&$$(".selected-btn a").eq(0).trigger("click")})},navMenu:{init:function(){this.getData(),this.completeEdit()},getData:function(){this.render(null,l.getUserAllModuleMenus())},render:function(e,t){var a=this,u=l.getUserAllModuleMenus();u=0===(0,i.default)(u).length?t:u;var r=c.localCollectionModule.getCollectionModules(),d=[];void 0!==r&&(o.each(r,function(e,t){o.each(u.navMenu,function(e,n){var a=n.children;a&&o.each(a,function(e,o){var n=o.data;n.menuCode==t.menuCode&&d.push(n)})})}),u.favorMenu=d),Sweet.tpl({tplElement:"#quickStartMenuTpl",renderElement:"#quickStartMenus",data:u}),o("#setFavorBtn").on("click",function(){o(".nav-menu-box").addClass("hide"),o(".quick-start-menus").addClass("show-flex"),o("#quickStartFavor").addClass("on"),window.quickSortFavor.option("disabled",!1)}),a.delFavor(),c.quickStart.sortable(),e||a.editFavor(),c.navMenu.floatMenu(),c.quickStart.floatMenu(),n.runningModel.active("#quickStartMenus")},floatMenu:function(e,t){e=e||"#indexFavor",t=t||window.sortFavor;var n=o(e);n.find(".edit-favor").on("click",function(){t.option("disabled",!1),o(this).parents(".speed-dial").removeClass("speed-dial-opened"),n.addClass("on")}),n.find(".add-favor").on("click",function(){c.localCollectionModule.reLoad();var e=c.localCollectionModule.getCollectionModules();o("input[name='checkFavor']").prop("checked",!1);var t=null;o.each(e,function(e,n){t=n.menuCode+"||"+n.moduleCode+"||"+n.moduleGroupCode+"||"+n.moduleType,o("input[name='checkFavor'][value='"+t+"']").prop("checked",!0)}),myApp.popup(".popup-selectFavorMenu"),$$(this).parents(".speed-dial").removeClass("speed-dial-opened")})},completeEdit:function(){o(".edit-favor-complete").on("click",function(){c.localCollectionModule.reLoad();var e={};o.each(c.localCollectionModule.getCollectionModules(),function(t,n){o.each(n,function(o,n){e["userCollectionList["+t+"]."+o]=n})}),console.log(e),d.post("restful/userCollection/resetUserCollections",e,"保存模块调整信息",function(){o(".favor-menu").removeClass("on"),window.quickSortFavor.option("disabled",!0),o(this).hasClass("quick-favor-complete")&&(o(".nav-menu-box").removeClass("hide"),o(".quick-start-menus").removeClass("show-flex")),c.navMenu.refresh()})})},editFavor:function(){o(".add-favor-ok").on("click",function(){var e=myApp.formToJSON("#checkFavorForm").checkFavor,t=$$("#indexFavor"),n=$$("#quickStartFavor"),a=[],u=[];o.each(e,function(e,o){u=o.split("||"),a.push({menuCode:u[0],moduleCode:u[1],moduleGroupCode:u[2],moduleType:u[3]})}),c.localCollectionModule.push(a,!0),c.navMenu.refresh(),t.addClass("on"),n.addClass("on"),window.quickSortFavor.option("disabled",!1),myApp.closeModal(".popup-selectFavorMenu")}),o(".add-favor-cancel").on("click",function(){myApp.closeModal(".popup-selectFavorMenu")})},delFavor:function(){o(".del-favor").on("click",function(){var e=$$(this),t=e.parents(".quick-menu-item-box");t.addClass("remove"),setTimeout(function(){o(".quick-menu-item-box[favor-id='"+t.attr("favor-id")+"']").remove()},300)})},refresh:function(){this.render("refresh")}},localCollectionModule:{currentModules:void 0,push:function(e,t){var n=this;!0===t&&this.reLoad();var a=!1;o(".popup-quickStart").css("display"),o.each(e,function(e,t){a=!1,o.each(n.currentModules,function(e,o){o.menuCode===t.menuCode&&(a=!0)}),a||n.currentModules.push(t)})},clear:function(){this.currentModules=void 0},reLoad:function(){var e=this;this.currentModules=[],"none"==o(".popup-quickStart").css("display")?o.each(o("#quickMenusRender").children(".quick-menu-item-box"),function(t,n){e.currentModules.push({menuCode:o(n).attr("favor-id"),moduleCode:o(n).attr("data-module-code"),moduleGroupCode:o(n).attr("data-module-group-code"),moduleType:o(n).attr("data-module-type")})}):o.each(o("#quickStartMenus").children(".quick-menu-item-box"),function(t,n){e.currentModules.push({menuCode:o(n).attr("favor-id"),moduleCode:o(n).attr("data-module-code"),moduleGroupCode:o(n).attr("data-module-group-code"),moduleType:o(n).attr("data-module-type")})})},getCollectionModules:function(){return this.currentModules}},quickStart:{floatMenu:function(){c.navMenu.floatMenu("#quickStartFavor",window.quickSortFavor)},sortable:function(){if(document.getElementById("quickStartMenus")){var e=document.getElementById("quickStartMenus");window.quickSortFavor=r.create(e,{animation:100,handle:".favor-move",disabled:!0})}}},menuHotKeyEvent:function(){d.hotkeysBind("keydown","return",function(){var e=o(".quick-menu-item-inner:eq(0)",this.page);e&&e.length>0&&Sweet.mainView.router.load({url:e.attr("data-url")})}),o(document).keydown(function(e){if("views/index.html"===Sweet.mainView.activePage.url){var t,n=e.keyCode,u=n>=48&&n<=57,i=n>=96&&n<=105;if(!u&&!i)return;t=48===n||96===n?10:n>48&&n<=57?n-48:n-96;var r=o(".quick-menu-item-inner");t>r.length?a.alert({text:"你所按快捷键序号超过菜单数！"}):(o(document).off("keydown"),Sweet.mainView.router.load({url:"views/"+r.eq(t-1).attr("data-url")}))}})},removeHotMenu:function(){o(document).off("keydown")},parseQueryString:function(e){var o=/^[^\?]+\?([\w\W]+)$/,t=/([^&=]+)=([\w\W]*?)(&|$|#)/g,n=o.exec(e),a={};if(n&&n[1])for(var u,i=n[1];null!==(u=t.exec(i));)a[u[1]]=u[2];return a}};e.exports=c}).call(o,t(4),t(77),t(36))}});
//# sourceMappingURL=index_4eb7577d85b9452d82a8.js.map