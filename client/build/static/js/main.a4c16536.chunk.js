(this["webpackJsonprandom-stock"]=this["webpackJsonprandom-stock"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(6),s=c.n(a),r=(c(11),c(12),c(2)),i=c.n(r),o=c(4),u=c(3),j=(c(14),c(0)),d=function(e){var t=e.value,c=e.updateHandler,a=Object(n.useState)(),s=Object(u.a)(a,2),r=s[0],i=s[1],o=t.quote,d=t.lastPrice,b=t.change,l=t.pChange;return Object(n.useEffect)((function(){i(b>=0?"up":"down")}),[t]),Object(j.jsxs)("div",{className:"stock",children:[Object(j.jsx)("header",{children:"Random Stock Picker"}),Object(j.jsxs)("div",{className:"stock-info",children:[Object(j.jsxs)("div",{className:"price-info",children:[Object(j.jsxs)("div",{className:"current-price",children:[" ",Object(j.jsx)("i",{class:"fas fa-rupee-sign"})," ",d," "]}),Object(j.jsxs)("div",{className:"price-change ".concat(r),children:[Object(j.jsx)("i",{className:"fas fa-arrow-circle-".concat(r)})," ",b," (",l,"%)"]})]}),Object(j.jsxs)("div",{className:"company-name",children:[" ",o," "]})]}),Object(j.jsx)("button",{onClick:c,children:" Refresh "})]})},b=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"api/random/",e.next=3,fetch("api/random/",{method:"GET"});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=c.p+"static/media/hourglass.3da72fbb.gif",h=(c(16),function(){var e,t=Object(n.useState)({}),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!0),h=Object(u.a)(r,2),f=h[0],p=h[1],O=Object(n.useState)(),m=Object(u.a)(O,2),x=m[0],v=m[1],g=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,b();case 4:t=e.sent,s({quote:t.name,lastPrice:t.last_price,change:t.change,pChange:t.pchange}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v(e.t0.message);case 11:p(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),f?e=Object(j.jsx)("img",{src:l,alt:"hourglass"}):f||x?!f&&x&&(e=Object(j.jsxs)("p",{children:[" ",x," "]})):e=Object(j.jsx)(d,{value:a,updateHandler:g}),Object(j.jsx)("div",{className:"stock-card",children:e})});var f=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsxs)("footer",{children:["Made by ",Object(j.jsx)("a",{href:"https://github.com/twentyse7en/",children:"twentyse7en"}),"\ud83d\ude80"]})]})};s.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a4c16536.chunk.js.map