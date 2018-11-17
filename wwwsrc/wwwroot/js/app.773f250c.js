(function(t){function e(e){for(var n,a,c=e[0],r=e[1],l=e[2],m=0,d=[];m<c.length;m++)a=c[m],i[a]&&d.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("c21b"),i=s.n(n);i.a},"389b":function(t,e,s){"use strict";var n=s("f3f6"),i=s.n(n);i.a},"49f9":function(t,e,s){"use strict";var n=s("d373"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],a=(s("034f"),s("2877")),c={},r=Object(a["a"])(c,i,o,!1,null,null,null);r.options.__file="App.vue";var l=r.exports,u=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid h100"},[s("div",{staticClass:"row bg-secondary h25"},[t._m(0),s("div",{staticClass:"col-2 d-flex justify-content-end align-items-center"},[s("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){t.logout()}}},[t._v("logout")])]),t.user.isEmployee||t.user.isManager?t._e():s("div",{staticClass:"col col-md-10 offset-md-1 text-center py-2"},[s("h5",[t._v("Welcome to TimeKeepr! Join a business as an employee or register a new business as a manager to get started.")])])]),t.user.isEmployee||t.user.isManager?t.user.isEmployee?t.user.isManager?t._e():s("div",{staticClass:"row h65 mt5"},[s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 h-fit-content"},[s("h2",[t._v("Hello, "+t._s(t.user.firstName)+".")]),t.times.length?s("div",[t.times[t.times.length-1].clockOut?t.atBusiness?s("h4",[t._v("Don't forget to clock in!")]):s("h4",[t._v("Clock-in when you arrive at "+t._s(t.business.name)+". "),s("span",{staticClass:"clickable",on:{click:function(e){t.openProfile(t.user)}}},[s("b",[t._v("Show your times.")])])]):s("h4",[t._v("You clocked-in at "+t._s(new Date(t.times[t.times.length-1].clockIn).getHours()>12?new Date(t.times[t.times.length-1].clockIn).getHours()-12:new Date(t.times[t.times.length-1].clockIn).getHours())+":"+t._s(new Date(t.times[t.times.length-1].clockIn).getMinutes()>9?new Date(t.times[t.times.length-1].clockIn).getMinutes():"0"+new Date(t.times[t.times.length-1].clockIn).getMinutes()))])]):s("div",[t.atBusiness?t._e():s("h4",[t._v("Clock-in when you arrive at "+t._s(t.business.name)+".")]),t.atBusiness?s("h4",[t._v("Don't forget to clock in!")]):t._e()])]),t.times.length?s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 h45"},[t.atBusiness&&t.times[t.times.length-1].clockOut?s("div",{staticClass:"h-100 w-100 d-flex justify-content-center align-items-center bg-dark text-white clickable white-shadow",on:{click:function(e){t.clockIn()}}},[s("h1",[t._v("Clock In")])]):!t.atBusiness&&t.times[t.times.length-1].clockOut?s("div",{staticClass:"h-100 w-100 d-flex flex-column justify-content-center align-items-center bg-light no-click"},[s("h1",{staticClass:"text-muted"},[t._v("Clock In")]),s("h4",[t._v("(You're not at "+t._s(t.business.name)+")")])]):t.times[t.times.length-1].clockOut?t._e():s("div",{staticClass:"h-100 w-100 d-flex justify-content-center align-items-center bg-dark text-white clickable white-shadow",on:{click:function(e){t.clockOut(t.times[t.times.length-1])}}},[s("h1",[t._v("Clock Out")])])]):s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 h45"},[t.atBusiness?s("div",{staticClass:"h-100 w-100 d-flex justify-content-center align-items-center bg-dark text-white clickable white-shadow",on:{click:function(e){t.clockIn()}}},[s("h1",[t._v("Clock In")])]):s("div",{staticClass:"h-100 w-100 flex-column d-flex flex-column justify-content-center align-items-center bg-light no-click"},[s("h1",{staticClass:"text-muted"},[t._v("Clock In")]),s("h4",[t._v("(You're not at "+t._s(t.business.name)+")")])])])]):s("div",{staticClass:"row h65 mt5"},[s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2"},[s("h2",[t._v("Hello, "+t._s(t.business.name)+".")]),t.employees.length?s("h4",[t._v("Share your pin - "),t.show?s("span",{staticClass:"clickable",on:{click:function(e){t.show=!t.show}}},[s("b",[t._v(t._s(t.business.pin))])]):t._e(),t.show?t._e():s("span",{staticClass:"clickable",on:{click:function(e){t.show=!t.show}}},[s("b",[t._v("Show Pin")])]),t._v(" - with other employees so they can join "+t._s(t.business.name)+", too.")]):t._e()]),t.employees.length?s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2"},[s("h2",[t._v("Your employees: ")]),s("div",{staticClass:"row justify-content-around"},t._l(t.employees,function(e){return s("div",{key:e.id,staticClass:"col-12 col-md-5 bg-light my-1 d-flex justify-content-center clickable",on:{click:function(s){t.openProfile(e)}}},[s("h1",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))])])}))]):s("div",{staticClass:"col-10 offset-1 col-md-8 offset-md-2"},[s("h4",[t._v("You don't have any employee's on TimeKeepr registered under your company.")]),s("h4",[t._v("Share your pin - "),t.show?s("span",{staticClass:"clickable",on:{click:function(e){t.show=!t.show}}},[s("b",[t._v(t._s(t.business.pin))])]):t._e(),t.show?t._e():s("span",{staticClass:"clickable",on:{click:function(e){t.show=!t.show}}},[s("b",[t._v("Show Pin")])]),t._v(" - with your employees so they can join "+t._s(t.business.name)+".")])])]):s("div",{staticClass:"row h65 mt5 choices"},[s("div",{staticClass:"col-10 col-md-5 offset-md-0 bg-light clickable d-flex justify-content-center choice1 align-items-center",on:{click:function(e){t.empReg()}}},[s("h3",[t._v("Join a business as an employee")])]),s("div",{staticClass:"col-10 col-md-5 offset-md-0  bg-dark text-white clickable d-flex justify-content-center choice2 align-items-center",on:{click:function(e){t.busnReg()}}},[s("h3",[t._v("Register a new business as the manager")])])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-10 d-flex justify-content-center align-items-center"},[s("h1",[t._v("TimeKeepr")])])}],f={name:"home",mounted:function(){this.$store.state.user.id||this.$router.push({name:"login"})},data:function(){return{show:!1,clockClass:"col-10 offset-1 col-md-8 offset-md-2 h45 d-flex justify-content-center align-items-center"}},computed:{user:function(){return this.$store.state.user},business:function(){return this.$store.state.business},employees:function(){return this.$store.state.employees},times:function(){return this.$store.state.timesArr},atBusiness:function(){return this.$store.state.atBusiness}},methods:{logout:function(){this.$store.dispatch("logout")},empReg:function(){this.$router.push({path:"/employee-register"})},busnReg:function(){this.$router.push({path:"/business-register"})},openProfile:function(t){this.$router.push({name:"employee",params:{eId:t.id,e:t}})},clockIn:function(){var t={employeeId:this.user.id,businessId:this.business.id,clockIn:(new Date).getTime()};this.$store.dispatch("clockIn",t)},clockOut:function(t){t.clockOut=(new Date).getTime(),this.$store.dispatch("clockOut",t)}}},h=f,p=(s("cccb"),Object(a["a"])(h,m,d,!1,null,null,null));p.options.__file="Home.vue";var g=p.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login container-fluid d-flex flex-column justify-content-center h100"},[t._m(0),s("div",{staticClass:"row d-flex align-items-center"},[t.loginForm?s("b-card",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 bg-dark text-white"},[s("b-navbar",{staticClass:"d-flex justify-content-between bg-dark"},[s("h1",[t._v("Login")]),s("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){t.loginForm=!t.loginForm}}},[t._v("or signup")])]),s("b-form",{staticClass:"px-3",on:{submit:function(e){e.preventDefault(),t.submit()}}},[s("b-form-group",{attrs:{label:"email"}},[s("b-form-input",{attrs:{type:"email",required:""},model:{value:t.login.email,callback:function(e){t.$set(t.login,"email",e)},expression:"login.email"}})],1),s("b-form-group",{attrs:{label:"password"}},[s("b-form-input",{attrs:{type:"password",required:""},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})],1),s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v("submit")])],1)],1):s("b-card",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 bg-secondary"},[s("b-navbar",{staticClass:"d-flex justify-content-between bg-secondary"},[s("h1",[t._v("Signup")]),s("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){t.loginForm=!t.loginForm}}},[t._v("or login")])]),s("b-form",{staticClass:"px-3",on:{submit:function(e){e.preventDefault(),t.submit()}}},[s("b-form-group",{attrs:{label:"first name"}},[s("b-form-input",{attrs:{required:""},model:{value:t.register.firstName,callback:function(e){t.$set(t.register,"firstName",e)},expression:"register.firstName"}})],1),s("b-form-group",{attrs:{label:"last name"}},[s("b-form-input",{attrs:{required:""},model:{value:t.register.lastName,callback:function(e){t.$set(t.register,"lastName",e)},expression:"register.lastName"}})],1),s("b-form-group",{attrs:{label:"email"}},[s("b-form-input",{attrs:{required:"",type:"email"},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}})],1),s("b-form-group",{attrs:{label:"password"}},[s("b-form-input",{attrs:{pattern:".{6,}",required:"",oninvalid:"this.setCustomValidity('At least 6 characters')",oninput:"this.setCustomValidity('')",type:"password"},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit"}},[t._v("submit")])],1)],1)],1)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fixed-top text-center"},[s("h1",[t._v("TimeKeepr")])])}],y={name:"login",mounted:function(){this.$store.dispatch("authenticate")},data:function(){return{loginForm:!0,login:{email:"",password:""},register:{email:"",password:"",firstName:"",lastName:""}}},methods:{submit:function(){this.login.email?(this.$store.dispatch("login",this.login),this.login={email:"",password:""}):(this.$store.dispatch("register",this.register),this.register={email:"",password:"",firstName:"",lastName:""})}}},_=y,k=Object(a["a"])(_,b,v,!1,null,null,null);k.options.__file="Login.vue";var w=k.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid employee-register h100"},[s("div",{staticClass:"row bg-secondary h25"},[t._m(0),s("div",{staticClass:"col-2 d-flex justify-content-end align-items-center"},[s("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){t.home()}}},[t._v("cancel")])])]),s("div",{staticClass:"row mt5 h65 text-white"},[s("b-form",{staticClass:"col-10 offset-1 col-md-8 offset-md-2 bg-dark d-flex flex-column justify-content-around align-items-center",on:{submit:function(e){e.preventDefault(),t.register()}}},[s("h3",{staticClass:"white-shadow"},[t._v("Enter a Business Pin")]),s("b-form-group",[s("b-form-input",{attrs:{required:""},model:{value:t.pin,callback:function(e){t.pin=e},expression:"pin"}}),s("b-checkbox",{attrs:{required:""},on:{change:function(e){t.getLocation()}},model:{value:t.locationPermission,callback:function(e){t.locationPermission=e},expression:"locationPermission"}},[t._v("I understand that by joining a business I submit to sharing my location.")]),s("button",{staticClass:"btn btn-outline-light mt-1",attrs:{type:"submit"}},[t._v("submit")])],1)],1)],1)])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-10 d-flex justify-content-center align-items-center"},[s("h1",[t._v("Employee Registration")])])}],j={name:"employee-register",mounted:function(){this.$store.state.user.id||this.$router.push({name:"login"})},data:function(){return{pin:"",locationPermission:!1,coords:{lat:0,lng:0}}},computed:{user:function(){return this.$store.state.user}},methods:{home:function(){this.$router.push({path:"/"}),this.pin="",this.locationPermission=!1},getLocation:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.coords.lat=e.coords.latitude,t.coords.lng=e.coords.longitude})},register:function(){var t={pin:this.pin,userId:this.user.id,coords:this.coords};this.$store.dispatch("addEmployee",t)}}},$=j,I=(s("389b"),Object(a["a"])($,C,x,!1,null,null,null));I.options.__file="EmployeeRegister.vue";var O=I.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"business-register container-fluid"},[s("div",{staticClass:"row bg-dark text-white h25"},[t._m(0),s("div",{staticClass:"col-2 d-flex justify-content-end align-items-center"},[s("button",{staticClass:"btn btn-outline-light",on:{click:function(e){t.home()}}},[t._v("cancel")])])]),s("b-form",{staticClass:"h65 bg-light mt5 justify-content-center",on:{submit:function(e){e.preventDefault(),t.register()}}},[t.haveLocation?s("div",{staticClass:"row mx-3 h-100 justify-content-between"},[s("div",{staticClass:"col-12 col-md-4"},[s("b-form-group",{attrs:{label:"business name"}},[s("b-form-input",{attrs:{placeholder:"e.g., XYZ Company",required:""},model:{value:t.business.name,callback:function(e){t.$set(t.business,"name",e)},expression:"business.name"}})],1)],1),s("div",{staticClass:"col-12 col-md-4"},[s("b-form-group",{attrs:{label:"business pin",description:"Your business's pin is used by other TimeKeepr users wishing to join your business as an employee. Only share this information with people you trust."}},[s("b-form-input",{attrs:{placeholder:"e.g., 57204",type:"number",required:"",pattern:".{4,}",oninvalid:"this.setCustomValidity('At least 4 numbers')",oninput:"this.setCustomValidity('')"},model:{value:t.business.pin,callback:function(e){t.$set(t.business,"pin",e)},expression:"business.pin"}})],1)],1),s("button",{staticClass:"btn btn-dark d-flex align-self-start",attrs:{type:"submit"}},[t._v("Register "+t._s(t.business.name))])]):s("div",{staticClass:"row mx-3 h-100 position-relative",attrs:{id:"map"}},[s("div",{staticClass:"col-12 col-md-4"},[s("b-form-group",{attrs:{label:"business address"}},[s("b-form-input",{attrs:{placeholder:"e.g., 12 Main St boise id",required:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),s("button",{staticClass:"btn btn-dark",on:{click:function(e){t.updateMap()}}},[t._v("search")])],1)],1),s("button",{staticClass:"btn btn-dark",attrs:{id:"confirm"},on:{click:function(e){t.haveLocation=!t.haveLocation}}},[t._v("confirm location")])])])],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-10 d-flex justify-content-center align-items-center"},[s("h1",[t._v("Business Registration")])])}],D=(s("7f7f"),s("a481"),{name:"business-register",mounted:function(){this.$store.state.user.id||this.$router.push({name:"login"})},data:function(){return{haveLocation:!1,address:"",business:{lat:0,lng:0,name:"",pin:"",managerId:""}}},computed:{user:function(){return this.$store.state.user}},methods:{home:function(){this.$router.push({path:"/"}),this.haveLocation=!1,this.address="",this.business={lat:0,lng:0,name:"",pin:""}},updateMap:function(){var t=this,e=document.getElementById("map"),s=this.address.replace(/\s+/g,"+");fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(s,"&key=AIzaSyCdGJdNjNuImKhNr3KciXIhqDAub2qUn9A")).then(function(t){return t.json()}).then(function(s){var n=s.results[0].geometry.location;e.style.backgroundImage='url("https://maps.googleapis.com/maps/api/staticmap?center='.concat(n.lat,",").concat(n.lng,'&zoom=17&size=1000x1000&sensor=false&key=AIzaSyCdGJdNjNuImKhNr3KciXIhqDAub2qUn9A")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center",e.style.backgroundSize="cover",t.business.lat=n.lat,t.business.lng=n.lng;setTimeout(function(){document.getElementById("confirm").style.visibility="visible"},2e3)})},register:function(){this.business.pin&&this.business.name&&(this.business.managerId=this.user.id,this.$store.dispatch("registerBusiness",this.business))}}}),P=D,E=(s("49f9"),Object(a["a"])(P,T,M,!1,null,null,null));E.options.__file="BusinessRegister.vue";var B=E.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.e?s("div",{staticClass:"employee container-fluid h100"},[s("div",{staticClass:"row bg-secondary h25"},[s("div",{staticClass:"col-10 d-flex justify-content-center align-items-center"},[s("h1",[t._v(t._s(t.e.firstName)+" "+t._s(t.e.lastName))])]),s("div",{staticClass:"col-2 d-flex justify-content-end align-items-center"},[s("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){t.home()}}},[t._v("home")])]),s("div",{staticClass:"col col-md-10 offset-md-1 text-center"},[s("h4",[t._v(t._s(t.hours)+" hrs need paid")])])]),s("div",{staticClass:"actions row w-100"},[s("div",{staticClass:"col-6 d-flex justify-content-center"},[s("button",{staticClass:"btn btn-dark",on:{click:function(e){t.display?t.display="":t.display="d-none"}}},[t._v(t._s(t.displayBTN))])]),s("div",{staticClass:"col-6 d-flex justify-content-center"},[s("button",{class:t.hasTimes?"btn btn-dark":"d-none",on:{click:function(e){t.confirmPaid()}}},[t._v("Confirm Paid")])])]),Object.keys(t.times).length?s("div",{staticClass:"row h65 mt5 justify-content-around"},t._l(t.times,function(e){return s("div",{key:e.id,class:e.isPaid?"col-10 offset-1 col-md-3 pb-5 "+t.display:"col-10 offset-1 col-md-3 pb-5",attrs:{id:e.id}},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h2",[t._v(t._s(new Date(e.clockIn).getMonth()+1)+"."+t._s(new Date(e.clockIn).getDate())+"."+t._s(new Date(e.clockIn).getFullYear()))]),e.isPaid?s("h4",{staticClass:"text-success"},[t._v("$")]):s("b-checkbox",{staticClass:"text-danger clickable",on:{change:function(s){t.togglePaid(e.id)}}},[s("h4",[t._v("$")])])],1),s("hr"),s("h3",[t._v("in - "+t._s(new Date(e.clockIn).getHours()>12?new Date(e.clockIn).getHours()-12:new Date(e.clockIn).getHours())+":"+t._s(new Date(e.clockIn).getMinutes()>9?new Date(e.clockIn).getMinutes():"0"+new Date(e.clockIn).getMinutes()))]),e.clockOut?s("h3",[t._v("out - "+t._s(new Date(e.clockOut).getHours()>12?new Date(e.clockOut).getHours()-12:new Date(e.clockOut).getHours())+":"+t._s(new Date(e.clockOut).getMinutes()>9?new Date(e.clockOut).getMinutes():"0"+new Date(e.clockOut).getMinutes()))]):s("h3",[t._v("out - still working")])])})):s("div",{staticClass:"row h65 mt5"},[s("div",{staticClass:"col-10 offset-1 col-md-8 col-md-2"},[s("h2",[t._v(t._s(t.e.firstName)+" doens't have any clock-in's.")])])])]):t._e()},q=[],A=(s("ac6a"),s("8615"),{name:"employee",props:["e"],mounted:function(){this.$store.state.user.id?this.$store.dispatch("getTimes",this.e.id):this.$router.push({name:"login",path:"/login"})},data:function(){return{hours:0,dataTimes:{},hasTimes:!1,display:"",displayBTN:"Only Unpaid"}},computed:{times:function(){return this.$store.state.timesObj}},methods:{home:function(){this.$router.push({name:"home"})},total:function(){var t=0;for(var e in this.times)if(this.times[e].clockOut&&!this.times[e].isPaid){var s=new Date(this.times[e].clockOut).getHours()+new Date(this.times[e].clockOut).getMinutes()/60,n=new Date(this.times[e].clockIn).getHours()+new Date(this.times[e].clockIn).getMinutes()/60;t+=Math.abs(n-s)}this.hours=t.toFixed(2)},togglePaid:function(t){if(this.dataTimes[t]){delete this.dataTimes[t];var e=Object.values(this.dataTimes);e.length||(this.hasTimes=!1)}else this.dataTimes[t]=t,this.hasTimes=!0},confirmPaid:function(){var t=Object.values(this.dataTimes);t.length&&confirm("Are you sure you want to set ".concat(t.length," time").concat(t.length>1?"s":""," as paid?"))&&(this.$store.dispatch("setTimesPaid",t),this.dataTimes={})}},watch:{times:function(t){this.total()},display:function(t){this.display?this.displayBTN="All Times":this.displayBTN="Only Unpaid"}}}),S=A,R=(s("6589"),Object(a["a"])(S,N,q,!1,null,null,null));R.options.__file="Employee.vue";var H=R.exports;n["a"].use(u["a"]);var L=new u["a"]({routes:[{path:"/",name:"home",component:g},{path:"/login",name:"login",component:w},{path:"/employee-register",name:"employeeRegister",component:O},{path:"/business-register",name:"businessRegister",component:B},{path:"/employee/:eId",name:"employee",props:!0,component:H}]}),U=s("be19"),K=(s("6762"),s("2fdb"),s("2f62")),F=s("bc3a"),G=s.n(F);n["a"].use(K["a"]);var Y=!window.location.host.includes("localhost"),J=Y?"//time-keepr.herokuapp.com/":"//localhost:5000/",z=G.a.create({baseURL:J+"api/",timeout:3e3,withCredentials:!0}),V=G.a.create({baseURL:J+"account/",timeout:3e3,withCredentials:!0}),X=new K["a"].Store({state:{user:{},business:{},employees:[],timesObj:{},timesArr:[],atBusiness:!1},mutations:{setUser:function(t,e){t.user=e,L.push({name:"home",path:"/"})},setBusiness:function(t,e){t.business=e,L.push({name:"home",path:"/"}),e.managerId==t.user.id?t.user.isManager=1:t.user.isEmployee=1},setEmployees:function(t,e){t.employees=e},setTimes:function(t,e){if(t.user.isEmployee)t.timesArr=e;else{var s={};e.forEach(function(t){s[t.id]=t}),t.timesObj=s}},setDistance:function(t,e){t.atBusiness=e<=.25},addTime:function(t,e){t.user.isEmployee?t.timesArr.push(e):n["a"].set(t.timesObj,"".concat(e.id),e)},updateTime:function(t,e){if(t.user.isEmployee)return t.timesArr.pop(),void t.timesArr.push(e);t.timesObj[e.id]=e},setTimesPaid:function(t,e){e.forEach(function(e){var s=t.timesObj[e];n["a"].delete(t.timesObj,"".concat(s.id)),s.isPaid=!0,n["a"].set(t.timesObj,"".concat(s.id),s)})}},actions:{authenticate:function(t){var e=t.commit,s=t.dispatch;V.get("authenticate").then(function(t){e("setUser",t.data),t.data.isManager&&s("managerGetBusiness",t.data.id),t.data.isEmployee&&(s("getTimes",t.data.id),navigator.geolocation.getCurrentPosition(function(e){t.data.coords={lat:e.coords.latitude,lng:e.coords.longitude}}),s("employeeGetBusiness",t.data))}).catch(function(t){console.error("not authenticated")})},login:function(t,e){var s=t.commit,n=t.dispatch;V.post("login",e).then(function(t){s("setUser",t.data),t.data.isManager&&n("managerGetBusiness",t.data.id),t.data.isEmployee&&(n("getTimes",t.data.id),navigator.geolocation.getCurrentPosition(function(e){t.data.coords={lat:e.coords.latitude,lng:e.coords.longitude}}),n("employeeGetBusiness",t.data))}).catch(function(t){console.error(t)})},register:function(t,e){var s=t.commit;V.post("register",e).then(function(t){return s("setUser",t.data)}).catch(function(t){console.error(t)})},logout:function(t){Object(U["a"])(t),V.delete("logout").then(function(t){t.data&&L.push({name:"login",path:"/login"})}).catch(function(t){console.error(t)})},registerBusiness:function(t,e){var s=t.commit;z.post("register",e).then(function(t){s("setBusiness",t.data)}).catch(function(t){return console.error(t)})},managerGetBusiness:function(t,e){var s=t.commit,n=t.dispatch;z.get("manager/".concat(e)).then(function(t){s("setBusiness",t.data),n("getEmployees",t.data.id)}).catch(function(t){return console.error(t)})},employeeGetBusiness:function(t,e){var s=t.commit,n=t.dispatch;z.get("employee/".concat(e.id)).then(function(t){s("setBusiness",t.data),n("haversine",{employee:e,business:t.data})}).catch(function(t){return console.error(t)})},addEmployee:function(t,e){var s=t.commit,n=t.dispatch;z.post("enroll",e).then(function(t){s("setBusiness",t.data),n("haversine",{employee:{coords:e.coords},business:t.data})}).catch(function(t){return console.error(t)})},getEmployees:function(t,e){var s=t.commit;z.get("employees/".concat(e)).then(function(t){return s("setEmployees",t.data)}).catch(function(t){return console.error(t)})},getTimes:function(t,e){var s=t.commit;z.get("employee/times/".concat(e)).then(function(t){return s("setTimes",t.data)}).catch(function(t){return console.error(t)})},haversine:function(t,e){var s=t.commit;console.log(e);var n=6371e3,i=e.employee.coords.lat*(Math.PI/180),o=e.business.lat*(Math.PI/180),a=(e.business.lat-e.employee.coords.lat)*(Math.PI/180),c=(e.business.lng-e.employee.coords.lng)*(Math.PI/180),r=Math.sin(a/2)*Math.sin(a/2)+Math.cos(i)*Math.cos(o)*Math.sin(c/2)*Math.sin(c/2),l=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)),u=n*l/1e3;s("setDistance",.6213*u)},clockIn:function(t,e){var s=t.commit;z.post("employee/clockin",e).then(function(t){return s("addTime",t.data)}).catch(function(t){return console.error(t)})},clockOut:function(t,e){var s=t.commit;z.post("employee/clockout",e).then(function(t){return s("updateTime",e)}).catch(function(t){return console.error(t)})},setTimesPaid:function(t,e){var s=t.commit,n=e.length,i=[];e.forEach(function(t){z.put("".concat(t)).then(function(){i.push(t),n--,n||s("setTimesPaid",i)}).catch(function(t){return console.error(t)})})}}}),W=s("9f7b");s("2dd8");n["a"].use(W["a"]),n["a"].config.productionTip=!1,new n["a"]({router:L,store:X,render:function(t){return t(l)}}).$mount("#app")},6589:function(t,e,s){"use strict";var n=s("cd4f"),i=s.n(n);i.a},"8f59":function(t,e,s){},c21b:function(t,e,s){},cccb:function(t,e,s){"use strict";var n=s("8f59"),i=s.n(n);i.a},cd4f:function(t,e,s){},d373:function(t,e,s){},f3f6:function(t,e,s){}});
//# sourceMappingURL=app.773f250c.js.map