webpackJsonp([29],{628:function(e,t,a){"use strict";(function(e){var t={widgets:[],init:function(){this.loadPage()},event:function(){var t=this;$$("#model_test_button").on("click",function(){e.each(t.widgets,function(e,t){console.log(t.table("widget")),t.table("refresh")})})},loadPage:function(e){var t={fields:[{label:"设备编号",key:"emCode"},{label:"设备型号",key:"emModel"}],widgets:[{name:"client.table",renderId:"model_test_component_1",options:{dataAjaxUrl:"/restful/test/randomData",type:"GET",paramters:{prifex:"test2"},columns:[{label:"设备名称",dataIndex:"test2_name"},{label:"设备状态",dataIndex:"test2_status"},{label:"设备数量",dataIndex:"test2_num"},{label:"设备数据",dataIndex:"test2_data"}]}},{name:"client.table",renderId:"model_test_component_2",options:{dataAjaxUrl:"/restful/test/randomData",type:"GET",paramters:{prifex:"test1"},columns:[{label:"设备名称",dataIndex:"test1_name"},{label:"设备状态",dataIndex:"test1_status"},{label:"设备数量",dataIndex:"test1_num"},{label:"设备数据",dataIndex:"test1_data"}]}}]};this.render(t),this.event()},render:function(t){var a=t.fields||[];t.components;e.each(a,function(t,a){e("#model_test_fields").append("<span>"+a.label+"</span></span>"+a.key+"</span>")});var n=t.widgets||[],s=this;e.each(n,function(t,a){var n=widgetManager.createWidget(a.name,a.options,e("#"+a.renderId));s.widgets.push(n)})}};F7.onPageInit("model_test",function(a){console.log(e.widget),t.init()})}).call(t,a(4))}});
//# sourceMappingURL=pcm_weldingOnline_5979b28e8c791cb3282f.js.map