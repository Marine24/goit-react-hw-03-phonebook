(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports={listBtn:"ContactItem_listBtn__23lin",contactItem:"ContactItem_contactItem__5eHQm",contact:"ContactItem_contact__3ZUAd"}},function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3",formBtn:"ContactForm_formBtn__1YZTU"}},function(t,e,n){t.exports={contactItem:"ContactList_contactItem__EQAbQ",contactList:"ContactList_contactList__3MzlG"}},function(t,e,n){t.exports={title:"Filter_title__mtLuE",filterInput:"Filter_filterInput__u16Kg"}},,,function(t,e,n){t.exports={title:"App_title__1YcTA"}},,,function(t,e,n){t.exports=n(24)},,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),i=n(16),l=n(2),s=n(3),m=n(6),u=n(4),f=n(7),d=n(1),p=n.n(d),h=n(14),b=n.n(h),C=n(15),_=n(5),v=n(9),E=n.n(v),g=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(_.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(C.a)({},n.state)),n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.contactForm},c.a.createElement("label",{htmlFor:p()()},"Name",c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange})),c.a.createElement("label",{htmlFor:p()()},"Number",c.a.createElement("input",{type:"text",placeholder:"Enter phone number",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:E.a.formBtn},"Add contact"))}}]),e}(a.Component),y=n(8),O=n.n(y),N=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("div",{className:O.a.contactItem},c.a.createElement("p",{className:O.a.contact},e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:O.a.listBtn},"Delete"))},j=n(10),F=n.n(j),I=function(t){var e=t.items,n=t.onDeleteContact;return c.a.createElement("ul",{className:F.a.contactList},e.map((function(t){return c.a.createElement("li",{key:t.id,className:F.a.contactItem},c.a.createElement(N,{name:t.name,number:t.number,onDeleteContact:function(){return n(t.id)}}))})))};I.defaultProps={items:[]};var S=I,A=n(11),L=n.n(A),k=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:L.a.title},"Find contacts by name..."),c.a.createElement("input",{className:L.a.filterInput,type:"text",placeholder:"Type to filter...",value:e,onChange:n}))},x=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.filterContacts=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){var e=t.name,a=t.number,c=n.state.contacts,r={name:e,number:a,id:p()()};if(e&&a)if(!isNaN(a)&&isNaN(e)){if(c.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return void alert("".concat(e," is already in your contacts"));n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[r])}}))}else alert("One of the fields is incorrect!");else alert("One of the fields is empty! Please fill all the fields!")},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.filterContacts(e,n);return c.a.createElement("div",null,c.a.createElement("h2",{className:b.a.title},"Phonebook"),c.a.createElement(g,{onAddContact:this.addContact}),c.a.createElement(k,{value:n,onChangeFilter:this.changeFilter}),c.a.createElement(S,{items:a,onDeleteContact:this.deleteContact,id:p()()}))}}]),e}(a.Component);o.a.render(c.a.createElement(x,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e741baee.chunk.js.map