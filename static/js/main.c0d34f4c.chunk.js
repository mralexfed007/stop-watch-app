(this["webpackJsonpstop-watch-app"]=this["webpackJsonpstop-watch-app"]||[]).push([[0],{10:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(4),s=c.n(r),u=c(2),o=c(12),b=c(1);function i(){var t=Object(n.useState)(0),e=Object(u.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)("stop"),s=Object(u.a)(r,2),i=s[0],j=s[1],l=Object(n.useState)(""),O=Object(u.a)(l,2),f=O[0],p=O[1],S=Object(n.useState)(0),d=Object(u.a)(S,2),h=d[0],v=d[1],k=Object(n.useState)("Start"),x=Object(u.a)(k,2),w=x[0],I=x[1];Object(n.useEffect)((function(){h>=2&&j("wait")}),[h]),Object(n.useEffect)((function(){clearInterval(f),new o.a((function(t){return p(setInterval((function(){"stop"===i?clearInterval(f):"run"===i&&(clearInterval(f),a((function(t){return t+1e3})),t.next())}),1e3)),function(){clearInterval(f)}})).subscribe()}),[i]);var C=Object(n.useCallback)((function(){"Start"===w?(I("Stop"),j("run")):(I("Start"),j("stop"),a(0))}),[w]),m=Object(n.useCallback)((function(){a(0),j("run")}),[]),E=Object(n.useCallback)((function(){v((function(t){return t+1})),setTimeout((function(){v(0)}),300)}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[" ",new Date(c).toISOString().slice(11,19)]}),Object(b.jsx)("button",{className:"start-button",onClick:C,children:w}),Object(b.jsx)("button",{onClick:m,children:"Reset"}),Object(b.jsx)("button",{onClick:E,children:"Wait"})]})}s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c0d34f4c.chunk.js.map