(function(e){function t(t){for(var n,c,a=t[0],i=t[1],l=t[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(d.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},d=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/todo-mania/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex-container"},[o("md-card",{staticClass:"todo-card",attrs:{"md-with-hover":""}},[o("md-ripple",[o("md-card-header",[o("div",[e._v("Todo-Mania")])]),o("md-card-content",[o("md-field",[o("md-input",{attrs:{placeholder:"Add a todo"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("ul",{staticClass:"todos"},e._l(e.todos,(function(t){return o("li",{key:t.id,class:{completed:t.completed,editing:t==e.editedToDoId},on:{dblclick:function(o){return e.editedToDo(t)}}},[e._v(" "+e._s(t.label)+" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"todo.label"},{name:"show",rawName:"v-show",value:e.editedToDoId==t.id,expression:"editedToDoId == todo.id"}],attrs:{placeholder:"Edit the todo"},domProps:{value:t.label},on:{keydown:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.updateToDo(t)},input:function(o){o.target.composing||e.$set(t,"label",o.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{click:function(o){return e.completedTodo(t)},change:function(o){var n=t.completed,r=o.target,d=!!r.checked;if(Array.isArray(n)){var c=null,a=e._i(n,c);r.checked?a<0&&e.$set(t,"completed",n.concat([c])):a>-1&&e.$set(t,"completed",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"completed",d)}}})])})),0),o("md-card-actions",[e.todoItem?o("md-button",{on:{click:function(t){return e.removeTodo(e.todo)}}},[e._v("Delete")]):e._e()],1)],1)],1)],1)],1)},d=[],c=(o("c975"),o("a434"),{data:function(){return{todos:[],currentTodo:"",editedToDoId:null,completed:!1,todoItem:!1}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1}),this.currentTodo="",this.todoItem=!0,this.saveToStorage()},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1),this.saveToStorage()},completedTodo:function(e){e.completed=!0,this.saveToStorage()},editedToDo:function(e){this.editedToDoId=e.id},updateToDo:function(e){this.editedToDoId=null,this.saveToStorage()},saveToStorage:function(){var e=JSON.stringify(this.todos);localStorage.setItem("todos",e)}},mounted:function(){if(localStorage.getItem("todos"))try{this.todoItem=!0,this.todos=JSON.parse(localStorage.getItem("todos"))}catch(e){localStorage.removeItem("todos")}}}),a=c,i=(o("5c0b"),o("2877")),l=Object(i["a"])(a,r,d,!1,null,null,null),u=l.exports,s=o("9c30");o("51de");n["default"].use(s["MdField"]),n["default"].use(s["MdButton"]),n["default"].use(s["MdCard"]),n["default"].use(s["MdRipple"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),r=o.n(n);r.a},"9c0c":function(e,t,o){}});
//# sourceMappingURL=app.298571cb.js.map