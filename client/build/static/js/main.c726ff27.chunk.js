(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},34:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},35:function(e,t,a){e.exports=a.p+"static/media/cart.8bf1af37.svg"},42:function(e,t,a){e.exports=a(76)},47:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(47),a(5)),u=a(2),i=a.n(u),s=a(4),m=a(1),d=a(3),p=a.n(d);var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),E=b[0],f=b[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),g=h[0],O=h[1],j=Object(n.useState)(""),y=Object(m.a)(j,2),x=y[0],k=y[1],w=Object(n.useState)(1),C=Object(m.a)(w,2),A=C[0],_=C[1],P=Object(n.useState)(0),S=Object(m.a)(P,2),N=S[0],I=S[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/products?limit=".concat(9*A,"&").concat(E,"&").concat(g,"&title[regex]=").concat(x));case 2:t=e.sent,r(t.data.products),I(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,E,g,x,A]),{products:[a,r],callback:[o,u],category:[E,f],sort:[g,O],search:[x,k],page:[A,_],result:[N,I]}},E=a(7),f=a(13);var v=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],d=o[1],b=Object(n.useState)([]),v=Object(m.a)(b,2),h=v[0],g=v[1],O=Object(n.useState)([]),j=Object(m.a)(O,2),y=j[0],x=j[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),1===a.data.role?d(!0):d(!1),g(a.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var k=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue buying"));case 2:if(!h.every((function(e){return e._id!==a._id}))){t.next=9;break}return g([].concat(Object(f.a)(h),[Object(E.a)(Object(E.a)({},a),{},{quantity:1})])),t.next=7,p.a.patch("/user/addcart",{cart:[].concat(Object(f.a)(h),[Object(E.a)(Object(E.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This product has been added to cart.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[u,d],cart:[h,g],addCart:k,history:[y,x]}};var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),{categories:[a,r],callback:[o,u]}},g=Object(n.createContext)(),O=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/refresh_token");case 2:a=t.sent,o(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var u={token:[l,o],productsAPI:b(),userAPI:v(l),categoriesAPI:h()};return r.a.createElement(g.Provider,{value:u},t)},j=a(33),y=a.n(j),x=a(34),k=a.n(x),w=a(35),C=a.n(w);var A=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=Object(m.a)(e.userAPI.cart,1)[0],l=Object(n.useState)(!1),u=Object(m.a)(l,2),d=u[0],b=u[1],E=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={left:d?0:"-100%"};return r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return b(!d)}},r.a.createElement("img",{src:y.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},a?"Admin":"DevAT Shop"))),r.a.createElement("ul",{style:f},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},a?"Products":"Shop")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/create_product"},"Create Product")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/category"},"Categories"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:E},"Logout"))):r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login \u2725 Register")),r.a.createElement("li",{onClick:function(){return b(!d)}},r.a.createElement("img",{src:k.a,alt:"",width:"30",className:"menu"}))),a?"":r.a.createElement("div",{className:"cart-icon"},r.a.createElement("span",null,c.length),r.a.createElement(o.b,{to:"/cart"},r.a.createElement("img",{src:C.a,alt:"",width:"30"}))))},_=a(6);var P=function(e){var t=e.product,a=e.deleteProduct,c=Object(n.useContext)(g),l=Object(m.a)(c.userAPI.isAdmin,1)[0],u=c.userAPI.addCart;return r.a.createElement("div",{className:"row_btn"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Delete"),r.a.createElement(o.b,{id:"btn_view",to:"/edit_product/".concat(t._id)},"Edit")):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return u(t)}},"Buy"),r.a.createElement(o.b,{id:"btn_view",to:"/detail/".concat(t._id)},"View")))};var S=function(e){var t=e.product,a=e.isAdmin,n=e.deleteProduct,c=e.handleCheck;return r.a.createElement("div",{className:"product_card"},a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"$",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(P,{product:t,deleteProduct:n}))};a(71);var N=function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null))))))))))};var I=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.productsAPI.category,2),c=a[0],l=a[1],o=Object(m.a)(e.productsAPI.sort,2),u=o[0],i=o[1],s=Object(m.a)(e.productsAPI.search,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Filters: "),r.a.createElement("select",{name:"category",value:c,onChange:function(e){l(e.target.value),p("")}},r.a.createElement("option",{value:""},"All Products"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("input",{type:"text",value:d,placeholder:"Enter your search!",onChange:function(e){return p(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"Sort By: "),r.a.createElement("select",{value:u,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:""},"Newest"),r.a.createElement("option",{value:"sort=oldest"},"Oldest"),r.a.createElement("option",{value:"sort=-sold"},"Best sales"),r.a.createElement("option",{value:"sort=-price"},"Price: Hight-Low"),r.a.createElement("option",{value:"sort=price"},"Price: Low-Hight"))))};var D=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var q=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],o=Object(m.a)(e.token,1)[0],u=Object(m.a)(e.productsAPI.callback,2),d=u[0],b=u[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),h=v[0],O=v[1],j=Object(n.useState)(!1),y=Object(m.a)(j,2),x=y[0],k=y[1],w=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(f.a)(a))},C=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:o}}),r=p.a.delete("/api/products/".concat(t),{headers:{Authorization:o}}),e.next=6,n;case 6:return e.next=8,r;case 8:b(!d),O(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return h?r.a.createElement("div",null,r.a.createElement(N,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"Select all"),r.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){a.forEach((function(e){e.checked=!x})),c(Object(f.a)(a)),k(!x)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&C(e._id,e.images.public_id)}))}},"Delete ALL")),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(S,{key:e._id,product:e,isAdmin:l,deleteProduct:C,handleCheck:w})}))),r.a.createElement(D,null),0===a.length&&r.a.createElement(N,null))};var z=function(){var e=Object(_.g)(),t=Object(n.useContext)(g),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),u=Object(m.a)(l,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),0===i.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:i.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,i.title),r.a.createElement("h6",null,"#id: ",i.product_id)),r.a.createElement("span",null,"$ ",i.price),r.a.createElement("p",null,i.description),r.a.createElement("p",null,i.content),r.a.createElement("p",null,"Sold: ",i.sold),r.a.createElement(o.b,{to:"/cart",className:"cart",onClick:function(){return c(i)}},"Buy Now"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Related products"),r.a.createElement("div",{className:"products"},a.map((function(e){return e.category===i.category?r.a.createElement(S,{key:e._id,product:e}):null})))))},L=a(14);var F=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(E.a)(Object(E.a)({},a),{},Object(L.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/login",Object(E.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(o.b,{to:"/register"},"Register"))))};var T=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(E.a)(Object(E.a)({},a),{},Object(L.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/register",Object(E.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(o.b,{to:"/login"},"Login"))))};var U=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){u&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=7;break}return e.next=3,p.a.get("/api/payment",{headers:{Authorization:u}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,p.a.get("/user/history",{headers:{Authorization:u}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,l,c]),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"History"),r.a.createElement("h4",null,"You have ",a.length," ordered"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Purchased"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/history/".concat(e._id)},"View")))})))))};var R=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(_.g)();return Object(n.useEffect)((function(){u.id&&t.forEach((function(e){e._id===u.id&&o(e)}))}),[u.id,t]),0===l.length?null:r.a.createElement("div",{className:"history-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Country Code"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.address.recipient_name),r.a.createElement("td",null,l.address.line1+" - "+l.address.city),r.a.createElement("td",null,l.address.postal_code),r.a.createElement("td",null,l.address.country_code)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,l.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"$ ",e.price*e.quantity))})))))},Y=a(37),H=a(38),B=a(41),$=a(40),J=a(39),X=a.n(J),V=function(e){Object(B.a)(a,e);var t=Object($.a)(a);function a(){return Object(Y.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(X.a,{env:"sandbox",client:{sandbox:"YOUR-sandbox-APP-ID",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),a}(r.a.Component);var W=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],o=Object(n.useState)(0),u=Object(m.a)(o,2),d=u[0],b=u[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);b(e)}()}),[a]);var E=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,r=t.address,e.next=3,p.a.post("/api/payment",{cart:a,paymentID:n,address:r},{headers:{Authorization:l}});case 3:c([]),E([]),alert("You have successfully placed an order.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Cart Empty"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"$ ",e.price*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(f.a)(a)),void E(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.quantity+=1)})),c(Object(f.a)(a)),void E(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(a.forEach((function(e,n){e._id===t&&a.splice(n,1)})),c(Object(f.a)(a)),E(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total: $ ",d),r.a.createElement(V,{total:d,tranSuccess:v})))};var Q=function(){return r.a.createElement("div",null,"404 | Not Found")};var G=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.categoriesAPI.callback,2),b=d[0],E=d[1],f=Object(n.useState)(!1),v=Object(m.a)(f,2),h=v[0],O=v[1],j=Object(n.useState)(""),y=Object(m.a)(j,2),x=y[0],k=y[1],w=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=9;break}return e.next=5,p.a.put("/api/category/".concat(x),{name:l},{headers:{Authorization:u}});case 5:a=e.sent,alert(a.data.msg),e.next=13;break;case 9:return e.next=11,p.a.post("/api/category",{name:l},{headers:{Authorization:u}});case 11:n=e.sent,alert(n.data.msg);case 13:O(!1),o(""),E(!b),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),o(a),O(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/category/".concat(t),{headers:{Authorization:u}});case 3:a=e.sent,alert(a.data.msg),E(!b),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:w},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:l,required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit"},h?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return C(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return A(e._id)}},"Delete")))}))))},K={product_id:"",title:"",price:0,description:"How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",category:"",_id:""};var M=function(){var e=Object(n.useContext)(g),t=Object(n.useState)(K),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(m.a)(e.categoriesAPI.categories,1)[0],u=Object(n.useState)(!1),d=Object(m.a)(u,2),b=d[0],f=d[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),O=h[0],j=h[1],y=Object(m.a)(e.userAPI.isAdmin,1)[0],x=Object(m.a)(e.token,1)[0],k=Object(_.f)(),w=Object(_.g)(),C=Object(m.a)(e.productsAPI.products,1)[0],A=Object(n.useState)(!1),P=Object(m.a)(A,2),S=P[0],I=P[1],D=Object(m.a)(e.productsAPI.callback,2),q=D[0],z=D[1];Object(n.useEffect)((function(){w.id?(I(!0),C.forEach((function(e){e._id===w.id&&(l(e),f(e.images))}))):(I(!1),l(K),f(!1))}),[w.id,C]);var F=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("File not exist."));case 7:if(!(a.size>1048576)){e.next=9;break}return e.abrupt("return",alert("Size too large!"));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",alert("File format is incorrect."));case 11:return(n=new FormData).append("file",a),j(!0),e.next=16,p.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:x}});case 16:r=e.sent,j(!1),f(r.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=3;break}return e.abrupt("return",alert("You're not an admin"));case 3:return j(!0),e.next=6,p.a.post("/api/destroy",{public_id:b.public_id},{headers:{Authorization:x}});case 6:j(!1),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){var t=e.target,a=t.name,n=t.value;l(Object(E.a)(Object(E.a)({},c),{},Object(L.a)({},a,n)))},R=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(b){e.next=6;break}return e.abrupt("return",alert("No Image Upload"));case 6:if(!S){e.next=11;break}return e.next=9,p.a.put("/api/products/".concat(c._id),Object(E.a)(Object(E.a)({},c),{},{images:b}),{headers:{Authorization:x}});case 9:e.next=13;break;case 11:return e.next=13,p.a.post("/api/products",Object(E.a)(Object(E.a)({},c),{},{images:b}),{headers:{Authorization:x}});case 13:z(!q),k.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),Y={display:b?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),O?r.a.createElement("div",{id:"file_img"},r.a.createElement(N,null)):r.a.createElement("div",{id:"file_img",style:Y},r.a.createElement("img",{src:b?b.url:"",alt:""}),r.a.createElement("span",{onClick:T},"X"))),r.a.createElement("form",{onSubmit:R},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"product_id"},"Product ID"),r.a.createElement("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:c.product_id,onChange:U,disabled:S})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:U})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:U})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:U})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:U})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"Categories: "),r.a.createElement("select",{name:"category",value:c.category,onChange:U},r.a.createElement("option",{value:""},"Please select a category"),o.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("button",{type:"submit"},S?"Update":"Create")))};var Z=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:q}),r.a.createElement(_.a,{path:"/detail/:id",exact:!0,component:z}),r.a.createElement(_.a,{path:"/login",exact:!0,component:t?Q:F}),r.a.createElement(_.a,{path:"/register",exact:!0,component:t?Q:T}),r.a.createElement(_.a,{path:"/category",exact:!0,component:a?G:Q}),r.a.createElement(_.a,{path:"/create_product",exact:!0,component:a?M:Q}),r.a.createElement(_.a,{path:"/edit_product/:id",exact:!0,component:a?M:Q}),r.a.createElement(_.a,{path:"/history",exact:!0,component:t?U:Q}),r.a.createElement(_.a,{path:"/history/:id",exact:!0,component:t?R:Q}),r.a.createElement(_.a,{path:"/cart",exact:!0,component:W}),r.a.createElement(_.a,{path:"*",exact:!0,component:Q}))};var ee=function(){return r.a.createElement(O,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(Z,null))))};l.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c726ff27.chunk.js.map