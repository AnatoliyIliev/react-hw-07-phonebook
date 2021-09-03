(this["webpackJsonpreact-hw-07-phonebook"]=this["webpackJsonpreact-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={button:"ContactForm_button__1Y0hS",form:"ContactForm_form__wHAEd",labelName:"ContactForm_labelName__CChYw",labelNumber:"ContactForm_labelNumber__65wS_"}},23:function(t,e,n){t.exports={contactList:"ContactList_contactList__jHxWL",contactList_items:"ContactList_contactList_items__3xksy"}},36:function(t,e,n){t.exports={labelName:"Filter_labelName__3Fmra"}},37:function(t,e,n){},48:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(0),u=n.n(o),i=n(16),s=n.n(i),b=n(39),l=n(9),j=n(20),d=n(3),f=n(35),O=n.n(f),m=n(10),h=n(4),C=n(8),x=Object(d.b)("contacts/fetchContactRequest"),p=Object(d.b)("contacts/fetchContactSuccess"),g=Object(d.b)("contacts/fetchContactError"),_=Object(d.b)("contacts/addContactRequest"),v=Object(d.b)("contacts/addContactSuccess"),N=Object(d.b)("contacts/addContactError"),L=Object(d.b)("contacts/addContactRequest"),y=Object(d.b)("contacts/addContactSuccess"),F=Object(d.b)("contacts/addContactError"),w=Object(d.b)("contacts/changeFilter"),S=Object(d.c)([],(c={},Object(h.a)(c,p,(function(t,e){return e.payload})),Object(h.a)(c,v,(function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):[].concat(Object(j.a)(t),[n])})),Object(h.a)(c,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),k=Object(d.c)(!1,(a={},Object(h.a)(a,x,(function(){return!0})),Object(h.a)(a,p,(function(){return!1})),Object(h.a)(a,g,(function(){return!1})),Object(h.a)(a,_,(function(){return!0})),Object(h.a)(a,v,(function(){return!1})),Object(h.a)(a,N,(function(){return!1})),Object(h.a)(a,L,(function(){return!0})),Object(h.a)(a,y,(function(){return!1})),Object(h.a)(a,F,(function(){return!1})),a)),A=Object(d.c)("",Object(h.a)({},w,(function(t,e){return e.payload}))),D=Object(d.c)(null,(r={},Object(h.a)(r,N,(function(t,e){return e.payload})),Object(h.a)(r,F,(function(t,e){return e.payload})),Object(h.a)(r,g,(function(t,e){return e.payload})),r)),q=Object(C.b)({items:S,filter:A,loading:k,error:D}),z=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[O.a]),E=Object(d.a)({reducer:{contacts:q},middleware:z,devTools:!1}),R=(n(47),n(48),n(25)),J=n(71),T=n(14),Z=n.n(T),B=n(15),H=n.n(B);H.a.defaults.baseURL="http://localhost:4040";var M=function(t,e){return function(n){var c={name:t,number:e};n(_()),H.a.post("/contacts",c).then((function(t){var e=t.data;return n(v(e))})).catch((function(t){return n(N(t))}))}},V=function(t){return function(e){e(L()),H.a.delete("/contacts/".concat(t)).then((function(){return e(y(t))})).catch((function(t){return e(F(t))}))}},Y=n(18),I=function(t){return t.contacts.filter},P={getLoading:function(t){return t.contacts.loading},getFilter:I,getVisibleContacts:Object(Y.a)([function(t){return t.contacts.items},I],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},U=n(1);var W=Object(l.b)((function(t){return{isLoadingContacts:P.getLoading(t)}}),(function(t){return{onSubmit:function(e,n){return t(M(e,n))}}}))((function(t){var e=t.onSubmit,n=t.isLoadingContacts,c=Object(o.useState)(""),a=Object(R.a)(c,2),r=a[0],u=a[1],i=Object(o.useState)(""),s=Object(R.a)(i,2),b=s[0],l=s[1],j=Object(J.a)(),d=Object(J.a)(),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":l(c);break;default:return}},O=function(){u(""),l("")};return Object(U.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault(),e(r,b),O()},children:[Object(U.jsxs)("label",{className:Z.a.labelName,htmlFor:j,children:["Name",Object(U.jsx)("input",{type:"text",value:r,onChange:f,id:j,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(U.jsxs)("label",{className:Z.a.labelNumber,htmlFor:d,children:["Number",Object(U.jsx)("input",{type:"tel",value:b,onChange:f,id:d,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(U.jsx)("button",{className:Z.a.button,tupe:"submit",children:"Add contact"}),n&&Object(U.jsx)("h2",{children:"Loading..."})]})})),$=n(36),G=n.n($),K=Object(l.b)((function(t){return{value:P.getFilter(t)}}),(function(t){return{onChange:function(e){return t(w(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(U.jsxs)("label",{className:G.a.labelName,children:["Find contacts by name",Object(U.jsx)("input",{type:"text",value:e,onChange:n})]})})),Q=n(37),X=n.n(Q),tt=function(t){var e=t.name,n=t.number,c=t.onDeleteContact;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("span",{className:X.a.ContactList_name,children:[e,": ",n]}),Object(U.jsx)("button",{onClick:c,children:"Delete"})]})},et=n(23),nt=n.n(et),ct=Object(l.b)((function(t){return{contacts:P.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(V(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("ul",{className:nt.a.contactList,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(U.jsx)("li",{className:nt.a.contactList_items,children:Object(U.jsx)(tt,{name:e,number:c,onDeleteContact:function(){return n(a)}})},a)}))})})}));var at=function(){return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:"Phonebook"}),Object(U.jsx)(W,{}),Object(U.jsx)("h2",{children:"Contacts"}),Object(U.jsx)(K,{}),Object(U.jsx)(ct,{})]})};s.a.render(Object(U.jsx)(u.a.StrictMode,{children:Object(U.jsx)(l.a,{store:E,children:Object(U.jsx)(b.a,{children:Object(U.jsx)(at,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.93a49b25.chunk.js.map