"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{8615:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,c,u=e(168),o=e(1109),i=e(1087),s=o.Z.ul(r||(r=(0,u.Z)(["\n  list-style-type: none;\n"]))),f=o.Z.li(a||(a=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),p=(0,o.Z)(i.rU)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),l=e(184),d=function(n){var t=n.films,e=n.prevLocation;return(0,l.jsx)(s,{children:t.map((function(n){return(0,l.jsx)(f,{children:(0,l.jsx)(p,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},9544:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(8615),u=e(5975),o=e(6852),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0),(0,u.Tg)().then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.Z,{films:e}),l&&(0,i.jsx)(o.Z,{})]})}},5975:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return i},Y5:function(){return f},wL:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="992758a4802a699e8df27d4d6efc34fb",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.a95aff8d.chunk.js.map