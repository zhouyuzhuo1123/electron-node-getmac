webpackJsonp([36],{614:function(e,t,a){"use strict";(function(t,n){var r=a(35),i=a(34),o={page:void 0,datatableApi:void 0,queryParam:{serviceCode:"GMES-CLIENT-ANDON005",workCenterCode:"",stationCode:"",typeCode:"",statusECode:"",minSwitchOnDateTime:"",maxSwitchOnDateTime:""},init:function(){t(document).off("keydown"),i.setBreadcrumb([n.t("ANDON.T.MENU_ANDONRUNLOG")]),this.loadPage(),i.translate('.page[data-page="andonLog"]'),this.event()},event:function(){t(".toggle-right-btn").on("click",function(e){Sweet.rightPanelView.router.loadPage("views/andon/andonLog-set.html"),myApp.openPanel("right")})},loadPage:function(){var e=this,a=this.page.height-126;this.datatableApi=i.dataTable(t(".table-panel table",this.page),{scrollY:a,ordering:!1,order:[],ajax:{serviceCode:"GMES-CLIENT-ANDON005",param:function(){return e.queryParam}},columns:[{data:"id",render:function(e,t,a,n){return n.settings._iDisplayStart+n.row+1}},{data:"workCenterText",name:"workCenterText"},{data:"stationText",name:"stationText"},{data:"typeText",name:"typeText"},{name:"statusECode",width:"65px",render:function(e,t,a){var r,i;switch(a.statusECode){case"1":r=n.t("ANDON.T.STATUS_TOUCH"),i="#ef5362";break;case"3":r=n.t("ANDON.T.STATUS_CLOSE"),i="#ffce54";break;default:r="确认",i="#27c24c"}return'<span style="padding:5px 15px;background:'+i+';border-radius:15px;">'+r+"</span>"}},{name:"triggerTime",render:function(e,t,a){var i=Math.abs((a.switchOffDateTime||r.getServerDateTime())-a.switchOnDateTime)/1e3;return function(e){var t=parseInt(e),a=0,r=0;return t>60&&(a=parseInt(t/60),t=parseInt(t%60),a>60&&(r=parseInt(a/60),a=parseInt(a%60))),n.t("COMMON.T.TIME",{hour:parseInt(r),minute:parseInt(a),second:parseInt(t)})}(i)}},{data:"switchOnDateTime",name:"switchOnDateTime",render:function(e,t,a){return function(e){function t(e){return parseInt(e)<10&&(e="0"+e),e}var a=new Date(e),n=a.getFullYear(),r=a.getMonth()+1,i=a.getDate(),o=a.getHours(),s=a.getMinutes(),d=a.getSeconds();return n+"-"+t(r)+"-"+t(i)+" "+t(o)+":"+t(s)+":"+t(d)}(e)}},{data:"switchOnUser",name:"switchOnUser"},{data:"memo",name:"memo"}]})},reloadDatatableByParam:function(e){this.queryParam=t.extend({},this.queryParam,e),this.datatableApi.ajax.reload()}};e.exports=o}).call(t,a(4),a(37))}});
//# sourceMappingURL=andon_andonLog_230f128a8f919086e2e0.js.map