_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{ACD1:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"f",(function(){return s}));var a="ADD_TO_CART",c="REMOVE_ITEM",r="SUB_QUANTITY",u="ADD_QUANTITY",o="ADD_SHIPPING",i="ADD_QUANTITY_WITH_NUMBER",s="RESET_CART"},Nxmy:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return s}));var a=n("ACD1"),c=function(t){return{type:a.d,id:t}},r=function(t){return{type:a.e,id:t}},u=function(t){return{type:a.g,id:t}},o=function(t){return{type:a.a,id:t}},i=function(t,e){return{type:a.b,id:t,qty:e}},s=function(){return{type:a.f}}},YQMk:function(t,e,n){"use strict";n.r(e);var a=n("1OyB"),c=n("vuIU"),r=n("Ji7U"),u=n("md7G"),o=n("foSv"),i=n("q1tI"),s=n.n(i),l=n("pFRj"),p=n("g7ta"),f=s.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var m=function(t){Object(r.a)(n,t);var e=d(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return f("section",{className:"page-title-banner"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-lg-12"},f("h2",null,"Cart")))),f("div",{className:"shape1"},f("img",{src:"/images/shape1.png",alt:"img"})),f("div",{className:"shape2"},f("img",{src:"/images/shape2.png",alt:"img"})),f("div",{className:"shape3"},f("img",{src:"/images/shape3.png",alt:"img"})),f("div",{className:"shape6"},f("img",{src:"/images/shape6.png",alt:"img"})),f("div",{className:"shape8 rotateme"},f("img",{src:"/images/shape8.svg",alt:"shape"})),f("div",{className:"shape9"},f("img",{src:"/images/shape9.svg",alt:"shape"})))}}]),n}(i.Component),h=n("JX7q"),b=n("rePB"),v=n("YFqc"),y=n.n(v),N=n("/MKj"),g=n("Nxmy"),O=s.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var R=function(t){Object(r.a)(n,t);var e=j(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),u=0;u<c;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r)),Object(b.a)(Object(h.a)(t),"handleRemove",(function(e){t.props.removeItem(e)})),Object(b.a)(Object(h.a)(t),"handleAddQuantity",(function(e){t.props.addQuantity(e)})),Object(b.a)(Object(h.a)(t),"handleSubtractQuantity",(function(e){t.props.subtractQuantity(e)})),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props.products.length?this.props.products.map((function(e,n){return O("tr",{key:n},O("td",{className:"product-thumbnail"},O("a",{href:"#"},O("img",{src:e.image,alt:"item"}))),O("td",{className:"product-name"},O(y.a,{href:"#"},O("a",null,e.title))),O("td",{className:"product-price"},O("span",{className:"unit-amount"},"$",e.price)),O("td",{className:"product-quantity"},O("div",{className:"input-counter"},O("span",{className:"minus-btn",onClick:function(){t.handleSubtractQuantity(e.id)}},O("i",{className:"icofont-minus"})),O("input",{type:"text",className:"form-control",value:e.quantity,min:"1",max:10,readOnly:!0,onChange:function(t){return t}}),O("span",{className:"plus-btn",onClick:function(){t.handleAddQuantity(e.id)}},O("i",{className:"icofont-plus"})))),O("td",{className:"product-subtotal"},O("span",{className:"subtotal-amount"},"$",e.price*e.quantity)),O("td",{className:"product-remove"},O(y.a,{href:"#"},O("a",{onClick:function(n){n.preventDefault(),t.handleRemove(e.id)}},O("i",{className:"icofont-ui-delete"})))))})):O("tr",null,O("td",{className:"product-thumbnail"},O("p",null,"Empty.")));return O("section",{className:"cart-area ptb-100"},O("div",{className:"container"},O("div",{className:"row"},O("div",{className:"col-lg-12 col-md-12"},O("form",null,O("div",{className:"cart-table table-responsive"},O("table",{className:"table table-bordered"},O("thead",null,O("tr",null,O("th",{scope:"col"},"Product"),O("th",{scope:"col"},"Name"),O("th",{scope:"col"},"Unit Price"),O("th",{scope:"col"},"Quantity"),O("th",{scope:"col"},"Total"),O("th",{scope:"col"},"Remove"))),O("tbody",null,e))),O("div",{className:"cart-buttons"},O("div",{className:"row h-100 justify-content-center align-items-center"},O("div",{className:"col-lg-5 col-md-5"},O("div",{className:"coupon-box"},O("input",{type:"text",className:"form-control",placeholder:"Coupon Code"}),O("button",{type:"submit"},"Apply Coupon Code"))),O("div",{className:"col-lg-7 col-md-7"},O("div",{className:"cart-totals"},O("h3",null,"Cart Totals"),O("ul",null,O("li",null,"Subtotal: ",O("span",null,"$",this.props.total)),O("li",null,"Total: ",O("span",null,"$",this.props.total))),O(y.a,{href:"/checkout"},O("a",{className:"btn btn-primary"},"Proceed to Checkout")))))))))))}}]),n}(i.Component),_=Object(N.b)((function(t){return{products:t.addedItems,total:t.total}}),(function(t){return{removeItem:function(e){t(Object(g.d)(e))},addQuantity:function(e){t(Object(g.a)(e))},subtractQuantity:function(e){t(Object(g.f)(e))}}}))(R),C=s.a.createElement;function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var T=function(t){Object(r.a)(n,t);var e=D(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return C(s.a.Fragment,null,C(l.a,null),C(m,null),C(_,null),C(p.a,null))}}]),n}(i.Component);e.default=T},ahkM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n("YQMk")}])}},[["ahkM",0,1,2,3,5]]]);