(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[0],{109:function(e,t,i){},119:function(e,t,i){},122:function(e,t,i){},123:function(e,t,i){},124:function(e,t,i){},125:function(e,t,i){},126:function(e,t,i){},135:function(e,t,i){},136:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i.n(c),s=i(19),n=i.n(s),a=(i(109),i(40)),o=i(51),l=i(10),d=i(89),u=i(55),j=i(83),b=(i(119),i(120),i(2)),f=function(e){var t=e.imgs;return Object(b.jsx)(j.Carousel,{showIndicators:!1,showThumbs:!1,children:t.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e,alt:"\u0412 \u0441\u043b\u0456\u043f\u0443"})},t)}))})},p=(i(122),function(e){var t=e.points,i=e.bounds,c=e.chosenCluster,r=Object(u.a)({points:t,bounds:i,zoom:20,options:{radius:75,maxZoom:20}}).clusters;return Object(b.jsx)("div",{className:"container__results",children:Object(b.jsx)("ul",{className:"results__list",children:c?c.map((function(e){return Object(b.jsxs)("li",{className:"results__item",children:[Object(b.jsx)("div",{className:"results__img",children:Object(b.jsx)(f,{imgs:e.properties.offerImg})}),Object(b.jsxs)("div",{className:"results__price",children:[e.properties.offerPrice,Object(b.jsx)("span",{children:"\u0433\u0440\u043d / \u0434\u043e\u0431\u0430"})]}),Object(b.jsx)("div",{className:"results__title",children:e.properties.offerTitle})]},e.properties.offerKey)})):r.map((function(e){return Object(b.jsxs)("li",{className:"results__item",children:[Object(b.jsx)("div",{className:"results__img",children:Object(b.jsx)(f,{imgs:e.properties.offerImg})}),Object(b.jsxs)("div",{className:"results__price",children:[e.properties.offerPrice,Object(b.jsx)("span",{children:" \u0433\u0440\u043d / \u0434\u043e\u0431\u0430"})]}),Object(b.jsx)("div",{className:"results__title",children:e.properties.offerTitle})]},e.properties.offerKey)}))})})}),O=i(84),m=(i(123),function(e){var t=e.cluster,i=e.setChosenCluster,c=e.clusterBG,r=e.setClusterBG;return Object(b.jsx)("div",{onClick:function(){var e;e=t.properties.offerKey,r(e),i([t])},className:"locationMarker",style:{position:"absolute",top:"-10px",left:"-10px",backgroundColor:"".concat(c===t.properties.offerKey?"rgb(50, 171, 201)":"rgb(50, 85, 201)")},children:Object(b.jsx)(O.a,{})})}),g=(i(124),function(e){var t=e.id,i=e.addSize,c=e.changeSize,r=e.clickClusterHandler,s=e.pointCount,n=e.clusterBG,a=e.setClusterBG;return Object(b.jsx)("div",{className:"cluster__marker",style:{width:"".concat(i+c,"px"),height:"".concat(i+c,"px"),position:"absolute",top:"-".concat((i+c)/2,"px"),left:"-".concat((i+c)/2,"px"),backgroundColor:"".concat(n===t?"rgb(50, 171, 201)":"rgb(50, 85, 201)")},onClick:function(){r(t),a(t)},children:s})}),h=(i(125),{lat:50.4397824,lng:30.4644096}),x=function(e){var t=e.offerData,i=Object(c.useRef)(),r=Object(c.useState)(10),s=Object(l.a)(r,2),n=s[0],a=s[1],o=Object(c.useState)(null),j=Object(l.a)(o,2),f=j[0],O=j[1],x=Object(c.useState)(null),v=Object(l.a)(x,2),_=v[0],C=v[1],y=Object(c.useState)(null),S=Object(l.a)(y,2),N=S[0],k=S[1],w=Object(c.useState)(null),F=Object(l.a)(w,2),D=F[0],I=F[1],A=t.map((function(e){return{type:"Feature",properties:{cluster:!1,offerKey:e.id,offerTitle:e.title,offerType:e.categories[0].id,offerImg:e.img,offerPrice:e.price},geometry:{type:"Point",coordinates:[e.geometries[0].coordinates[0],e.geometries[0].coordinates[1]]}}})),U=Object(u.a)({points:A,bounds:_,zoom:n,options:{radius:75,maxZoom:20}}),P=U.clusters,G=U.supercluster,R=function(e){var t=G.getLeaves(e,Infinity);k(t)};return Object(c.useEffect)((function(){new Promise((function(e,t){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(t){var i=t.coords,c=i.latitude,r=i.longitude;e({lat:c,lng:r})}),(function(){t(h)})):t(h)})).then((function(e){O(e)})).catch((function(e){O(e)}))}),[]),Object(b.jsxs)("div",{className:"container__map",children:[Object(b.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyDQrudvF7AqVSKiAdumkeuLnWezpJNrSdQ"},center:f,zoom:n,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map;i.current=t},onChange:function(e){var t=e.zoom,i=e.bounds;a(t),C([i.nw.lng,i.se.lat,i.se.lng,i.nw.lat])},onClick:function(){k(null),I(null)},onDrag:function(){k(null),I(null)},children:P.map((function(e){var t=Object(l.a)(e.geometry.coordinates,2),i=t[0],c=t[1],r=e.properties,s=r.cluster,n=r.point_count;if(s){var a=Math.round(20*n/A.length),o=Math.min(10*a,30);return Object(b.jsx)(g,{lat:c,lng:i,id:e.id,addSize:o,changeSize:a,clickClusterHandler:R,pointCount:n,clusterBG:D,setClusterBG:I},e.id)}return Object(b.jsx)(m,{lat:c,lng:i,cluster:e,clusterBG:D,setChosenCluster:k,setClusterBG:I},e.properties.offerKey)}))}),Object(b.jsx)(p,{points:A,bounds:_,chosenCluster:N})]})};x.defaultProps={center:{lat:29.305561,lng:-3.981108}};var v=i(183),_=i(180),C=i(52),y=i.p+"static/media/logo.12f233ac.svg",S=(i(126),i(17)),N=i(189),k=i(188),w=i(192),F=i(182),D=i(186),I=i(193),A=function(e){var t=e.categories,i=e.set\u0421ategories;return Object(b.jsx)(N.a,{sx:{minWidth:120},children:Object(b.jsxs)(I.a,{fullWidth:!0,children:[Object(b.jsx)(D.a,{id:"demo-simple-select-label",children:"\u0429\u043e \u0432\u0438 \u0437\u0434\u0430\u0454\u0442\u0435?"}),Object(b.jsxs)(_.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t[0].title,label:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",onChange:function(e){switch(e.target.value){case"Flat":i([{id:1,title:"Flat"}]);break;case"Room":i([{id:2,title:"Room"}]);break;default:i([{id:3,title:"House"}])}},children:[Object(b.jsx)(v.a,{value:"Flat",children:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430"}),Object(b.jsx)(v.a,{value:"Room",children:"\u041a\u0456\u043c\u043d\u0430\u0442\u0430"}),Object(b.jsx)(v.a,{value:"House",children:"\u0411\u0443\u0434\u0438\u043d\u043e\u043a"})]})]})})},U=i(184),P=function(e){var t=e.description,i=e.setDescription;return Object(b.jsx)(N.a,{component:"form",fullWidth:!0,noValidate:!0,autoComplete:"off",mt:"20px",children:Object(b.jsx)(U.a,{id:"outlined-multiline-flexible",label:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430.",multiline:!0,fullWidth:!0,maxRows:4,value:t,onChange:function(e){i(e.target.value)}})})},G=function(e){var t=e.title,i=e.setTitle;return Object(b.jsx)(N.a,{component:"form",fullWidth:!0,noValidate:!0,autoComplete:"off",mt:"20px",children:Object(b.jsx)(U.a,{id:"outlined-multiline-flexible",label:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0430\u0448\u043e\u0457 \u043f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u0457.",fullWidth:!0,maxRows:4,value:t,onChange:function(e){i(e.target.value)}})})},R=i(7),z=i(194),B=i(179),W=i(196),L=i(197),H=Object(R.a)("input")({display:"none"}),K=function(e){var t=e.selectedFile,i=e.setSelectedFile;return Object(b.jsxs)(B.a,{direction:"column",alignItems:"center",spacing:2,mt:"20px",children:[Object(b.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(b.jsx)(H,{accept:"image/*",id:"icon-button-file",type:"file",multiple:!0,onChange:function(e){if(e.target.files.length>1){for(var t=[],c=0;c<e.target.files.length;c++)t.push(URL.createObjectURL(e.target.files[c]));i(t)}}}),Object(b.jsx)(z.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(b.jsx)(C.a,{})})]}),!!t.length&&Object(b.jsx)(W.a,{cols:4,rowHeight:164,children:t.map((function(e,t){return Object(b.jsx)(L.a,{children:Object(b.jsx)("img",{src:e,alt:""})},t)}))})]})},T=function(e){var t=e.price,i=e.setPrice;return Object(b.jsx)(N.a,{children:Object(b.jsx)(U.a,{id:"outlined-number",label:"\u0426\u0456\u043d\u0430",type:"number",value:t,onChange:function(e){e.target.value>=0&&i(e.target.value)},InputLabelProps:{shrink:!0}})})},E=i(59),M=i(60),J=i.n(M),V=function(e){var t=e.address,i=e.setAddress,c=(e.coordinates,e.setCoordinates),r=function(){var e=Object(o.a)(Object(a.a)().mark((function e(t){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.geocodeByAddress)(t);case 2:return r=e.sent,e.next=5,Object(M.getLatLng)(r[0]);case 5:s=e.sent,i(t),c(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(N.a,{component:"form",fullWidth:!0,mt:"20px",children:Object(b.jsx)(J.a,{value:t,onChange:i,onSelect:r,searchOptions:{types:["address"]},children:function(e){var t=e.getInputProps,i=e.suggestions,c=e.getSuggestionItemProps,r=e.loading;return Object(b.jsxs)("div",{children:[Object(b.jsx)(U.a,Object(E.a)({id:"outlined-multiline-flexible",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0432\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0430\u0448\u043e\u0457 \u043d\u0435\u0440\u0443\u0445\u043e\u043c\u043e\u0441\u0442\u0456",fullWidth:!0},t({placeholder:"\u0413\u043e\u043b\u043e\u0441\u0456\u0457\u0432\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, 112, \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 61, \u041a\u0438\u0457\u0432, \u0423\u043a\u0440\u0430\u0457\u043d\u0430"}))),Object(b.jsxs)("div",{children:[r?Object(b.jsx)("div",{children:"...loading"}):null,i.map((function(e){var t={backgroundColor:e.active?"#41b6e6":"#fff"};return Object(b.jsx)("div",Object(E.a)(Object(E.a)({},c(e,{style:t})),{},{children:e.description}))}))]})]})}})})},Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Z=function(e){var t=e.offerData,i=e.setOfferData,c=r.a.useState(!1),s=Object(l.a)(c,2),n=s[0],a=s[1],o=r.a.useState(""),d=Object(l.a)(o,2),u=d[0],j=d[1],f=r.a.useState(""),p=Object(l.a)(f,2),O=p[0],m=p[1],g=r.a.useState([]),h=Object(l.a)(g,2),x=h[0],v=h[1],_=r.a.useState(0),C=Object(l.a)(_,2),y=C[0],D=C[1],I=r.a.useState([{id:1,title:"Flat"}]),U=Object(l.a)(I,2),R=U[0],z=U[1],B=r.a.useState(""),W=Object(l.a)(B,2),L=W[0],H=W[1],E=r.a.useState({lat:null,lng:null}),M=Object(l.a)(E,2),J=M[0],Z=M[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k.a,{onClick:function(){return a(!0)},children:"\u0417\u0434\u0430\u0442\u0438 \u0432 \u043e\u0440\u0435\u043d\u0434\u0443"}),Object(b.jsx)(F.a,{open:n,onClose:function(){return a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(b.jsxs)(N.a,{sx:Q,children:[Object(b.jsx)(w.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0412\u0430\u0448\u0435 \u043c\u0430\u0439\u043d\u043e"}),Object(b.jsxs)(N.a,{display:"flex",justifyContent:"center",alignItems:"center",mt:"10px",gap:"10px",children:[Object(b.jsx)(A,{categories:R,"set\u0421ategories":z}),Object(b.jsx)(T,{price:y,setPrice:D})]}),Object(b.jsx)(G,{title:u,setTitle:j}),Object(b.jsx)(V,{address:L,setAddress:H,coordinates:J,setCoordinates:Z}),Object(b.jsx)(K,{selectedFile:x,setSelectedFile:v}),Object(b.jsx)(P,{description:O,setDescription:m}),Object(b.jsx)(k.a,{variant:"text",onClick:function(){i([].concat(Object(S.a)(t),[{categories:[{id:R.id,title:R.title}],description:O,geometries:[{coordinates:[J.lng,J.lat]}],id:Date.now(),title:u,img:x,price:y}])),a(!1)},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u044e"})]})})]})},q=function(e){var t=e.offerData,i=e.setOfferData,r=Object(c.useState)("UA"),s=Object(l.a)(r,2),n=s[0],a=s[1],o=Object(c.useState)("UAH"),d=Object(l.a)(o,2),u=d[0],j=d[1];return Object(b.jsxs)("div",{className:"wrapper__header",children:[Object(b.jsx)("div",{className:"container__header_l"}),Object(b.jsxs)("div",{className:"container__header",children:[Object(b.jsx)("div",{className:"header__icon",children:Object(b.jsx)("img",{src:y,alt:"Gup"})}),Object(b.jsx)("div",{className:"header__title",children:Object(b.jsxs)("h3",{children:["\u041f\u043e\u0440\u0442\u0430\u043b \u043e\u0440\u0435\u043d\u0434\u0438 \u0442\u0430 \u043f\u0440\u043e\u043a\u0430\u0442\u0443 ",Object(b.jsx)("br",{}),"\u0442\u043e\u0432\u0430\u0440\u0456\u0432 \u0442\u0430 \u043f\u043e\u0441\u043b\u0443\u0433"]})}),Object(b.jsxs)("div",{className:"header__box",children:[Object(b.jsx)("div",{className:"addOffer",children:Object(b.jsx)(Z,{offerData:t,setOfferData:i})}),Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(C.b,{}),Object(b.jsx)("span",{children:"\u0423\u0432\u0456\u0439\u0442\u0438"})]}),Object(b.jsx)("div",{className:"language",children:Object(b.jsxs)(_.a,{value:n,onChange:function(e){a(e.target.value)},sx:{color:"white",border:"none"},children:[Object(b.jsx)(v.a,{value:"UA",children:"UA"}),Object(b.jsx)(v.a,{value:"EN",children:"EN"})]})}),Object(b.jsx)("div",{className:"currency",children:Object(b.jsxs)(_.a,{value:u,onChange:function(e){j(e.target.value)},sx:{color:"white"},children:[Object(b.jsx)(v.a,{value:"UAH",children:"UAH"}),Object(b.jsx)(v.a,{value:"USD",children:"USD"}),Object(b.jsx)(v.a,{value:"EUR",children:"EUR"})]})})]})]}),Object(b.jsx)("div",{className:"container__header_r"})]})},X=(i(135),function(){return Object(b.jsx)("div",{className:"container__loader",children:Object(b.jsx)("div",{className:"loader"})})}),Y=i.p+"static/media/1.42854f70.jfif",$=i.p+"static/media/2.ca08ea64.jfif",ee=i.p+"static/media/3.138403bd.jfif",te=i.p+"static/media/4.b438c8e7.jfif",ie=[{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.475630442075985,50.38158237425836]}],id:1,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.487163901532472,50.38570359135827]}],id:2,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.50014600836784,50.39170713736931]}],id:3,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.51271983799492,50.40054287551477]}],id:4,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.52271983799492,50.41054287551477]}],id:5,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.53271983799492,50.42054287551477]}],id:6,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.54271983799492,50.43054287551477]}],id:7,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.55271983799492,50.44054287551477]}],id:8,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.55271983799492,50.44554287551477]}],id:9,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750},{categories:[{id:1,title:"Flat"}],description:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0437 \u0443\u0441\u0456\u043c\u0430 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438",geometries:[{coordinates:[30.45271983799492,50.44554287551477]}],id:10,title:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0456\u0437 \u043a\u0440\u0430\u0454\u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u0433\u0443",img:[Y,$,ee,te],price:750}];var ce=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),i=t[0],r=t[1],s=Object(c.useState)([]),n=Object(l.a)(s,2),d=n[0],u=n[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),u(ie),r(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{offerData:d,setOfferData:u}),i?Object(b.jsx)(X,{}):Object(b.jsx)(x,{offerData:d})]})};n.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ce,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.2dcddc8d.chunk.js.map