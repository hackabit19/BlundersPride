(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(141)},107:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},132:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(107),a(17)),l=a(18),c=a(20),m=a(19),p=a(21),g=a(196),u=a(5),h=a(39),d=a(40),f=a(15),b=a.n(f),E=a(76),v=a.n(E),C=(a(127),a(186)),w=a(188),y=a(189),x=a(187),j=(a(128),function(e){return r.a.createElement("div",{className:"inertia-logo"},r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Light")))}),N=a(142),O=a(185),k=Object(N.a)({root:{color:"#FF3D00",borderColor:"#FF3D00","&:hover":{color:"white",borderColor:"#F66604",backgroundColor:"#F66604"}}})(O.a),B=(Object(N.a)({root:{color:"388E3C",borderColor:"#white",padding:"0px",borderRadius:"50px","&:hover":{color:"white",borderColor:"#4CAF50",backgroundColor:"#4CAF50"}}})(O.a),Object(N.a)({root:{color:"#BDBDBD","&:hover":{color:"white"}}})(O.a)),A=function(e){return e.children},D=(a(132),a(33)),H=a(11),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(){delete b.a.defaults.headers.common.Authorization,localStorage.removeItem("jwt"),window.location.href="/"},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(A,null,r.a.createElement(d.b,{to:"/login",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(B,{disableFocusRipple:!0,color:"inherit"},"Login")),r.a.createElement(d.b,{to:"/register",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(k,{disableFocusRipple:!0,className:e.registerButton,variant:"outlined"},"Register"))),a=null;return"police"===this.props.user.userType&&(a=r.a.createElement(A,null,r.a.createElement(d.b,{to:"/reportMissing",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(B,{disableFocusRipple:!0,color:"inherit"},"Report Missing")))),this.props.isAuth&&(t=r.a.createElement(A,null,a,r.a.createElement(d.b,{to:"/home",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(B,{disableFocusRipple:!0,color:"inherit"},"Home")),r.a.createElement(d.b,{to:"/",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(k,{disableFocusRipple:!0,className:e.registerButton,variant:"outlined",onClick:this.onLogoutClick},"Logout")))),r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{position:"sticky",className:e.appBar},r.a.createElement(x.a,{maxWidth:"lg"},r.a.createElement(w.a,{variant:"dense"},r.a.createElement(y.a,{variant:"h6",className:e.title},r.a.createElement(j,null)),t))))}}]),t}(n.Component),W=Object(u.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{backgroundColor:"rgb(38,50,56)"},search:Object(D.a)({position:"relative",marginRight:e.spacing(3),borderRadius:e.shape.borderRadius,backgroundColor:Object(H.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.c)(e.palette.common.white,.25)},marginLeft:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(S),T=a(144),F=a(193),R=a(190),L=a(191),P=a(147),G=(a(150),a(151),a(148),a(52)),M=a.n(G),I=Object(R.a)(function(e){return{textField:{width:"95%",marginTop:e.spacing(2)},errorText:{marginLeft:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:"220px"},selectEmpty:{marginTop:e.spacing(1),minWidth:"220px",float:"left"}}}),z=function(e){var t=I(),a=e.errormsg;return r.a.createElement(A,null,r.a.createElement(L.a,Object.assign({className:t.textField},e,{error:!M()(a)})),M()(a)?null:r.a.createElement(P.a,{error:!0,className:t.errorText},a))},J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={errors:{},email:"",password:""},a.onChangeHandler=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onClickHandler=function(){var e={email:a.state.email,password:a.state.password};b.a.post("/api/users/login",e).then(function(e){var t=e.data.token;localStorage.setItem("jwt",t),b.a.defaults.headers.common.Authorization=t,window.location.href="/home"}).catch(function(e){return a.setState({errors:e.response.data})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.errors;return r.a.createElement(x.a,{maxWidth:"sm",className:e.container},r.a.createElement(T.a,{elevation:3},r.a.createElement(y.a,{variant:"h4",className:e.title},"Login"),r.a.createElement(F.a,null),r.a.createElement(z,{name:"email",label:"Email",type:"email",margin:"dense",variant:"outlined",value:this.state.email,onChange:this.onChangeHandler,errormsg:t.email}),r.a.createElement(z,{name:"password",label:"Password",type:"password",margin:"dense",variant:"outlined",value:this.state.password,onChange:this.onChangeHandler,errormsg:t.password}),r.a.createElement(O.a,{type:"submit",variant:"outlined",className:e.registerButton,onClick:this.onClickHandler},"Submit")))}}]),t}(n.Component),Q=Object(u.a)(function(e){return{container:{textAlign:"center",minWidth:"320px"},title:{color:"#263338",marginTop:e.spacing(2),marginBottom:e.spacing(1),marginLeft:e.spacing(2),float:"left"},formControl:{margin:e.spacing(1),minWidth:"120px"},selectEmpty:{marginTop:e.spacing(1),minWidth:"120px",float:"left"},registerButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),color:"#35BE34",borderColor:"#35BE34","&:hover":{color:"white",backgroundColor:"#35BE34"}}}})(J),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",confirmPassword:"",userType:"common",city:"",state:"",phoneNumber:"",bloodGroup:"",errors:{}},a.onChangeHandler=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onClickHandler=function(){var e={name:a.state.name,email:a.state.email,password:a.state.password,confirmPassword:a.state.confirmPassword,userType:a.state.userType,city:a.state.city,state:a.state.state,phoneNumber:a.state.phoneNumber,bloodGroup:a.state.bloodGroup};b.a.post("/api/users/register",e).then(function(e){return a.props.history.push("/login")}).catch(function(e){return a.setState({errors:e.response.data})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.errors;return r.a.createElement(x.a,{maxWidth:"sm",className:e.container},r.a.createElement(T.a,{elevation:3},r.a.createElement(y.a,{variant:"h4",className:e.title},"Register"),r.a.createElement(F.a,null),r.a.createElement(z,{name:"name",label:"Name",margin:"dense",variant:"outlined",value:this.state.name,onChange:this.onChangeHandler,errormsg:t.name}),r.a.createElement(z,{name:"email",label:"Email",type:"email",margin:"dense",variant:"outlined",value:this.state.email,onChange:this.onChangeHandler,errormsg:t.email}),r.a.createElement(z,{name:"password",label:"Password",type:"password",margin:"dense",variant:"outlined",value:this.state.password,onChange:this.onChangeHandler,errormsg:t.password}),r.a.createElement(z,{name:"confirmPassword",label:"Confirm Password",type:"password",margin:"dense",variant:"outlined",value:this.state.confirmPassword,onChange:this.onChangeHandler,errormsg:t.confirmPassword}),r.a.createElement(z,{name:"city",label:"City",margin:"dense",variant:"outlined",value:this.state.city,onChange:this.onChangeHandler,errormsg:t.city}),r.a.createElement(z,{name:"state",label:"State",margin:"dense",variant:"outlined",value:this.state.state,onChange:this.onChangeHandler,errormsg:t.state}),r.a.createElement(z,{name:"phoneNumber",label:"Phone Number",margin:"dense",variant:"outlined",value:this.state.phoneNumber,onChange:this.onChangeHandler,errormsg:t.phoneNumber}),r.a.createElement(z,{name:"bloodGroup",label:"Blood Group",margin:"dense",variant:"outlined",value:this.state.bloodGroup,onChange:this.onChangeHandler,errormsg:t.bloodGroup}),r.a.createElement(O.a,{type:"submit",variant:"outlined",className:e.registerButton,onClick:this.onClickHandler},"Submit")))}}]),t}(n.Component),q=Object(u.a)(function(e){return{container:{textAlign:"center",minWidth:"320px"},title:{color:"#263338",marginTop:e.spacing(2),marginBottom:e.spacing(1),marginLeft:e.spacing(2),float:"left"},formControl:{margin:e.spacing(1),minWidth:"120px"},selectEmpty:{marginTop:e.spacing(1),minWidth:"120px",float:"left"},registerButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),color:"#35BE34",borderColor:"#35BE34","&:hover":{color:"white",backgroundColor:"#35BE34"}}}})(_),V=a(194),Z=a(198),$=a(199),K=a(79),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={persons:[],getNotifications:!0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/missingPersons/all").then(function(t){return e.setState({persons:t.data})}).catch(function(e){return console.log(e)});var t=new K.Realtime("0BeZCQ.p_xJxQ:kVy3m7kzD63IqtwN").channels.get("light");t.attach(),t.once("attached",function(){}),t.subscribe(function(t){e.state.getNotifications&&e.props.user.city===t.name&&e.setState(function(e){var a=e.persons;return a.push(t.data),{persons:a.reverse()}})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=null;return this.state.persons.length>0&&(a=this.state.persons.map(function(e,a){return r.a.createElement("a",{key:a,href:"/single/".concat(e._id)},r.a.createElement(T.a,{className:t.paper},r.a.createElement(V.a,{alt:e.imageName,src:e.imageData,className:t.bigAvatar}),r.a.createElement("h3",{className:t.fields},"Name: ",e.name),r.a.createElement("h3",{className:t.fields},"Age: ",e.age),r.a.createElement("h3",{className:t.fields},"Gender: ",e.sex),r.a.createElement("h3",{className:t.fields},"City: ",e.city),r.a.createElement("h3",{className:t.fields},"State: ",e.state),r.a.createElement("h3",{className:t.fields},"Details: ",e.details)))})),r.a.createElement(x.a,{maxWidth:"lg",className:t.container},r.a.createElement("h1",null,"Missing"),r.a.createElement(Z.a,{checked:this.state.getNotifications,label:"Get Notifications",onChange:function(){return e.setState({getNotifications:!e.state.getNotifications})}}),r.a.createElement($.a,null,a))}}]),t}(n.Component),X=Object(u.a)(function(e){return{container:{textAlign:"center",minWidth:"320px"},title:{color:"#263338",marginTop:e.spacing(2),marginBottom:e.spacing(1),marginLeft:e.spacing(2),float:"left"},selectEmpty:{marginTop:e.spacing(1),minWidth:"120px",float:"left"},bigAvatar:{margin:"10px",width:"100px",height:"100px"},paper:{padding:"2px",margin:"5px",width:"100%",display:"flex"},fields:{margin:"10px"}}})(U),Y=a(84),ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",age:"",sex:"",city:"",state:"",details:"",fileName:"",fileData:"",errors:{}},a.onChangeHandler=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onClickHandler=function(){var e=new FormData;e.append("name",a.state.name),e.append("age",a.state.age),e.append("sex",a.state.sex),e.append("state",a.state.state),e.append("city",a.state.city),e.append("details",a.state.details),e.append("imageName",a.state.fileName),e.append("imageData",a.state.fileData),b.a.post("/api/missingPersons/reportMissing",e).then(function(e){console.log("Success!"),a.setState({name:"",age:"",sex:"",city:"",state:"",details:"",fileName:"",fileData:"",errors:{}})}).catch(function(e){return a.setState({errors:e.response.data})})},a.handleFileChange=function(e){a.setState({fileName:"multer-image-"+Date.now(),fileData:e[0]})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.errors;return r.a.createElement(x.a,{maxWidth:"sm",className:e.container},r.a.createElement(T.a,{elevation:3},r.a.createElement(y.a,{variant:"h4",className:e.title},"Report Missing Person"),r.a.createElement(F.a,null),r.a.createElement(z,{name:"name",label:"Name",margin:"dense",variant:"outlined",value:this.state.name,onChange:this.onChangeHandler,errormsg:t.name}),r.a.createElement(z,{name:"age",label:"Age",margin:"dense",variant:"outlined",value:this.state.age,onChange:this.onChangeHandler,errormsg:t.age}),r.a.createElement(z,{name:"sex",label:"Gender",margin:"dense",variant:"outlined",value:this.state.sex,onChange:this.onChangeHandler,errormsg:t.sex}),r.a.createElement(z,{name:"city",label:"City",margin:"dense",variant:"outlined",value:this.state.city,onChange:this.onChangeHandler,errormsg:t.city}),r.a.createElement(z,{name:"state",label:"State",margin:"dense",variant:"outlined",value:this.state.state,onChange:this.onChangeHandler,errormsg:t.state}),r.a.createElement(z,{name:"details",label:"Details",margin:"dense",variant:"outlined",value:this.state.details,onChange:this.onChangeHandler,errormsg:t.details}),r.a.createElement(Y.a,{dropzoneClass:e.dropzone,onChange:this.handleFileChange}),r.a.createElement(O.a,{type:"submit",variant:"outlined",className:e.registerButton,onClick:this.onClickHandler},"Submit")))}}]),t}(n.Component),te=Object(u.a)(function(e){return{container:{textAlign:"center",minWidth:"320px"},title:{color:"#263338",marginTop:e.spacing(2),marginBottom:e.spacing(1),marginLeft:e.spacing(2),float:"left"},formControl:{margin:e.spacing(1),minWidth:"120px"},selectEmpty:{marginTop:e.spacing(1),minWidth:"120px",float:"left"},registerButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),color:"#35BE34",borderColor:"#35BE34","&:hover":{color:"white",backgroundColor:"#35BE34"}}}})(ee),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={person:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/missingPersons/single/".concat(this.props.match.params.id)).then(function(t){return e.setState({person:t.data})}).catch(function(t){return e.setState({person:!1})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.person,a=null;return t&&(console.log(t),a=r.a.createElement(T.a,{className:e.paper},r.a.createElement("img",{alt:t.imageName,src:"/"+t.imageData,className:e.bigAvatar}),r.a.createElement("h3",{className:e.fields},"Name: ",t.name),r.a.createElement("h3",{className:e.fields},"Age: ",t.age),r.a.createElement("h3",{className:e.fields},"Gender: ",t.sex),r.a.createElement("h3",{className:e.fields},"City: ",t.city),r.a.createElement("h3",{className:e.fields},"State: ",t.state),r.a.createElement("h3",{className:e.fields},"Details: ",t.details))),r.a.createElement(x.a,{maxWidth:"lg",className:e.container},a)}}]),t}(n.Component),ne=Object(u.a)(function(e){return{container:{textAlign:"center",minWidth:"320px"},title:{color:"#263338",marginTop:e.spacing(2),marginBottom:e.spacing(1),marginLeft:e.spacing(2),float:"left"},selectEmpty:{marginTop:e.spacing(1),minWidth:"120px",float:"left"},bigAvatar:{width:"30%",height:"30%",margin:"auto"},paper:{padding:"2px",margin:"5px",width:"100%"},fields:{margin:"10px"}}})(ae),re=localStorage.jwt,ie=!1,oe={};if(re){b.a.defaults.headers.common.Authorization=re,oe=v()(re),ie=!0;var se=Date.now()/1e3;oe.exp<se&&(window.location.href="/login",ie=!1)}var le=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(A,null,r.a.createElement(h.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(Q,Object.assign({},e,{isAuth:ie}))}}),r.a.createElement(h.a,{exact:!0,path:"/register",component:q}));ie&&(t=r.a.createElement(A,null,r.a.createElement(h.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(X,{user:oe})}}),r.a.createElement(h.a,{exact:!0,path:"/single/:id",component:ne})));var a=null;return"police"===oe.userType&&(a=r.a.createElement(A,null,r.a.createElement(h.a,{exact:!0,path:"/reportMissing",component:te}))),r.a.createElement(d.a,null,r.a.createElement(g.a,null,r.a.createElement(W,{isAuth:ie,user:oe}),r.a.createElement(g.a,{className:e.container},t,a)))}}]),t}(n.Component),ce=Object(u.a)({container:{margin:"30px"}})(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t){e.exports=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},[[102,1,2]]]);
//# sourceMappingURL=main.4182af80.chunk.js.map