(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1031:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_scatter_chart_threshold_coloration_multiple_data_stream",(function(){return h}));var r=n(61),a=n(1130),o=n(1132),i=n(1134),u=new Date(1998,0,0),c=new Date(2001,0,1),d={x:new Date(1999,0,0).getTime(),y:2e3},m={x:new Date(2e3,0,0).getTime(),y:4e3},s={x:new Date(1999,0,0).getTime(),y:4e3},l={x:new Date(2e3,0,0).getTime(),y:2e3},h=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e,t;return Object(r.h)("div",null,Object(r.h)("monitor-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[i.f]=[d,m],e),data:[],resolution:i.f,dataType:a.a.NUMBER},{id:"test2",name:"test stream2",color:"red",aggregates:(t={},t[i.f]=[s,l],t),data:[],resolution:i.f,dataType:a.a.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:o.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:u,end:c,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()},1130:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(a||(a={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},i="round",u=3,c="M 2 2 H 15",d="1, 5"},1132:function(e,t,n){"use strict";var r,a,o;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(a||(a={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(o||(o={}))},1134:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return m}));var r=1e3,a=60*r,o=60*a,i=24*o,u=30*i,c=12*u,d=function(e){if(e<0)throw new Error("Time cannot be negative!");var t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:t%=60}},m=function(e,t,n){var r=n.start,c=n.end.getTime()-r.getTime();return t<o?c<a?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*a?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=i?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=o?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<i?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},890:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_scatter_chart_threshold_coloration_multiple_data_stream",(function(){return h}));var r=n(60),a=n(42),o=n(68),i=n(69),u=new Date(1998,0,0),c=new Date(2001,0,1),d={x:new Date(1999,0,0).getTime(),y:2e3},m={x:new Date(2e3,0,0).getTime(),y:4e3},s={x:new Date(1999,0,0).getTime(),y:4e3},l={x:new Date(2e3,0,0).getTime(),y:2e3},h=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e,t;return Object(r.h)("div",null,Object(r.h)("monitor-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[i.f]=[d,m],e),data:[],resolution:i.f,dataType:a.a.NUMBER},{id:"test2",name:"test stream2",color:"red",aggregates:(t={},t[i.f]=[s,l],t),data:[],resolution:i.f,dataType:a.a.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:o.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:u,end:c,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()}}]);