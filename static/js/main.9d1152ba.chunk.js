(this.webpackJsonpevently=this.webpackJsonpevently||[]).push([[0],{126:function(e,t,n){},201:function(e,t,n){},203:function(e,t,n){},356:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(66),c=n.n(o),s=(n(201),n(26)),i=n.n(s),l=n(51),u=n(19),h=n(28),d=n(20),p=n(22),f=(n(126),n(203),n(2)),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={collapsed:!0},e.expandEvent=function(t){e.state.collapsed?e.setState({collapsed:!1}):e.setState({collapsed:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("div",{className:"event-summary",children:Object(f.jsx)("h3",{children:t.summary})}),Object(f.jsxs)("div",{className:"event-time",children:[Object(f.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z",fill:"white"}),Object(f.jsx)("path",{d:"M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z",fill:"white"})]}),t.start.dateTime]}),Object(f.jsxs)("div",{className:"event-location",children:[Object(f.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(f.jsx)("path",{d:"M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),t.location]}),Object(f.jsx)("button",{className:"button__show-details",onClick:function(){return e.expandEvent(t)},children:n?"Show details":"Hide details"}),!n&&Object(f.jsx)("div",{className:"event-details",children:Object(f.jsx)("div",{className:"event-description",children:t.description})})]})}}]),n}(r.Component),j=v,b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(j,{event:e})},e.id)}))})})}}]),n}(r.Component),m=b,g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,text:r.text}},r.color=null,r}return Object(h.a)(n,[{key:"render",value:function(){this.props;return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="var(--purple-dark)",r}return n}(g),O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="var(--error)",r}return n}(g),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="var(--purple-dark)",r}return n}(g),y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,showSuggestions:!0,infoText:""});e.setState({query:n,infoText:"No city matches your search."})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(w,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",placeholder:"Enter a city",value:this.state.query,onFocus:function(){return e.setState({showSuggestions:!0})},onChange:this.handleInputChanged}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),k=y,S=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.numberOfEvents,n=e.setNumber;return Object(f.jsxs)("div",{className:"NumberOfEvents",children:[(t<1||t>100)&&Object(f.jsx)(O,{text:"Number of events to display must be between 1 and 100"}),Object(f.jsx)("p",{className:"number-of-events",children:"Show"}),Object(f.jsx)("input",{type:"number",min:"5",max:"100",step:"5",value:t,id:"NumberOfEvents",onChange:function(e){return n(e)}}),Object(f.jsx)("p",{className:"number-of-events",children:"events"})]})}}]),n}(r.Component),C=S,T=n(190),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],E=n(119),Z=n.n(E),W=n(75),L=n.n(W),A=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},M=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking token"),e.next=3,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(console.log("getting url"),window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting token"),n=encodeURIComponent(t),e.next=4,fetch("https://0tq0fabzz1.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return r=e.sent,a=r.access_token,console.log("token",a),a&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),console.log("getting events"),!window.location.href.startsWith("http://localhost")){e.next=5;break}return L.a.done(),e.abrupt("return",N);case 5:if(navigator.onLine){e.next=11;break}return e.next=8,localStorage.getItem("lastEvents");case 8:return t=e.sent,L.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 11:return e.next=13,J();case 13:if(!(n=e.sent)){e.next=23;break}return I(),r="https://0tq0fabzz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=19,Z.a.get(r);case 19:return(a=e.sent).data&&(o=A(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),L.a.done(),e.abrupt("return",a.data.events);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getting token2"),t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=7;break}return e.next=6,M(t);case 6:e.t0=e.sent;case 7:if(n=e.t0,t&&!n.error){e.next=22;break}return e.next=11,localStorage.removeItem("access_token");case 11:return r=new URLSearchParams(window.location.search),e.next=14,r.get("code");case 14:if(a=e.sent){e.next=21;break}return e.next=18,Z.a.get("https://0tq0fabzz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 18:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 21:return e.abrupt("return",a&&q(a));case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Header",children:Object(f.jsx)("a",{href:"https://wojtek-lukowski.github.io/evently/",children:Object(f.jsx)("svg",{width:"69",height:"103",viewBox:"0 0 69 103",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M61.7344 58.6328H21.2344V86.0547H68.7656V103H0.140625V0.625H68.625V17.7109H21.2344V42.1094H61.7344V58.6328Z",fill:"white"})})})})}}]),n}(r.Component),H=D,R=n(18),U=n(359),z=n(366),V=n(182),_=n(95),F=function(e){var t=e.events,n=Object(r.useState)([]),a=Object(R.a)(n,2),o=a[0],c=a[1];Object(r.useEffect)((function(){c((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]);var s=["var(--purple-dark)","#350568e6","#350568cc","#350568b3","#35056899","#35056880"];return Object(f.jsx)(U.a,{height:400,children:Object(f.jsx)(z.a,{width:730,height:250,children:Object(f.jsx)(V.a,{data:o,dataKey:"value",cx:200,cy:200,outerRadius:80,fill:"var(--purple-dark)",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(f.jsx)(_.a,{fill:s[t%s.length]},"cell-".concat(t))}))})})})};n(356);var G=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Evently"}),Object(f.jsx)("h4",{children:"All the full-stack events in one place"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with Google"})})]})}),Object(f.jsx)("a",{href:"https://wojtek-lukowski.github.io/evently/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},P=n(363),Y=n(364),K=n(187),X=n(188),Q=n(78),$=n(191),ee=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:30,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t,n){B().then((function(n){var r="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,e.state.numberOfEvents)})}))},e.setNumber=function(t){var n=parseInt(t.target.value);e.setState({numberOfEvents:n}),e.updateEvents(e.state.currentLocation,e.state.numberOfEvents)},e.getData=function(){var t=e.state,n=t.locations,r=t.events;return n.map((function(e){var t=r.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o,c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,M(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:r=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||r)}),(o||r)&&this.mounted&&B().then((function(e){c.mounted&&c.setState({events:e.slice(0,t),locations:A(e)})}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[navigator.onLine?Object(f.jsx)(x,{text:" "}):Object(f.jsx)(x,{text:"You are offline. The events may not be updated."}),Object(f.jsx)(H,{}),Object(f.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(C,{numberOfEvents:this.state.numberOfEvents,setNumber:this.setNumber}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(F,{events:this.state.events}),Object(f.jsx)(U.a,{height:400,children:Object(f.jsxs)(P.a,{width:800,height:250,margin:{top:20,right:20,bottom:10,left:10},children:[Object(f.jsx)(Y.a,{strokeDasharray:"3 3"}),Object(f.jsx)(K.a,{dataKey:"city",name:"city",type:"category"}),Object(f.jsx)(X.a,{dataKey:"number",name:"number of events",type:"number",allowDecimals:!1}),Object(f.jsx)(Q.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)($.a,{data:this.getData(),fill:"var(--purple-dark)"})]})})]}),Object(f.jsx)(m,{events:this.state.events}),Object(f.jsx)(G,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){J()}})]})}}]),n}(r.Component),te=ee,ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(357);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/evently",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/evently","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(t,e)}))}}(),ae()}},[[358,1,2]]]);
//# sourceMappingURL=main.9d1152ba.chunk.js.map