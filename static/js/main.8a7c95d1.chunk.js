/*! For license information please see main.8a7c95d1.chunk.js.LICENSE.txt */
(this.webpackJsonpmoreaujulie_12_14012022=this.webpackJsonpmoreaujulie_12_14012022||[]).push([[0],{121:function(e,t,n){e.exports={activity:"activity_activity__BMm6f",legend:"activity_legend__1BjiW"}},161:function(e,t,n){e.exports=n.p+"static/media/logo.606a97bc.svg"},167:function(e,t,n){e.exports={averagesession:"averageSessions_averagesession__kDJbf"}},181:function(e,t,n){e.exports={performance:"performance_performance__3z2gI",angleAxis:"performance_angleAxis__1WyhF"}},186:function(e,t,n){e.exports={score:"score_score__1idAA"}},188:function(e,t,n){e.exports=n.p+"static/media/calories-icon.fec6c310.svg"},189:function(e,t,n){e.exports=n.p+"static/media/carbs-icon.b6097cee.svg"},190:function(e,t,n){e.exports=n.p+"static/media/fat-icon.6e4294b2.svg"},191:function(e,t,n){e.exports=n.p+"static/media/protein-icon.882174f3.svg"},192:function(e,t,n){e.exports={error:"error_error__3oSoS"}},193:function(e,t,n){e.exports={accueil:"accueil_accueil__35OnY"}},194:function(e,t,n){e.exports=n.p+"static/media/navlicon.15bda523.svg"},195:function(e,t,n){e.exports=n.p+"static/media/navlicon2.f60d29ed.svg"},196:function(e,t,n){e.exports=n.p+"static/media/navlicon3.66910078.svg"},197:function(e,t,n){e.exports=n.p+"static/media/navlicon4.3a52796f.svg"},198:function(e,t,n){e.exports={navigationLeft:"navigationLeft_navigationLeft__1m2bd"}},205:function(e,t,n){e.exports=n(345)},210:function(e,t,n){},211:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(64),o=n.n(i),c=n(26),l=n(12),s=(n(210),n(161)),u=n.n(s);n(211);var f=function(){return r.a.createElement("header",null,r.a.createElement("figure",null,r.a.createElement("img",{src:u.a,alt:"logo SportSee"})),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Accueil")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/Profil/18"},"Profil")),r.a.createElement("li",null,r.a.createElement(c.b,{to:""},"R\xe9glage")),r.a.createElement("li",null,r.a.createElement(c.b,{to:""},"Communaut\xe9")))))},m=n(162),d=n(163),h=n(164),p=n(200);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bonjour ",r.a.createElement("span",null,e.userFirstName)),r.a.createElement("p",null,"F\xe9licitation ! Vous avez explos\xe9 vos objectifs hier",r.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udc4f")))},y=n(66),E=n.n(y),v=n(346),k=n(347),S=n(179),_=n(351),b=n(91),x=n(92),w=n(75),A=n(167),L=n.n(A);var N=function(e){var t=e.userSessionAverage,n=["L ","M ","M ","J ","V ","S ","D "];return r.a.createElement("article",{className:L.a.averagesession},r.a.createElement("h2",null,"Dur\xe9e moyenne des sessions"),r.a.createElement("figure",null,r.a.createElement(v.a,{width:"100%",height:"100%"},r.a.createElement(k.a,{data:t,margin:{top:0,right:0,left:0,bottom:0}},r.a.createElement(S.a,{type:"monotone",dataKey:"sessionLength",stroke:"white",dot:!1,strokeWidth:2,unit:" min"}),r.a.createElement(_.a,{stroke:"transparent"}),r.a.createElement(b.a,{tickLine:!1,axisLine:!1,tickMargin:40,tick:{fill:"transparent",opacity:.5,AlignValue:"right",fontSize:12},padding:{left:0,right:0},hide:!0}),r.a.createElement(x.a,{hide:!0,domain:["dataMin-30","dataMax+50"]}),r.a.createElement("text",{x:"50%",y:"95%",textAnchor:"middle",fontSize:"12",fontWeight:"500",fill:"white",opacity:"0.5"},n),r.a.createElement(w.a,{itemStyle:{color:"black",fontSize:8,fontWeight:500},formatter:function(e,t,n){return[e,n]},labelStyle:{display:"none"},cursor:{stroke:"black",strokeOpacity:.1,strokeWidth:60,height:263}})))))},C=n(352),I=n(72),j=n(180),O=n(121),D=n.n(O);var R=function(e){for(var t=e.userActivity,n=["1","2","3","4","5","6","7","8","9","10"],a=0;a<t.length;a++)t[a].day=n[a];return r.a.createElement("article",{className:D.a.activity},r.a.createElement("h2",null,"Activit\xe9 quotidienne"),r.a.createElement("figure",null,r.a.createElement(v.a,{width:"100%",height:"100%"},r.a.createElement(C.a,{data:t,margin:{top:35,right:23,left:23,bottom:23}},r.a.createElement(_.a,{strokeDasharray:"2 2",stroke:"#DEDEDE",horizontal:!0,vertical:!1}),r.a.createElement(b.a,{dataKey:"day",tick:{fill:"#9B9EAC",fontSize:"14",fontWeight:500},tickLine:!1,tickSize:16,stroke:"#DEDEDE"}),r.a.createElement(x.a,{yAxisId:0,dataKey:"kilogram",stroke:"#9B9EAC",orientation:"right",axisLine:!1,tickLine:!1,tick:{fill:"#9B9EAC",fontSize:"14",fontWeight:500},domain:["dataMin - 1","dataMax + 2"]}),r.a.createElement(x.a,{yAxisId:1,dataKey:"calories",hide:!0,domain:["dataMin - 100","dataMax + 100"]}),r.a.createElement(w.a,{itemStyle:{color:"white",fontSize:10,fontWeight:500},formatter:function(e,t,n){return[e,n]},labelStyle:{display:"none"},contentStyle:{backgroundColor:"#E60000"}}),r.a.createElement(I.a,{layout:"horizontal",verticalAlign:"top",align:"right",iconType:"circle",iconSize:8,height:47,formatter:function(e){return r.a.createElement("span",{className:D.a.legend},e," ")}}),r.a.createElement(j.a,{yAxisId:0,dataKey:"kilogram",fill:"#282D30",barSize:7,radius:[5,5,0,0],unit:" kg",name:"Poids (kg)"}),r.a.createElement(j.a,{yAxisId:1,dataKey:"calories",fill:"#E60000",barSize:7,radius:[5,5,0,0],unit:" Kcal",name:"Calories br\xfbl\xe9es (kCal)"})))))},F=n(353),M=n(354),P=n(95),z=n(182),T=n(181),U=n.n(T);var K=function(e){for(var t=e.userPerformance,n=["Intensit\xe9","Vitesse","Force","Endurance","Energie","Cardio"],a=0;a<6;a++)t[a].kind=n[a];return r.a.createElement("article",{className:U.a.performance},r.a.createElement("figure",null,r.a.createElement(v.a,{width:"100%",height:"100%"},r.a.createElement(F.a,{data:t,cx:"50%",cy:"50%",outerRadius:"65%"},r.a.createElement(M.a,{radialLines:!1}),r.a.createElement(P.a,{dataKey:"kind",tickSize:10,tick:{fill:"white",fontSize:10,fontWeight:500,y:200}}),r.a.createElement(z.a,{dataKey:"value",stroke:"#FF0101",fill:"#FF0101",fillOpacity:.7})))))},W=n(355),G=n(187),B=n(186),V=n.n(B);var Y=function(e){var t=e.userScore,n=[{value:100*t}],a=100*t;return r.a.createElement("article",{className:V.a.score},r.a.createElement("h2",null,"Score"),r.a.createElement("figure",null,r.a.createElement(v.a,{width:"100%",height:"100%"},r.a.createElement(W.a,{data:n,innerRadius:80,barSize:10,startAngle:80,endAngle:440,fill:"#FF0000"},r.a.createElement(P.a,{type:"number",domain:[0,100],tick:!1}),r.a.createElement(G.a,{dataKey:"value",cornerRadius:5,background:!0}),r.a.createElement("text",{x:"50%",y:"45%",textAnchor:"middle",fontSize:"26",fontWeight:"700",fill:"black"},a,"%"),r.a.createElement("text",{x:"50%",y:"55%",textAnchor:"middle",fontSize:"16",fill:"gray",fontWeight:"500"},"de votre objectif")))))},J=n(70),q=n.n(J),Q=n(188),H=n.n(Q),X=n(189),Z=n.n(X),$=n(190),ee=n.n($),te=n(191),ne=n.n(te);var ae=function(e){var t=e.data,n=e.name,a=e.icon,i=e.unit;return r.a.createElement("p",null,r.a.createElement("img",{src:a,alt:"icon"}),r.a.createElement("span",{className:q.a.nb},t," ",i,r.a.createElement("span",{className:q.a.title},n)))};var re=function(e){var t=e.userKeyData,n=t.calorieCount,a=t.proteinCount,i=t.carbohydrateCount,o=t.lipidCount;return r.a.createElement("section",{className:q.a.keyCards},r.a.createElement(ae,{data:n,name:"Calories",icon:H.a,unit:"kCal"}),r.a.createElement(ae,{data:a,name:"Proteines",icon:ne.a,unit:"g"}),r.a.createElement(ae,{data:i,name:"Glucides",icon:Z.a,unit:"g"}),r.a.createElement(ae,{data:o,name:"Lipides",icon:ee.a,unit:"g"}))},ie=n(192),oe=n.n(ie);var ce=function(){return r.a.createElement("section",{className:oe.a.error},r.a.createElement("p",null,"404 Page d'erreur"))},le=n(61);function se(){se=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof f?t:f,i=Object.create(r.prototype),o=new b(a||[]);return i._invoke=function(e,t,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return w()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var c=k(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}e.wrap=l;var u={};function f(){}function m(){}function d(){}var h={};c(h,r,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(x([])));g&&g!==t&&n.call(g,r)&&(h=g);var y=d.prototype=f.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){var a;this._invoke=function(r,i){function o(){return new t((function(a,o){!function a(r,i,o,c){var l=s(e[r],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,o,c)}),(function(e){a("throw",e,o,c)})):t.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,c)}))}c(l.arg)}(r,i,a,o)}))}return a=a?a.then(o,o):o()}}function k(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:w}}function w(){return{value:void 0,done:!0}}return m.prototype=d,c(y,"constructor",d),c(d,"constructor",m),m.displayName=c(d,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(v.prototype),c(v.prototype,i,(function(){return this})),e.AsyncIterator=v,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new v(l(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),c(y,o,"Generator"),c(y,r,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=x,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function ue(){return(ue=Object(le.a)(se().mark((function e(t){return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3000/user/"+t).then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(le.a)(se().mark((function e(t){return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3000/user/"+t+"/activity").then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(le.a)(se().mark((function e(t){return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3000/user/"+t+"/average-sessions").then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(le.a)(se().mark((function e(t){return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3000/user/"+t+"/performance").then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=function(){return r.a.createElement("div",{className:E.a.loading},r.a.createElement("div",null),r.a.createElement("div",null))},pe=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).timer=function(){return setTimeout((function(){a.setState({loading:!1})}),2300)},a.state={loading:!0,error:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.params.id;this.isLoading=setTimeout((function(){e.setState({loading:!1})}),2300),function(e){return ue.apply(this,arguments)}(t).then((function(t){e.setState({userInfos:t.userInfos,keyData:t.keyData,todayScore:t.todayScore,score:t.score})})).catch((function(){e.setState({error:!0})})),function(e){return fe.apply(this,arguments)}(t).then((function(t){e.setState({userActivity:t.sessions})})).catch((function(){e.setState({error:!0})})),function(e){return me.apply(this,arguments)}(t).then((function(t){e.setState({userAverageSessions:t.sessions})})).catch((function(){e.setState({error:!0})})),function(e){return de.apply(this,arguments)}(t).then((function(t){e.setState({userPerformance:t.data})})).catch((function(){e.setState({error:!0})}))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.isLoading)}},{key:"render",value:function(){var e=this,t=this.state.loading,n=this.state.error;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(ce,null):t?r.a.createElement(he,null):r.a.createElement("section",{className:E.a.profil},r.a.createElement(g,{userFirstName:e.state.userInfos.firstName}),r.a.createElement(R,{userActivity:e.state.userActivity}),r.a.createElement(N,{userSessionAverage:e.state.userAverageSessions}),r.a.createElement(K,{userPerformance:e.state.userPerformance}),r.a.createElement(Y,{userScore:e.state.todayScore||e.state.score}),r.a.createElement(re,{userKeyData:e.state.keyData})))}}]),n}(a.Component),ge=function(e){return r.a.createElement(pe,Object.assign({},e,{params:Object(l.g)()}))},ye=n(46);var Ee=function(){var e=Object(l.g)().id,t=parseInt(e,10),n=ye.USER_MAIN_DATA.findIndex((function(e){return t===e.id})),a=ye.USER_MAIN_DATA[n].userInfos.firstName,i=ye.USER_ACTIVITY[n].sessions,o=ye.USER_AVERAGE_SESSIONS[n].sessions,c=ye.USER_PERFORMANCE[n].data,s=ye.USER_MAIN_DATA[n].todayScore,u=ye.USER_MAIN_DATA[n].keyData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:E.a.profil},r.a.createElement(g,{userFirstName:a}),r.a.createElement(R,{userActivity:i}),r.a.createElement(N,{userSessionAverage:o}),r.a.createElement(K,{userPerformance:c}),r.a.createElement(Y,{userScore:s}),r.a.createElement(re,{userKeyData:u})))},ve=n(193),ke=n.n(ve);var Se=function(){return r.a.createElement("section",{className:ke.a.accueil},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"profilMock/18"}," USER 18 MOCK")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"profilMock/12"}," USER 12 MOCK")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"profil/18"}," USER 18 API")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"profil/12"}," USER 12 API"))))},_e=n(194),be=n.n(_e),xe=n(195),we=n.n(xe),Ae=n(196),Le=n.n(Ae),Ne=n(197),Ce=n.n(Ne),Ie=n(198),je=n.n(Ie);var Oe=function(){return r.a.createElement("nav",{className:je.a.navigationLeft},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("figure",null,r.a.createElement("img",{src:be.a,alt:"logo SportSee"}))),r.a.createElement("li",null,r.a.createElement("figure",null,r.a.createElement("img",{src:we.a,alt:"logo SportSee"}))),r.a.createElement("li",null,r.a.createElement("figure",null,r.a.createElement("img",{src:Le.a,alt:"logo SportSee"}))),r.a.createElement("li",null,r.a.createElement("figure",null,r.a.createElement("img",{src:Ce.a,alt:"logo SportSee"})))),r.a.createElement("p",null,"Copiryght, SportSee 2020"))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(f,null),r.a.createElement(Oe,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/Profil/:id",element:r.a.createElement(ge,null)}),r.a.createElement(l.a,{path:"/ProfilMock/:id",element:r.a.createElement(Ee,null)}),r.a.createElement(l.a,{path:"/",element:r.a.createElement(Se,null)}),r.a.createElement(l.a,{path:"*",element:r.a.createElement(ce,null)})))),document.getElementById("root"))},46:function(e,t){e.exports={USER_MAIN_DATA:[{id:12,userInfos:{firstName:"Karl",lastName:"Dovineau",age:31},todayScore:.12,keyData:{calorieCount:1930,proteinCount:155,carbohydrateCount:290,lipidCount:50}},{id:18,userInfos:{firstName:"Cecilia",lastName:"Ratorez",age:34},todayScore:.3,keyData:{calorieCount:2500,proteinCount:90,carbohydrateCount:150,lipidCount:120}}],USER_ACTIVITY:[{userId:12,sessions:[{day:"2020-07-01",kilogram:80,calories:240},{day:"2020-07-02",kilogram:80,calories:220},{day:"2020-07-03",kilogram:81,calories:280},{day:"2020-07-04",kilogram:81,calories:290},{day:"2020-07-05",kilogram:80,calories:160},{day:"2020-07-06",kilogram:78,calories:162},{day:"2020-07-07",kilogram:76,calories:390}]},{userId:18,sessions:[{day:"2020-07-01",kilogram:70,calories:240},{day:"2020-07-02",kilogram:69,calories:220},{day:"2020-07-03",kilogram:70,calories:280},{day:"2020-07-04",kilogram:70,calories:500},{day:"2020-07-05",kilogram:69,calories:160},{day:"2020-07-06",kilogram:69,calories:162},{day:"2020-07-07",kilogram:69,calories:390}]}],USER_AVERAGE_SESSIONS:[{userId:12,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:23},{day:3,sessionLength:45},{day:4,sessionLength:50},{day:5,sessionLength:0},{day:6,sessionLength:0},{day:7,sessionLength:60}]},{userId:18,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:40},{day:3,sessionLength:50},{day:4,sessionLength:30},{day:5,sessionLength:30},{day:6,sessionLength:50},{day:7,sessionLength:50}]}],USER_PERFORMANCE:[{userId:12,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:80,kind:1},{value:120,kind:2},{value:140,kind:3},{value:50,kind:4},{value:200,kind:5},{value:90,kind:6}]},{userId:18,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:200,kind:1},{value:240,kind:2},{value:80,kind:3},{value:80,kind:4},{value:220,kind:5},{value:110,kind:6}]}]}},66:function(e,t,n){e.exports={profil:"profil_profil__BAajF",loading:"profil_loading__UEpk1",bg:"profil_bg__3FLN-"}},70:function(e,t,n){e.exports={keyCards:"keyCards_keyCards__2pBQ5",nb:"keyCards_nb__1xxrf",title:"keyCards_title__UDSGc"}}},[[205,1,2]]]);
//# sourceMappingURL=main.8a7c95d1.chunk.js.map