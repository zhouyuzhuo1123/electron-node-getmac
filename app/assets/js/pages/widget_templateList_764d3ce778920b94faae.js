webpackJsonp([11],{653:function(e,i,d){"use strict";function t(e,i,d){if(!(this instanceof t))return new t(e,i,d);this.tagName=e,this.props=i,this.children=d}Object.defineProperty(i,"__esModule",{value:!0}),t.prototype.render=function(){var e=document.createElement(this.tagName),i=this.props;this.children.length<2&&(i.class+=" test",i["data-index"]=parseInt(1e5*Math.random()));for(var d in i){var s=i[d];e.setAttribute(d,s)}return(this.children||[]).forEach(function(i){var d=i instanceof t?i.render():document.createTextNode(i);e.appendChild(d)}),e};var s=t("div",{id:"widgetModel"},[t("div",{class:"flex-middle"},["模块1"]),t("div",{class:"flex-middle"},[t("div",{class:"flex-middle"},["模块2"]),t("div",{class:"flex-middle"},["模块3"])]),t("div",{class:"flex-size-1 flex-middle"},["模块4"])]),l=t("div",{id:"widgetModel"},[t("div",{class:"flex-middle"},["模块5"]),t("div",{class:"flex-middle"},["模块6"]),t("div",{class:"flex-size-1 flex-middle"},["模块8"])]);i.default={ONE:{UI_ONE:s,name:"ONE",image:""},TWO:{UI_TWO:l,name:"TWO",image:""}}}});
//# sourceMappingURL=widget_templateList_764d3ce778920b94faae.js.map