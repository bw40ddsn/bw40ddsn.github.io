webpackJsonp([8],{564:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),s=n(o),l=a(5),r=n(l),u=a(6),i=n(u),c=a(9),d=n(c),m=a(8),f=n(m),g=a(56),h=n(g),p=a(55),v=a(0),C=n(v),w=a(33),E=a(13),k=function(e){function t(e){(0,r.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.usernameOnChange=function(e){a.setState({username:e.target.value})},a.passwordOnChange=function(e){var t=e.target.value;a.setState({password:t})},a.memoryOnChange=function(e){var t=e.target.checked;a.setState({memoryPW:t})},a.handleLogin=function(){var e=a.state,t=e.username,n=e.password,o=e.logining,s=e.memoryPW;return t?n?(o||a.setState({logining:!0}),void setTimeout(function(){s&&(h.default.setCookie("userInfo.username",t,60),h.default.setCookie("userInfo.password",n,60)),h.default.setCookie("username",t),a.setState({logined:!0})},2e3)):(console.log("input password"),!1):(console.log("input username"),!1)},a.state={logined:!1,logining:!1,username:"",password:"",memoryPW:!1},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentWillMount",value:function(){if(h.default.getCookie("userInfo.username")&&h.default.getCookie("userInfo.password")){var e={};e.username=h.default.getCookie("userInfo.username"),e.password=h.default.getCookie("userInfo.password"),e.memoryPW=!0,this.setState(e)}}},{key:"render",value:function(){var e=this.state,t=e.logined,a=e.logining,n=e.memoryPW,o=e.username,s=e.password,l=this.props.location.state?this.props.location.state.from:{pathname:"/"};return t?C.default.createElement(w.Redirect,{to:l}):C.default.createElement("div",{className:"loginComponent"},C.default.createElement("div",{className:"form-container"},C.default.createElement("div",{className:"form-body"},C.default.createElement("div",{className:"system-title"},"BEEHIVE UI"),C.default.createElement("div",{className:"row"},C.default.createElement(p.BHInput,{className:"login-ghost-input",placeholder:"用户名",nextIcon:"icon-zhanghao",onChange:this.usernameOnChange,value:o})),C.default.createElement("div",{className:"row"},C.default.createElement(p.BHInput,{className:"login-ghost-input mgn-b15px",type:"password",placeholder:"登录密码",nextIcon:"icon-zhanghaomima-",onChange:this.passwordOnChange,value:s})),C.default.createElement("div",{className:"row"},C.default.createElement(p.BHCheckBox,{className:"login-ghost-checkbox",iconType:"ghost",iconStyle:{color:"rgba(255, 255, 255, 0.7)"},checked:n,onChange:this.memoryOnChange},"记住密码")),C.default.createElement("div",{className:"row"},C.default.createElement(p.BHButton,{className:"warning loginBtn",onClick:this.handleLogin},a?"登录中···":"登录")))))}}]),t}(C.default.Component);t.default=(0,E.withRouter)(k)}});