(this["webpackJsonpstop-watch-app"]=this["webpackJsonpstop-watch-app"]||[]).push([[0],{10:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),s=c(4),a=c.n(s),u=c(2),r=c(12),b=c(1);function i(){var t=Object(n.useState)(0),e=Object(u.a)(t,2),c=e[0],o=e[1],s=Object(n.useState)("stop"),a=Object(u.a)(s,2),i=a[0],l=a[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),p=O[0],f=O[1],S=Object(n.useState)(0),d=Object(u.a)(S,2),h=d[0],k=d[1],m=Object(n.useState)("Start"),v=Object(u.a)(m,2),w=v[0],x=v[1];Object(n.useEffect)((function(){h>=2&&l("wait")}),[h]),Object(n.useEffect)((function(){clearInterval(p),new r.a((function(t){"stop"===i?(clearInterval(p),t.complete(),console.log("stop")):"run"===i&&f(setInterval((function(){o((function(t){return t+1e3})),console.log("run")}),1e3))})).subscribe({complete:function(){console.log("complete")}})}),[i]);var C=Object(n.useCallback)((function(){"Start"===w?(x("Stop"),l("run")):(x("Start"),l("stop"),o(0))}),[w]),g=Object(n.useCallback)((function(){o(0),l("run")}),[]),I=Object(n.useCallback)((function(){k((function(t){return t+1})),setTimeout((function(){k(0)}),300)}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[" ",new Date(c).toISOString().slice(11,19)]}),Object(b.jsx)("button",{className:"start-button",onClick:C,children:w}),Object(b.jsx)("button",{onClick:g,children:"Reset"}),Object(b.jsx)("button",{onClick:I,children:"Wait"})]})}a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(i,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.556b8476.chunk.js.map