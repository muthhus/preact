!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={exports:{}};t(n.exports),e.preact=n.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){var n=d(null,e),r=n._component;return r&&o(r,"componentWillMount"),t.appendChild(n),r&&o(r,"componentDidMount"),d}function r(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;n>a;a++)r[a-2]=arguments[a];var c=void 0,l=[],u=r.length,d=void 0,p=void 0;if(u){c=[];for(var f=0;u>f;f++){var h=r[f];if(null!==h&&void 0!==h){h.join?d=h:(d=l,d[0]=h);for(var v=0;v<d.length;v++){var m=d[v],g=s(m)&&!i(m);g&&(m=String(m)),g&&p?c[c.length-1]+=m:s(m)&&c.push(m),p=g}}}}t&&t.children&&delete t.children;var y=new z(e,t||void 0,c||void 0);return o(D,"vnode",y),y}function o(e,t){for(var n=e[t],r=arguments.length,o=Array(r>2?r-2:0),i=2;r>i;i++)o[i-2]=arguments[i];return n&&"function"==typeof n?n.apply(e,o):void 0}function i(e){return e&&e.__isVNode===!0}function s(e){return null!==e&&void 0!==e}function a(e,t){if(3===e.nodeType)return"string"==typeof t;var n=t.nodeName;return"function"==typeof n?e._componentConstructor===n:e.nodeName.toLowerCase()===n}function c(e,t){var n=e&&e._component;if(n&&e._componentConstructor===t.nodeName){var r=b(t);return n.setProps(r,P),e}return n&&u(e,n),l(t)}function l(e){var t=M.create(e.nodeName),n=b(e);t.setProps(n,w),t._render(O);var r=t.base;return r._component=t,r._componentConstructor=e.nodeName,r}function u(e,t){delete e._component,o(t,"componentWillUnmount");var n=t.base;n&&n.parentNode&&n.parentNode.removeChild(n),o(t,"componentDidUnmount"),M.collect(t)}function d(e,t,n){var r=e,i=t.nodeName;if("function"==typeof i)return c(e,t);if("string"==typeof t){if(e){if(3===e.nodeType)return e.textContent=t,e;1===e.nodeType&&E.collect(e)}return document.createTextNode(t)}(null===i||void 0===i)&&(i="x-undefined-element"),e?e.nodeName.toLowerCase()!==i?(r=E.create(i),p(r,R.call(e.childNodes)),1===e.nodeType&&E.collect(e)):e._component&&e._component!==n&&u(e,e._component):r=E.create(i);var s=g(r)||C,l=t.attributes||C;if(s!==C)for(var v in s)if(s.hasOwnProperty(v)){var m=l[v];(void 0===m||null===m||m===!1)&&h(r,v,null,s[v])}if(l!==C)for(var y in l)if(l.hasOwnProperty(y)){var b=l[y];if(void 0!==b&&null!==b&&b!==!1){var _=f(r,y,s[y]);b!==_&&h(r,y,b,_)}}for(var N=R.call(r.childNodes),x={},w=N.length;w--;){var P=N[w].nodeType,O=void 0;if(3===P)O=P.key;else{if(1!==P)continue;O=N[w].getAttribute("key")}O&&(x[O]=N.splice(w,1)[0])}var T=[];if(t.children)for(var w=0,U=t.children.length;U>w;w++){var k=t.children[w],A=k.attributes,O=void 0,D=void 0;if(A&&(O=A.key,D=O&&x[O]),!D){var W=N.length;if(N.length)for(var z=0;W>z;z++)if(a(N[z],k)){D=N.splice(z,1)[0];break}}T.push(d(D,k))}for(var w=0,W=T.length;W>w;w++)if(r.childNodes[w]!==T[w]){var D=T[w],L=D._component,S=r.childNodes[w+1];L&&o(L,"componentWillMount"),S?r.insertBefore(D,S):r.appendChild(D),L&&o(L,"componentDidMount")}for(var w=0,W=N.length;W>w;w++){var D=N[w],L=D._component;L&&o(L,"componentWillUnmount"),D.parentNode.removeChild(D),L?(o(L,"componentDidUnmount"),M.collect(L)):1===D.nodeType&&E.collect(D)}return r}function p(e,t){var n=t.length;if(2>=n)return e.appendChild(t[0]),void(2===n&&e.appendChild(t[1]));for(var r=document.createDocumentFragment(),o=0;n>o;o++)r.appendChild(t[o]);e.appendChild(r)}function f(e,t,n){return"class"===t?e.className:"style"===t?e.style.cssText:n}function h(e,t,n,r){"class"===t?e.className=n:"style"===t?e.style.cssText=n:v(e,t,n,r)}function v(e,t,n,r){if("on"===t.substring(0,2)){var o=t.substring(2).toLowerCase(),i=e._listeners||(e._listeners={});return i[o]||e.addEventListener(o,m),void(i[o]=n)}var s=typeof n;null===n?e.removeAttribute(t):"function"!==s&&"object"!==s&&e.setAttribute(t,n)}function m(e){var t=this._listeners,n=t[F(e.type)];return n?n.call(this,o(D,"event",e)||e):void 0}function g(e){var t=e.attributes;return t&&t.getNamedItem?t.length?y(t):void 0:t}function y(e){for(var t={},n=e.length;n--;){var r=e[n];t[r.name]=r.value}return t}function b(e){var t=x({},e.attributes);return e.children&&(t.children=e.children),e.text&&(t._content=e.text),t}function _(e){var t="",n=": ",r="; ";for(var o in e)if(e.hasOwnProperty(o)){var i=e[o];t+=I(o),t+=n,t+=i,"number"!=typeof i||U.hasOwnProperty(o)||(t+="px"),t+=r}return t}function N(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function x(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}e.render=n,e.h=r;var C={},w={render:!1},P={renderSync:!0},O={build:!0},T="",U={};"boxFlex boxFlexGroup columnCount fillOpacity flex flexGrow flexPositive flexShrink flexNegative fontWeight lineClamp lineHeight opacity order orphans strokeOpacity widows zIndex zoom".split(" ").forEach(function(e){return U[e]=!0});var R=Array.prototype.slice,k=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e(n)}},A={syncComponentUpdates:!0},D={};D.vnode=function(e){var t=e.attributes;if(t){var n=t.style;n&&!n.substring&&(t.style=_(n));var r=t["class"];t.hasOwnProperty("className")&&(r=t["class"]=t.className,delete t.className),r&&!r.substring&&(t["class"]=N(r))}};var W=function(){function e(){t(this,e),this._dirty=this._disableRendering=!1,this.nextProps=this.base=null,this.props=o(this,"getDefaultProps")||{},this.state=o(this,"getInitialState")||{},o(this,"initialize")}return e.prototype.shouldComponentUpdate=function(e,t){return!0},e.prototype.setState=function(e){x(this.state,e),this.triggerRender()},e.prototype.setProps=function(e){var t=arguments.length<=1||void 0===arguments[1]?C:arguments[1],n=this._disableRendering===!0;this._disableRendering=!0,o(this,"componentWillReceiveProps",e,this.props),this.nextProps=e,this._disableRendering=n,t.renderSync===!0&&A.syncComponentUpdates===!0?this._render():t.render!==!1&&this.triggerRender()},e.prototype.triggerRender=function(){this._dirty!==!0&&(this._dirty=!0,L.add(this))},e.prototype.render=function(e,t){return r("div",{component:this.constructor.name},e.children)},e.prototype._render=function(){var e=arguments.length<=0||void 0===arguments[0]?C:arguments[0];if(this._disableRendering!==!0){if(this._dirty=!1,this.base&&o(this,"shouldComponentUpdate",this.props,this.state)===!1)return void(this.props=this.nextProps);this.props=this.nextProps,o(this,"componentWillUpdate");var t=o(this,"render",this.props,this.state);if(this.base||e.build===!0){var n=d(this.base,t||T,this);if(this.base&&n!==this.base){var r=this.base.parentNode;r&&r.replaceChild(n,this.base)}this.base=n}o(this,"componentDidUpdate")}},e}();e.Component=W;var z=function V(e,n,r){t(this,V),this.nodeName=e,this.attributes=n,this.children=r};e.VNode=z,z.prototype.__isVNode=!0;var L={items:[],itemsOffline:[],pending:!1,add:function(e){if(1===L.items.push(e)){var t=D.debounceRendering;t?t(L.process):setTimeout(L.process,0)}},process:function(){var e=L.items,t=e.length;if(t)for(L.items=L.itemsOffline,L.items.length=0,L.itemsOffline=e;t--;)e[t]._dirty&&e[t]._render()}},S=L.process,E={nodes:{},collect:function(e){E.clean(e);var t=E.normalizeName(e.nodeName),n=E.nodes[t];n?n.push(e):E.nodes[t]=[e]},create:function(e){var t=E.normalizeName(e),n=E.nodes[t];return n&&n.pop()||document.createElement(e)},clean:function(e){e.remove();var t=e.attributes&&e.attributes.length;if(t)for(var n=t;n--;)e.removeAttribute(e.attributes[n].name)},normalizeName:k(function(e){return e.toUpperCase()})},M={components:{},collect:function(e){var t=e.constructor.name,n=M.components[t]||(M.components[t]=[]);n.push(e)},create:function(e){var t=e.name,n=M.components[t];return n&&n.length?n.splice(0,1)[0]:new e}},F=k(function(e){return e.toLowerCase()}),I=k(function(e){return e.replace(/([A-Z])/,"-$1").toLowerCase()});e.options=A,e.hooks=D,e.rerender=S,e["default"]={options:A,hooks:D,render:n,rerender:S,h:r,Component:W}});
//# sourceMappingURL=preact.js.map