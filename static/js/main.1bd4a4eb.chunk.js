(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},27:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),o=t.n(r),l=(t(26),t(27),t(28),function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"This is a experimental React Learning app"))}),i=t(2),m=function(e){var a=e.name,t=e.info;return c.a.createElement("div",{className:"col-sm-6 mt-1 align-centre"},c.a.createElement("div",{className:"card",width:"18rem"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},t))))},s=t(20),u=Object(n.createContext)(),p=function(e){var a=Object(n.useState)([{name:"Movie 1",info:"Some More info",id:"1"},{name:"Movie 2",info:"Some More info",id:"2"},{name:"Movie 3",info:"Some More info",id:"3"},{name:"Movie 4",info:"Some More info",id:"4"}]),t=Object(i.a)(a,2),r=t[0],o=t[1];return c.a.createElement(u.Provider,{value:[r,o]},e.children)},d=function(){var e=Object(n.useContext)(u),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),m=l[0],p=l[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],v=b[1];return c.a.createElement("div",{className:"row justify-content-center align-items-center form-group mt-2"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t),r((function(e){return[].concat(Object(s.a)(e),[{name:m,info:f,id:e.length+1}])}))}},c.a.createElement("div",{className:"input-group-append",id:"button-addon4"},c.a.createElement("input",{type:"text",className:"col-md-4 form-control",value:m,placeholder:"Movie Name",onChange:function(e){p(e.target.value)}}),c.a.createElement("input",{type:"text",className:"col-md-4 form-control ml-2",value:f,placeholder:"Movie Information",onChange:function(e){v(e.target.value)}}),c.a.createElement("button",{className:"form-control btn btn-primary ml-2",type:"submit"},"Add Movie"))))},b=function(){var e=Object(n.useContext)(u),a=Object(i.a)(e,2),t=a[0];a[1];return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center align-items-center"},t.map((function(e){return c.a.createElement(m,{name:e.name,key:e.id,info:e.info})})))))},f=t(5),v=function(){var e=Object(n.useContext)(u),a=Object(i.a)(e,2),t=a[0];a[1];return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement(f.b,{style:{color:"black"},to:"".concat("/react-demo-app","/")},c.a.createElement("h3",null,"Experiments")),c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement(f.b,{to:"".concat("/react-demo-app","/movies")},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link"},"Movies: ",t.length))),c.a.createElement(f.b,{to:"".concat("/react-demo-app","/recipe-listing")},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link"},"Recipe listings"))),c.a.createElement(f.b,{to:"".concat("/react-demo-app","/about")},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link"},"About"))),c.a.createElement(f.b,{to:"".concat("/react-demo-app","/breaking-bad")},c.a.createElement("span",{className:"nav-link"},"BreakingBad")))))},E=function(){return c.a.createElement("div",{className:"About"},c.a.createElement("h1",null,"About Page"))},h=t(7),g=t.n(h),N=t(10),j=function(e){var a=e.title,t=e.calories,n=e.image,r=e.link;return c.a.createElement("div",{className:"col-sm-6 mt-1"},c.a.createElement("div",{className:"card",width:"18rem"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},t),c.a.createElement("img",{src:n,className:"img-thumbnail"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"Go to Website"))))},O=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),m=l[0],s=l[1],u=Object(n.useState)("paneer"),p=Object(i.a)(u,2),d=p[0],b=p[1];Object(n.useEffect)((function(){f()}),[d]);var f=function(){var e=Object(N.a)(g.a.mark((function e(){var a,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("11cbe344","&app_key=").concat("797e46b298abfd26de41839921b778f1"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"row justify-content-center align-items-center"},c.a.createElement("form",{onSubmit:function(e){console.log(m),e.preventDefault(),b(m),s("")},className:"search-form"},c.a.createElement("div",{className:"input-group-append",id:"button-addon4"},c.a.createElement("input",{type:"text",className:"search-bar form-control",value:m,onChange:function(e){s(e.target.value)},"aria-describedby":"button-addon4"}),c.a.createElement("button",{className:"search-btn btn btn-outline-secondary ml-3",placeholder:"Search Recipe",type:"submit"},"Search"))),c.a.createElement("div",{className:"row mt-1 mr-1 ml-1"},t.map((function(e){return c.a.createElement(j,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,link:e.recipe.url})}))))},k=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(N.a)(g.a.mark((function e(){var a,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"BreakingBad"},c.a.createElement("h1",null,"Few Characters:"),t.map((function(e){return c.a.createElement(f.b,{to:"".concat("/react-demo-app","/breaking-bad/").concat(e.char_id)},c.a.createElement("span",{key:e.char_id},e.name),c.a.createElement("br",null))})))},x=function(e){var a=e.match,t=Object(n.useState)({}),r=Object(i.a)(t,2),o=r[0],l=r[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(N.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.breakingbadapi.com/api/characters/".concat(a.params.id));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"BreakingBadCharacter"},c.a.createElement("h1",null,o.name," played by ",o.portrayed),c.a.createElement("h3",null,o.nickname),c.a.createElement("img",{src:o.img,alt:""}))},w=t(8),y=function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,null,c.a.createElement(v,null),c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"".concat("/react-demo-app","/"),exact:!0,component:l}),c.a.createElement(w.a,{path:"".concat("/react-demo-app","/movies"),exact:!0,component:b}),c.a.createElement(w.a,{path:"".concat("/react-demo-app","/about"),exact:!0,component:E}),c.a.createElement(w.a,{path:"".concat("/react-demo-app","/breaking-bad"),exact:!0,component:k}),c.a.createElement(w.a,{path:"".concat("/react-demo-app","/breaking-bad/:id"),exact:!0,component:x}),c.a.createElement(w.a,{path:"".concat("/react-demo-app","/recipe-listing"),exact:!0,component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1bd4a4eb.chunk.js.map