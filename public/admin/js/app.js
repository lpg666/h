/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
;(function($, window, document, undefined) {

    var pluginName = "metisMenu",
        defaults = {
            toggle: true,
            doubleTapToGo: false
        };

    function Plugin(element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {

            var $this = this.element,
                $toggle = this.settings.toggle,
                obj = this;

            if (this.isIE() <= 9) {
                $this.find("li.active").has("ul").children("ul").collapse("show");
                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
            } else {
                $this.find("li.active").has("ul").children("ul").addClass("collapse in");
                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
            }

            //add the "doubleTapToGo" class to active items if needed
            if (obj.settings.doubleTapToGo) {
                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
            }

            $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
                e.preventDefault();

                //Do we need to enable the double tap
                if (obj.settings.doubleTapToGo) {

                    //if we hit a second time on the link and the href is valid, navigate to that url
                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
                        e.stopPropagation();
                        document.location = $(this).attr("href");
                        return;
                    }
                }

                $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

                if ($toggle) {
                    $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
                }

            });
        },

        isIE: function() { //https://gist.github.com/padolsey/527683
            var undef,
                v = 3,
                div = document.createElement("div"),
                all = div.getElementsByTagName("i");

            while (
                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                    all[0]
                ) {
                return v > 4 ? v : undef;
            }
        },

        //Enable the link on the second click.
        doubleTapToGo: function(elem) {
            var $this = this.element;

            //if the class "doubleTapToGo" exists, remove it and return
            if (elem.hasClass("doubleTapToGo")) {
                elem.removeClass("doubleTapToGo");
                return true;
            }

            //does not exists, add a new class and return false
            if (elem.parent().children("ul").length) {
                //first remove all other class
                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
                //add the class on the current element
                elem.addClass("doubleTapToGo");
                return false;
            }
        },

        remove: function() {
            this.element.off("." + pluginName);
            this.element.removeData(pluginName);
        }

    };

    $.fn[pluginName] = function(options) {
        this.each(function () {
            var el = $(this);
            if (el.data(pluginName)) {
                el.data(pluginName).remove();
            }
            el.data(pluginName, new Plugin(this, options));
        });
        return this;
    };

})(jQuery, window, document);

/*! layer-v2.0 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
;!function(a,b){"use strict";var c,d,e={getPath:function(){var a=document.scripts,b=a[a.length-1],c=b.src;if(!b.getAttribute("merge"))return c.substring(0,c.lastIndexOf("/")+1)}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},f={v:"2.0",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(a,b){var d=0;return a=a||{},f.cache=e.config=c.extend(e.config,a),f.path=e.config.path||f.path,"string"==typeof a.extend&&(a.extend=[a.extend]),f.use("skin/layer.css",a.extend&&a.extend.length>0?function g(){var c=a.extend;f.use(c[c[d]?d:d-1],d<c.length?function(){return++d,g}():b)}():b),this},use:function(a,b,d){var e=c("head")[0],a=a.replace(/\s/g,""),g=/\.css$/.test(a),h=document.createElement(g?"link":"script"),i="layui_layer_"+a.replace(/\.|\//g,"");return f.path?(g&&(h.rel="stylesheet"),h[g?"href":"src"]=/^http:\/\//.test(a)?a:f.path+a,h.id=i,c("#"+i)[0]||e.appendChild(h),function j(){(g?1989===parseInt(c("#"+i).css("width")):f[d||i])?function(){b&&b();try{g||e.removeChild(h)}catch(a){}}():setTimeout(j,100)}(),this):void 0},ready:function(a,b){var d="function"==typeof a;return d&&(b=a),f.config(c.extend(e.config,function(){return d?{}:{path:a}}()),b),this},alert:function(a,b,d){var e="function"==typeof b;return e&&(d=b),f.open(c.extend({content:a,yes:d},e?{}:b))},confirm:function(a,b,d,g){var h="function"==typeof b;return h&&(g=d,d=b),f.open(c.extend({content:a,btn:e.btn,yes:d,cancel:g},h?{}:b))},msg:function(a,d,g){var i="function"==typeof d,j=e.config.skin,k=(j?j+" "+j+"-msg":"")||"layui-layer-msg",l=h.anim.length-1;return i&&(g=d),f.open(c.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,end:g},i&&!e.config.skin?{skin:k+" layui-layer-hui",shift:l}:function(){return d=d||{},(-1===d.icon||d.icon===b&&!e.config.skin)&&(d.skin=k+" "+(d.skin||"layui-layer-hui")),d}()))},load:function(a,b){return f.open(c.extend({type:3,icon:a||0,shade:.01},b))},tips:function(a,b,d){return f.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,maxWidth:210},d))}},g=function(a){var b=this;b.index=++f.index,b.config=c.extend({},b.config,e.config,a),b.creat()};g.pt=g.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],g.pt.config={type:0,shade:.3,fix:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},g.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,g=f.zIndex+d,i="object"==typeof f.title,j=f.maxmin&&(1===f.type||2===f.type),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=g,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(g-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+h[0]+" "+(h.anim[f.shift]||"")+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+h[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+g+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=j?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;c>b;b++)a+='<a class="'+h[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+h[6]+'">'+a+"</div>"}():"")+"</div>"],k),c},g.pt.creat=function(){var a=this,b=a.config,g=a.index,i=b.content,j="object"==typeof i;switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],f.closeAll("dialog");break;case 2:var i=b.content=j?b.content:[b.content||"http://sentsin.com?from=layer","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+g+'" name="'+h[4]+g+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,f.closeAll("loading");break;case 4:j||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.shade=!1,b.fix=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||f.closeAll("tips")}a.vessel(j,function(d,e){c("body").append(d[0]),j?function(){2==b.type||4==b.type?function(){c("body").append(d[1])}():function(){i.parents("."+h[0])[0]||(i.show().addClass("layui-layer-wrap").wrap(d[1]),c("#"+h[0]+g).find("."+h[5]).before(e))}()}():c("body").append(d[1]),a.layero=c("#"+h[0]+g),b.scrollbar||h.html.css("overflow","hidden").attr("layer-full",g)}).auto(g),2==b.type&&f.ie6&&a.layero.find("iframe").attr("src",i[0]),c(document).off("keydown",e.enter).on("keydown",e.enter),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(g),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){f.close(a.index)},b.time),a.move().callback()},g.pt.auto=function(a){function b(a){a=g.find(a),a.height(i[1]-j-k-2*(0|parseFloat(a.css("padding"))))}var e=this,f=e.config,g=c("#"+h[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&g.width(g.innerWidth()),g.outerWidth()>f.maxWidth&&g.width(f.maxWidth));var i=[g.innerWidth(),g.innerHeight()],j=g.find(h[1]).outerHeight()||0,k=g.find("."+h[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fix&&i[1]>=d.height()&&(i[1]=d.height(),b("."+h[5])):b("."+h[5])}return e},g.pt.offset=function(){var a=this,b=a.config,c=a.layero,e=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(d.height()-e[1])/2,a.offsetLeft=(d.width()-e[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&(a.offsetTop=b.offset,"rb"===b.offset&&(a.offsetTop=d.height()-e[1],a.offsetLeft=d.width()-e[0])),b.fix||(a.offsetTop=/%$/.test(a.offsetTop)?d.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?d.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=d.scrollTop(),a.offsetLeft+=d.scrollLeft()),c.css({top:a.offsetTop,left:a.offsetLeft})},g.pt.tips=function(){var a=this,b=a.config,e=a.layero,f=[e.outerWidth(),e.outerHeight()],g=c(b.follow);g[0]||(g=c("body"));var i={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},j=e.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||j.remove(),i.autoLeft=function(){i.left+f[0]-d.width()>0?(i.tipLeft=i.left+i.width-f[0],j.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left-f[0]-10,i.tipTop=i.top,j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],i.where[k-1](),1===k?i.top-(d.scrollTop()+f[1]+16)<0&&i.where[2]():2===k?d.width()-(i.left+i.width+f[0]+16)>0||i.where[3]():3===k?i.top-d.scrollTop()+i.height+f[1]+16-d.height()>0&&i.where[0]():4===k&&f[0]+16-i.left>0&&i.where[1](),e.find("."+h[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),e.css({left:i.tipLeft,top:i.tipTop})},g.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){var a=e.layero,b=parseInt(a.css("margin-left")),c=parseInt(e.move.css("left"));0===b||(c-=b),"fixed"!==a.css("position")&&(c-=a.parent().offset().left,e.setY=0),a.css({left:c,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layero.find(b.move);return b.move&&f.attr("move","ok"),f.css({cursor:b.move?"move":"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layero=c(this).parents("."+h[0]);var f=e.layero.offset().left,g=e.layero.offset().top,i=e.layero.outerWidth()-6,j=e.layero.outerHeight()-6;c("#layui-layer-moves")[0]||c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+g+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#layui-layer-moves"),b.moveType&&e.move.css({visibility:"hidden"}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layero.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth(),h=e.setY;0>c&&(c=0),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()+e.setY&&(f=d.height()-e.move.outerHeight()+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=f=g=h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove(),b.moveEnd&&b.moveEnd()),e.ismove=!1}catch(a){e.ismove=!1}}),a},g.pt.callback=function(){function a(){var a=g.cancel&&g.cancel(b.index);a===!1||f.close(b.index)}var b=this,d=b.layero,g=b.config;b.openLayer(),g.success&&(2==g.type?d.find("iframe")[0].onload=function(){this.className="",g.success(d,b.index)}:g.success(d,b.index)),f.ie6&&b.IE6(d),d.find("."+h[6]).children("a").on("click",function(){var e=c(this).index();g["btn"+(e+1)]&&g["btn"+(e+1)](b.index,d),0===e?g.yes?g.yes(b.index,d):f.close(b.index):1===e?a():g["btn"+(e+1)]||f.close(b.index)}),d.find("."+h[7]).on("click",a),g.shadeClose&&c("#layui-layer-shade"+b.index).on("click",function(){f.close(b.index)}),d.find(".layui-layer-min").on("click",function(){f.min(b.index,g),g.min&&g.min(d)}),d.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(f.restore(b.index),g.restore&&g.restore(d)):(f.full(b.index,g),g.full&&g.full(d))}),g.end&&(e.end[b.index]=g.end)},e.reselect=function(){c.each(c("select"),function(a,b){var d=c(this);d.parents("."+h[0])[0]||1==d.attr("layer")&&c("."+h[0]).length<1&&d.removeAttr("layer").show(),d=null})},g.pt.IE6=function(a){function b(){a.css({top:f+(e.config.fix?d.scrollTop():0)})}var e=this,f=a.offset().top;b(),d.scroll(b),c("select").each(function(a,b){var d=c(this);d.parents("."+h[0])[0]||"none"===d.css("display")||d.attr({layer:"1"}).hide(),d=null})},g.pt.openLayer=function(){var a=this;f.zIndex=a.config.zIndex,f.setTop=function(a){var b=function(){f.zIndex++,a.css("z-index",f.zIndex+1)};return f.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),f.zIndex}},e.record=function(a){var b=[a.outerWidth(),a.outerHeight(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},e.rescollbar=function(a){h.html.attr("layer-full")==a&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},f.getChildFrame=function(a,b){return b=b||c("."+h[4]).attr("times"),c("#"+h[0]+b).find("iframe").contents().find(a)},f.getFrameIndex=function(a){return c("#"+a).parents("."+h[4]).attr("times")},f.iframeAuto=function(a){if(a){var b=f.getChildFrame("body",a).outerHeight(),d=c("#"+h[0]+a),e=d.find(h[1]).outerHeight()||0,g=d.find("."+h[6]).outerHeight()||0;d.css({height:b+e+g}),d.find("iframe").css({height:b})}},f.iframeSrc=function(a,b){c("#"+h[0]+a).find("iframe").attr("src",b)},f.style=function(a,b){var d=c("#"+h[0]+a),f=d.attr("type"),g=d.find(h[1]).outerHeight()||0,i=d.find("."+h[6]).outerHeight()||0;(f===e.type[1]||f===e.type[2])&&(d.css(b),f===e.type[2]&&d.find("iframe").css({height:parseFloat(b.height)-g-i}))},f.min=function(a,b){var d=c("#"+h[0]+a),g=d.find(h[1]).outerHeight()||0;e.record(d),f.style(a,{width:180,height:g,overflow:"hidden"}),d.find(".layui-layer-min").hide(),"page"===d.attr("type")&&d.find(h[4]).hide(),e.rescollbar(a)},f.restore=function(a){var b=c("#"+h[0]+a),d=b.attr("area").split(",");b.attr("type");f.style(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3]),overflow:"visible"}),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(h[4]).show(),e.rescollbar(a)},f.full=function(a){var b,g=c("#"+h[0]+a);e.record(g),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===g.css("position");f.style(a,{top:b?0:d.scrollTop(),left:b?0:d.scrollLeft(),width:d.width(),height:d.height()}),g.find(".layui-layer-min").hide()},100)},f.title=function(a,b){var d=c("#"+h[0]+(b||f.index)).find(h[1]);d.html(a)},f.close=function(a){var b=c("#"+h[0]+a),d=b.attr("type");if(b[0]){if(d===e.type[1]&&"object"===b.attr("conType")){b.children(":not(."+h[5]+")").remove();for(var g=0;2>g;g++)b.find(".layui-layer-wrap").unwrap().hide()}else{if(d===e.type[2])try{var i=c("#"+h[4]+a)[0];i.contentWindow.document.write(""),i.contentWindow.close(),b.find("."+h[5])[0].removeChild(i)}catch(j){}b[0].innerHTML="",b.remove()}c("#layui-layer-moves, #layui-layer-shade"+a).remove(),f.ie6&&e.reselect(),e.rescollbar(a),c(document).off("keydown",e.enter),"function"==typeof e.end[a]&&e.end[a](),delete e.end[a]}},f.closeAll=function(a){c.each(c("."+h[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&f.close(b.attr("times")),d=null})},e.run=function(){c=jQuery,d=c(a),h.html=c("html"),f.open=function(a){var b=new g(a);return b.index}},"function"==typeof define?define(function(){return e.run(),f}):function(){a.layer=f,e.run(),f.use("skin/layer.css")}()}(window);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"4px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",width:a.width,height:a.height});b.css({width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);

function NavToggle(){$(".navbar-minimalize").trigger("click")}function SmoothlyMenu(){$("body").hasClass("mini-navbar")?$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},300)):$("#side-menu").removeAttr("style"):($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},100))}function localStorageSupport(){return"localStorage"in window&&null!==window.localStorage}layer.config({extend:["extend/layer.ext.js","skin/moon/style.css"],skin:"layer-ext-moon"}),$(document).ready(function(){function e(){var e=$("body > #wrapper").height()-61;$(".sidebard-panel").css("min-height",e+"px")}$("#side-menu").metisMenu(),$(".right-sidebar-toggle").click(function(){$("#right-sidebar").toggleClass("sidebar-open")}),$(".sidebar-container").slimScroll({height:"100%",railOpacity:.4,wheelStep:10}),$(".open-small-chat").click(function(){$(this).children().toggleClass("fa-comments").toggleClass("fa-remove"),$(".small-chat-box").toggleClass("active")}),$(".small-chat-box .content").slimScroll({height:"234px",railOpacity:.4}),$(".check-link").click(function(){var e=$(this).find("i"),a=$(this).next("span");return e.toggleClass("fa-check-square").toggleClass("fa-square-o"),a.toggleClass("todo-completed"),!1}),$(function(){$(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9,alwaysVisible:!1})}),$(".navbar-minimalize").click(function(){$("body").toggleClass("mini-navbar"),SmoothlyMenu()}),e(),$(window).bind("load resize click scroll",function(){$("body").hasClass("body-small")||e()}),$(window).scroll(function(){$(window).scrollTop()>0&&!$("body").hasClass("fixed-nav")?$("#right-sidebar").addClass("sidebar-top"):$("#right-sidebar").removeClass("sidebar-top")}),$(".full-height-scroll").slimScroll({height:"100%"}),$("#side-menu>li").click(function(){$("body").hasClass("mini-navbar")&&NavToggle()}),$("#side-menu>li li a").click(function(){$(window).width()<769&&NavToggle()}),$(".nav-close").click(NavToggle),/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&$("#content-main").css("overflow-y","auto")}),$(window).bind("load resize",function(){$(this).width()<769&&($("body").addClass("mini-navbar"),$(".navbar-static-side").fadeIn())}),$(function(){if($("#fixednavbar").click(function(){$("#fixednavbar").is(":checked")?($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"),$("body").removeClass("boxed-layout"),$("body").addClass("fixed-nav"),$("#boxedlayout").prop("checked",!1),localStorageSupport&&localStorage.setItem("boxedlayout","off"),localStorageSupport&&localStorage.setItem("fixednavbar","on")):($(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top"),$("body").removeClass("fixed-nav"),localStorageSupport&&localStorage.setItem("fixednavbar","off"))}),$("#collapsemenu").click(function(){$("#collapsemenu").is(":checked")?($("body").addClass("mini-navbar"),SmoothlyMenu(),localStorageSupport&&localStorage.setItem("collapse_menu","on")):($("body").removeClass("mini-navbar"),SmoothlyMenu(),localStorageSupport&&localStorage.setItem("collapse_menu","off"))}),$("#boxedlayout").click(function(){$("#boxedlayout").is(":checked")?($("body").addClass("boxed-layout"),$("#fixednavbar").prop("checked",!1),$(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top"),$("body").removeClass("fixed-nav"),localStorageSupport&&localStorage.setItem("fixednavbar","off"),localStorageSupport&&localStorage.setItem("boxedlayout","on")):($("body").removeClass("boxed-layout"),localStorageSupport&&localStorage.setItem("boxedlayout","off"))}),$(".s-skin-0").click(function(){return $("body").removeClass("skin-1"),$("body").removeClass("skin-2"),$("body").removeClass("skin-3"),!1}),$(".s-skin-1").click(function(){return $("body").removeClass("skin-2"),$("body").removeClass("skin-3"),$("body").addClass("skin-1"),!1}),$(".s-skin-3").click(function(){return $("body").removeClass("skin-1"),$("body").removeClass("skin-2"),$("body").addClass("skin-3"),!1}),localStorageSupport){var e=localStorage.getItem("collapse_menu"),a=localStorage.getItem("fixednavbar"),o=localStorage.getItem("boxedlayout");"on"==e&&$("#collapsemenu").prop("checked","checked"),"on"==a&&$("#fixednavbar").prop("checked","checked"),"on"==o&&$("#boxedlayout").prop("checked","checked")}if(localStorageSupport){var e=localStorage.getItem("collapse_menu"),a=localStorage.getItem("fixednavbar"),o=localStorage.getItem("boxedlayout"),l=$("body");"on"==e&&(l.hasClass("body-small")||l.addClass("mini-navbar")),"on"==a&&($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"),l.addClass("fixed-nav")),"on"==o&&l.addClass("boxed-layout")}});

$(function(){function f(l){var k=0;$(l).each(function(){k+=$(this).outerWidth(true)});return k}function g(n){var o=f($(n).prevAll()),q=f($(n).nextAll());var l=f($(".content-tabs").children().not(".J_menuTabs"));var k=$(".content-tabs").outerWidth(true)-l;var p=0;if($(".page-tabs-content").outerWidth()<k){p=0}else{if(q<=(k-$(n).outerWidth(true)-$(n).next().outerWidth(true))){if((k-$(n).next().outerWidth(true))>q){p=o;var m=n;while((p-$(m).outerWidth())>($(".page-tabs-content").outerWidth()-k)){p-=$(m).prev().outerWidth();m=$(m).prev()}}}else{if(o>(k-$(n).outerWidth(true)-$(n).prev().outerWidth(true))){p=o-$(n).prev().outerWidth(true)}}}$(".page-tabs-content").animate({marginLeft:0-p+"px"},"fast")}function a(){var o=Math.abs(parseInt($(".page-tabs-content").css("margin-left")));var l=f($(".content-tabs").children().not(".J_menuTabs"));var k=$(".content-tabs").outerWidth(true)-l;var p=0;if($(".page-tabs-content").width()<k){return false}else{var m=$(".J_menuTab:first");var n=0;while((n+$(m).outerWidth(true))<=o){n+=$(m).outerWidth(true);m=$(m).next()}n=0;if(f($(m).prevAll())>k){while((n+$(m).outerWidth(true))<(k)&&m.length>0){n+=$(m).outerWidth(true);m=$(m).prev()}p=f($(m).prevAll())}}$(".page-tabs-content").animate({marginLeft:0-p+"px"},"fast")}function b(){var o=Math.abs(parseInt($(".page-tabs-content").css("margin-left")));var l=f($(".content-tabs").children().not(".J_menuTabs"));var k=$(".content-tabs").outerWidth(true)-l;var p=0;if($(".page-tabs-content").width()<k){return false}else{var m=$(".J_menuTab:first");var n=0;while((n+$(m).outerWidth(true))<=o){n+=$(m).outerWidth(true);m=$(m).next()}n=0;while((n+$(m).outerWidth(true))<(k)&&m.length>0){n+=$(m).outerWidth(true);m=$(m).next()}p=f($(m).prevAll());if(p>0){$(".page-tabs-content").animate({marginLeft:0-p+"px"},"fast")}}}$(".J_menuItem").each(function(k){if(!$(this).attr("data-index")){$(this).attr("data-index",k)}});function c(){var o=$(this).attr("href"),m=$(this).data("index"),l=$.trim($(this).text()),k=true;if(o==undefined||$.trim(o).length==0){return false}$(".J_menuTab").each(function(){if($(this).data("id")==o){if(!$(this).hasClass("active")){$(this).addClass("active").siblings(".J_menuTab").removeClass("active");g(this);$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==o){$(this).show().siblings(".J_iframe").hide();return false}})}k=false;return false}});if(k){var p='<a href="javascript:;" class="active J_menuTab" data-id="'+o+'">'+l+' <i class="fa fa-times-circle"></i></a>';$(".J_menuTab").removeClass("active");var n='<iframe class="J_iframe" name="iframe'+m+'" width="100%" height="100%" src="'+o+'" frameborder="0" data-id="'+o+'" seamless></iframe>';$(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(n);$(".J_menuTabs .page-tabs-content").append(p);g($(".J_menuTab.active"))}return false}$(".J_menuItem").on("click",c);function h(){var m=$(this).parents(".J_menuTab").data("id");var l=$(this).parents(".J_menuTab").width();if($(this).parents(".J_menuTab").hasClass("active")){if($(this).parents(".J_menuTab").next(".J_menuTab").size()){var k=$(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").data("id");$(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").addClass("active");$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==k){$(this).show().siblings(".J_iframe").hide();return false}});var n=parseInt($(".page-tabs-content").css("margin-left"));if(n<0){$(".page-tabs-content").animate({marginLeft:(n+l)+"px"},"fast")}$(this).parents(".J_menuTab").remove();$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==m){$(this).remove();return false}})}if($(this).parents(".J_menuTab").prev(".J_menuTab").size()){var k=$(this).parents(".J_menuTab").prev(".J_menuTab:last").data("id");$(this).parents(".J_menuTab").prev(".J_menuTab:last").addClass("active");$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==k){$(this).show().siblings(".J_iframe").hide();return false}});$(this).parents(".J_menuTab").remove();$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==m){$(this).remove();return false}})}}else{$(this).parents(".J_menuTab").remove();$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==m){$(this).remove();return false}});g($(".J_menuTab.active"))}return false}$(".J_menuTabs").on("click",".J_menuTab i",h);function i(){$(".page-tabs-content").children("[data-id]").not(":first").not(".active").each(function(){$('.J_iframe[data-id="'+$(this).data("id")+'"]').remove();$(this).remove()});$(".page-tabs-content").css("margin-left","0")}$(".J_tabCloseOther").on("click",i);function j(){g($(".J_menuTab.active"))}$(".J_tabShowActive").on("click",j);function e(){if(!$(this).hasClass("active")){var k=$(this).data("id");$(".J_mainContent .J_iframe").each(function(){if($(this).data("id")==k){$(this).show().siblings(".J_iframe").hide();return false}});$(this).addClass("active").siblings(".J_menuTab").removeClass("active");g(this)}}$(".J_menuTabs").on("click",".J_menuTab",e);
function d(){var l=$('.J_iframe[data-id="'+$(this).data("id")+'"]');var k=l.attr("src")}$(".J_menuTabs").on("dblclick",".J_menuTab",d);$(".J_tabLeft").on("click",a);$(".J_tabRight").on("click",b);$(".J_tabCloseAll").on("click",function(){$(".page-tabs-content").children("[data-id]").not(":first").each(function(){$('.J_iframe[data-id="'+$(this).data("id")+'"]').remove();$(this).remove()});$(".page-tabs-content").children("[data-id]:first").each(function(){$('.J_iframe[data-id="'+$(this).data("id")+'"]').show();$(this).addClass("active")});$(".page-tabs-content").css("margin-left","0")})});

/*! pace 0.5.1 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W=[].slice,X={}.hasOwnProperty,Y=function(a,b){function c(){this.constructor=a}for(var d in b)X.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Z=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?W.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?W.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)X.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),T=["ajax","document","eventLag","elements"],P=0,R=T.length;R>P;P++)J=T[P],C[J]===!0&&(C[J]=t[J]);i=function(a){function b(){return U=b.__super__.constructor.apply(this,arguments)}return Y(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),O=window.XMLHttpRequest,N=window.XDomainRequest,M=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},I=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Z.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return I(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new O(b),a(c),c},v(window.XMLHttpRequest,O),null!=N&&(window.XDomainRequest=function(){var b;return b=new N,a(b),b},v(window.XDomainRequest,N)),null!=M&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=null!=b?new M(a,b):new M(a),I("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,M))}return Y(b,a),b}(h),Q=null,x=function(){return null==Q&&(Q=new j),Q},H=function(a){var b,c,d,e;for(e=C.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},x().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,H(g)?void 0:Pace.running||C.restartOnRequestAfter===!1&&"force"!==I(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(J=i[c],J instanceof a){J.watch.apply(J,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,H(e)?void 0:(c="socket"===d?new m(b):new n(b),this.elements.push(c))},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),K=null,G=null,q=null,L=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(S=window.history.pushState,window.history.pushState=function(){return y(),S.apply(window.history,arguments)}),null!=window.history.replaceState&&(V=window.history.replaceState,window.history.replaceState=function(){return y(),V.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=K=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&K.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)J=i[d],K.push(new J(C));return Pace.bar=q=new b,G=[],L=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){var a;return Pace.running=!0,q.render(),a=B(),r=!1,o=F(function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(k=100-q.progress,e=o=0,f=!0,i=p=0,t=K.length;t>p;i=++p)for(J=K[i],n=null!=G[i]?G[i]:G[i]=[],h=null!=(v=J.elements)?v:[J],j=s=0,u=h.length;u>s;j=++s)g=h[j],m=null!=n[j]?n[j]:n[j]=new l(g),f&=m.done,m.done||(e++,o+=m.tick(b));return d=o/e,q.update(L.tick(b,d)),q.done()||f||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(B()-a),0)))):c()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
    v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
    g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
    f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
    _add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
        f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
        b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
        'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
        A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
        b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);

/* WebUploader 0.1.6 */!function(a,b){var c,d={},e=function(a,b){var c,d,e;if("string"==typeof a)return h(a);for(c=[],d=a.length,e=0;d>e;e++)c.push(h(a[e]));return b.apply(null,c)},f=function(a,b,c){2===arguments.length&&(c=b,b=null),e(b||[],function(){g(a,c,arguments)})},g=function(a,b,c){var f,g={exports:b};"function"==typeof b&&(c.length||(c=[e,g.exports,g]),f=b.apply(null,c),void 0!==f&&(g.exports=f)),d[a]=g.exports},h=function(b){var c=d[b]||a[b];if(!c)throw new Error("`"+b+"` is undefined");return c},i=function(a){var b,c,e,f,g,h;h=function(a){return a&&a.charAt(0).toUpperCase()+a.substr(1)};for(b in d)if(c=a,d.hasOwnProperty(b)){for(e=b.split("/"),g=h(e.pop());f=h(e.shift());)c[f]=c[f]||{},c=c[f];c[g]=d[b]}return a},j=function(c){return a.__dollar=c,i(b(a,f,e))};"object"==typeof module&&"object"==typeof module.exports?module.exports=j():"function"==typeof define&&define.amd?define(["jquery"],j):(c=a.WebUploader,a.WebUploader=j(),a.WebUploader.noConflict=function(){a.WebUploader=c})}(window,function(a,b,c){return b("dollar-third",[],function(){var b=a.require,c=a.__dollar||a.jQuery||a.Zepto||b("jquery")||b("zepto");if(!c)throw new Error("jQuery or Zepto not found!");return c}),b("dollar",["dollar-third"],function(a){return a}),b("promise-third",["dollar"],function(a){return{Deferred:a.Deferred,when:a.when,isPromise:function(a){return a&&"function"==typeof a.then}}}),b("promise",["promise-third"],function(a){return a}),b("base",["dollar","promise"],function(b,c){function d(a){return function(){return h.apply(a,arguments)}}function e(a,b){return function(){return a.apply(b,arguments)}}function f(a){var b;return Object.create?Object.create(a):(b=function(){},b.prototype=a,new b)}var g=function(){},h=Function.call;return{version:"0.1.6",$:b,Deferred:c.Deferred,isPromise:c.isPromise,when:c.when,browser:function(a){var b={},c=a.match(/WebKit\/([\d.]+)/),d=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),e=a.match(/MSIE\s([\d\.]+)/)||a.match(/(?:trident)(?:.*rv:([\w.]+))?/i),f=a.match(/Firefox\/([\d.]+)/),g=a.match(/Safari\/([\d.]+)/),h=a.match(/OPR\/([\d.]+)/);return c&&(b.webkit=parseFloat(c[1])),d&&(b.chrome=parseFloat(d[1])),e&&(b.ie=parseFloat(e[1])),f&&(b.firefox=parseFloat(f[1])),g&&(b.safari=parseFloat(g[1])),h&&(b.opera=parseFloat(h[1])),b}(navigator.userAgent),os:function(a){var b={},c=a.match(/(?:Android);?[\s\/]+([\d.]+)?/),d=a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);return c&&(b.android=parseFloat(c[1])),d&&(b.ios=parseFloat(d[1].replace(/_/g,"."))),b}(navigator.userAgent),inherits:function(a,c,d){var e;return"function"==typeof c?(e=c,c=null):e=c&&c.hasOwnProperty("constructor")?c.constructor:function(){return a.apply(this,arguments)},b.extend(!0,e,a,d||{}),e.__super__=a.prototype,e.prototype=f(a.prototype),c&&b.extend(!0,e.prototype,c),e},noop:g,bindFn:e,log:function(){return a.console?e(console.log,console):g}(),nextTick:function(){return function(a){setTimeout(a,1)}}(),slice:d([].slice),guid:function(){var a=0;return function(b){for(var c=(+new Date).toString(32),d=0;5>d;d++)c+=Math.floor(65535*Math.random()).toString(32);return(b||"wu_")+c+(a++).toString(32)}}(),formatSize:function(a,b,c){var d;for(c=c||["B","K","M","G","TB"];(d=c.shift())&&a>1024;)a/=1024;return("B"===d?a:a.toFixed(b||2))+d}}}),b("mediator",["base"],function(a){function b(a,b,c,d){return f.grep(a,function(a){return!(!a||b&&a.e!==b||c&&a.cb!==c&&a.cb._cb!==c||d&&a.ctx!==d)})}function c(a,b,c){f.each((a||"").split(h),function(a,d){c(d,b)})}function d(a,b){for(var c,d=!1,e=-1,f=a.length;++e<f;)if(c=a[e],c.cb.apply(c.ctx2,b)===!1){d=!0;break}return!d}var e,f=a.$,g=[].slice,h=/\s+/;return e={on:function(a,b,d){var e,f=this;return b?(e=this._events||(this._events=[]),c(a,b,function(a,b){var c={e:a};c.cb=b,c.ctx=d,c.ctx2=d||f,c.id=e.length,e.push(c)}),this):this},once:function(a,b,d){var e=this;return b?(c(a,b,function(a,b){var c=function(){return e.off(a,c),b.apply(d||e,arguments)};c._cb=b,e.on(a,c,d)}),e):e},off:function(a,d,e){var g=this._events;return g?a||d||e?(c(a,d,function(a,c){f.each(b(g,a,c,e),function(){delete g[this.id]})}),this):(this._events=[],this):this},trigger:function(a){var c,e,f;return this._events&&a?(c=g.call(arguments,1),e=b(this._events,a),f=b(this._events,"all"),d(e,c)&&d(f,arguments)):this}},f.extend({installTo:function(a){return f.extend(a,e)}},e)}),b("uploader",["base","mediator"],function(a,b){function c(a){this.options=d.extend(!0,{},c.options,a),this._init(this.options)}var d=a.$;return c.options={},b.installTo(c.prototype),d.each({upload:"start-upload",stop:"stop-upload",getFile:"get-file",getFiles:"get-files",addFile:"add-file",addFiles:"add-file",sort:"sort-files",removeFile:"remove-file",cancelFile:"cancel-file",skipFile:"skip-file",retry:"retry",isInProgress:"is-in-progress",makeThumb:"make-thumb",md5File:"md5-file",getDimension:"get-dimension",addButton:"add-btn",predictRuntimeType:"predict-runtime-type",refresh:"refresh",disable:"disable",enable:"enable",reset:"reset"},function(a,b){c.prototype[a]=function(){return this.request(b,arguments)}}),d.extend(c.prototype,{state:"pending",_init:function(a){var b=this;b.request("init",a,function(){b.state="ready",b.trigger("ready")})},option:function(a,b){var c=this.options;return arguments.length>1?(d.isPlainObject(b)&&d.isPlainObject(c[a])?d.extend(c[a],b):c[a]=b,void 0):a?c[a]:c},getStats:function(){var a=this.request("get-stats");return a?{successNum:a.numOfSuccess,progressNum:a.numOfProgress,cancelNum:a.numOfCancel,invalidNum:a.numOfInvalid,uploadFailNum:a.numOfUploadFailed,queueNum:a.numOfQueue,interruptNum:a.numofInterrupt}:{}},trigger:function(a){var c=[].slice.call(arguments,1),e=this.options,f="on"+a.substring(0,1).toUpperCase()+a.substring(1);return b.trigger.apply(this,arguments)===!1||d.isFunction(e[f])&&e[f].apply(this,c)===!1||d.isFunction(this[f])&&this[f].apply(this,c)===!1||b.trigger.apply(b,[this,a].concat(c))===!1?!1:!0},destroy:function(){this.request("destroy",arguments),this.off()},request:a.noop}),a.create=c.create=function(a){return new c(a)},a.Uploader=c,c}),b("runtime/runtime",["base","mediator"],function(a,b){function c(b){this.options=d.extend({container:document.body},b),this.uid=a.guid("rt_")}var d=a.$,e={},f=function(a){for(var b in a)if(a.hasOwnProperty(b))return b;return null};return d.extend(c.prototype,{getContainer:function(){var a,b,c=this.options;return this._container?this._container:(a=d(c.container||document.body),b=d(document.createElement("div")),b.attr("id","rt_"+this.uid),b.css({position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),a.append(b),a.addClass("webuploader-container"),this._container=b,this._parent=a,b)},init:a.noop,exec:a.noop,destroy:function(){this._container&&this._container.remove(),this._parent&&this._parent.removeClass("webuploader-container"),this.off()}}),c.orders="html5,flash",c.addRuntime=function(a,b){e[a]=b},c.hasRuntime=function(a){return!!(a?e[a]:f(e))},c.create=function(a,b){var g,h;if(b=b||c.orders,d.each(b.split(/\s*,\s*/g),function(){return e[this]?(g=this,!1):void 0}),g=g||f(e),!g)throw new Error("Runtime Error");return h=new e[g](a)},b.installTo(c.prototype),c}),b("runtime/client",["base","mediator","runtime/runtime"],function(a,b,c){function d(b,d){var f,g=a.Deferred();this.uid=a.guid("client_"),this.runtimeReady=function(a){return g.done(a)},this.connectRuntime=function(b,h){if(f)throw new Error("already connected!");return g.done(h),"string"==typeof b&&e.get(b)&&(f=e.get(b)),f=f||e.get(null,d),f?(a.$.extend(f.options,b),f.__promise.then(g.resolve),f.__client++):(f=c.create(b,b.runtimeOrder),f.__promise=g.promise(),f.once("ready",g.resolve),f.init(),e.add(f),f.__client=1),d&&(f.__standalone=d),f},this.getRuntime=function(){return f},this.disconnectRuntime=function(){f&&(f.__client--,f.__client<=0&&(e.remove(f),delete f.__promise,f.destroy()),f=null)},this.exec=function(){if(f){var c=a.slice(arguments);return b&&c.unshift(b),f.exec.apply(this,c)}},this.getRuid=function(){return f&&f.uid},this.destroy=function(a){return function(){a&&a.apply(this,arguments),this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()}}(this.destroy)}var e;return e=function(){var a={};return{add:function(b){a[b.uid]=b},get:function(b,c){var d;if(b)return a[b];for(d in a)if(!c||!a[d].__standalone)return a[d];return null},remove:function(b){delete a[b.uid]}}}(),b.installTo(d.prototype),d}),b("lib/dnd",["base","mediator","runtime/client"],function(a,b,c){function d(a){a=this.options=e.extend({},d.options,a),a.container=e(a.container),a.container.length&&c.call(this,"DragAndDrop")}var e=a.$;return d.options={accept:null,disableGlobalDnd:!1},a.inherits(c,{constructor:d,init:function(){var a=this;a.connectRuntime(a.options,function(){a.exec("init"),a.trigger("ready")})}}),b.installTo(d.prototype),d}),b("widgets/widget",["base","uploader"],function(a,b){function c(a){if(!a)return!1;var b=a.length,c=e.type(a);return 1===a.nodeType&&b?!0:"array"===c||"function"!==c&&"string"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}function d(a){this.owner=a,this.options=a.options}var e=a.$,f=b.prototype._init,g=b.prototype.destroy,h={},i=[];return e.extend(d.prototype,{init:a.noop,invoke:function(a,b){var c=this.responseMap;return c&&a in c&&c[a]in this&&e.isFunction(this[c[a]])?this[c[a]].apply(this,b):h},request:function(){return this.owner.request.apply(this.owner,arguments)}}),e.extend(b.prototype,{_init:function(){var a=this,b=a._widgets=[],c=a.options.disableWidgets||"";return e.each(i,function(d,e){(!c||!~c.indexOf(e._name))&&b.push(new e(a))}),f.apply(a,arguments)},request:function(b,d,e){var f,g,i,j,k=0,l=this._widgets,m=l&&l.length,n=[],o=[];for(d=c(d)?d:[d];m>k;k++)f=l[k],g=f.invoke(b,d),g!==h&&(a.isPromise(g)?o.push(g):n.push(g));return e||o.length?(i=a.when.apply(a,o),j=i.pipe?"pipe":"then",i[j](function(){var b=a.Deferred(),c=arguments;return 1===c.length&&(c=c[0]),setTimeout(function(){b.resolve(c)},1),b.promise()})[e?j:"done"](e||a.noop)):n[0]},destroy:function(){g.apply(this,arguments),this._widgets=null}}),b.register=d.register=function(b,c){var f,g={init:"init",destroy:"destroy",name:"anonymous"};return 1===arguments.length?(c=b,e.each(c,function(a){return"_"===a[0]||"name"===a?("name"===a&&(g.name=c.name),void 0):(g[a.replace(/[A-Z]/g,"-$&").toLowerCase()]=a,void 0)})):g=e.extend(g,b),c.responseMap=g,f=a.inherits(d,c),f._name=g.name,i.push(f),f},b.unRegister=d.unRegister=function(a){if(a&&"anonymous"!==a)for(var b=i.length;b--;)i[b]._name===a&&i.splice(b,1)},d}),b("widgets/filednd",["base","uploader","lib/dnd","widgets/widget"],function(a,b,c){var d=a.$;return b.options.dnd="",b.register({name:"dnd",init:function(b){if(b.dnd&&"html5"===this.request("predict-runtime-type")){var e,f=this,g=a.Deferred(),h=d.extend({},{disableGlobalDnd:b.disableGlobalDnd,container:b.dnd,accept:b.accept});return this.dnd=e=new c(h),e.once("ready",g.resolve),e.on("drop",function(a){f.request("add-file",[a])}),e.on("accept",function(a){return f.owner.trigger("dndAccept",a)}),e.init(),g.promise()}},destroy:function(){this.dnd&&this.dnd.destroy()}})}),b("lib/filepaste",["base","mediator","runtime/client"],function(a,b,c){function d(a){a=this.options=e.extend({},a),a.container=e(a.container||document.body),c.call(this,"FilePaste")}var e=a.$;return a.inherits(c,{constructor:d,init:function(){var a=this;a.connectRuntime(a.options,function(){a.exec("init"),a.trigger("ready")})}}),b.installTo(d.prototype),d}),b("widgets/filepaste",["base","uploader","lib/filepaste","widgets/widget"],function(a,b,c){var d=a.$;return b.register({name:"paste",init:function(b){if(b.paste&&"html5"===this.request("predict-runtime-type")){var e,f=this,g=a.Deferred(),h=d.extend({},{container:b.paste,accept:b.accept});return this.paste=e=new c(h),e.once("ready",g.resolve),e.on("paste",function(a){f.owner.request("add-file",[a])}),e.init(),g.promise()}},destroy:function(){this.paste&&this.paste.destroy()}})}),b("lib/blob",["base","runtime/client"],function(a,b){function c(a,c){var d=this;d.source=c,d.ruid=a,this.size=c.size||0,this.type=!c.type&&this.ext&&~"jpg,jpeg,png,gif,bmp".indexOf(this.ext)?"image/"+("jpg"===this.ext?"jpeg":this.ext):c.type||"application/octet-stream",b.call(d,"Blob"),this.uid=c.uid||this.uid,a&&d.connectRuntime(a)}return a.inherits(b,{constructor:c,slice:function(a,b){return this.exec("slice",a,b)},getSource:function(){return this.source}}),c}),b("lib/file",["base","lib/blob"],function(a,b){function c(a,c){var f;this.name=c.name||"untitled"+d++,f=e.exec(c.name)?RegExp.$1.toLowerCase():"",!f&&c.type&&(f=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type)?RegExp.$1.toLowerCase():"",this.name+="."+f),this.ext=f,this.lastModifiedDate=c.lastModifiedDate||(new Date).toLocaleString(),b.apply(this,arguments)}var d=1,e=/\.([^.]+)$/;return a.inherits(b,c)}),b("lib/filepicker",["base","runtime/client","lib/file"],function(b,c,d){function e(a){if(a=this.options=f.extend({},e.options,a),a.container=f(a.id),!a.container.length)throw new Error("按钮指定错误");a.innerHTML=a.innerHTML||a.label||a.container.html()||"",a.button=f(a.button||document.createElement("div")),a.button.html(a.innerHTML),a.container.html(a.button),c.call(this,"FilePicker",!0)}var f=b.$;return e.options={button:null,container:null,label:null,innerHTML:null,multiple:!0,accept:null,name:"file",style:"webuploader-pick"},b.inherits(c,{constructor:e,init:function(){var c=this,e=c.options,g=e.button,h=e.style;h&&g.addClass("webuploader-pick"),c.on("all",function(a){var b;switch(a){case"mouseenter":h&&g.addClass("webuploader-pick-hover");break;case"mouseleave":h&&g.removeClass("webuploader-pick-hover");break;case"change":b=c.exec("getFiles"),c.trigger("select",f.map(b,function(a){return a=new d(c.getRuid(),a),a._refer=e.container,a}),e.container)}}),c.connectRuntime(e,function(){c.refresh(),c.exec("init",e),c.trigger("ready")}),this._resizeHandler=b.bindFn(this.refresh,this),f(a).on("resize",this._resizeHandler)},refresh:function(){var a=this.getRuntime().getContainer(),b=this.options.button,c=b.outerWidth?b.outerWidth():b.width(),d=b.outerHeight?b.outerHeight():b.height(),e=b.offset();c&&d&&a.css({bottom:"auto",right:"auto",width:c+"px",height:d+"px"}).offset(e)},enable:function(){var a=this.options.button;a.removeClass("webuploader-pick-disable"),this.refresh()},disable:function(){var a=this.options.button;this.getRuntime().getContainer().css({top:"-99999px"}),a.addClass("webuploader-pick-disable")},destroy:function(){var b=this.options.button;f(a).off("resize",this._resizeHandler),b.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")}}),e}),b("widgets/filepicker",["base","uploader","lib/filepicker","widgets/widget"],function(a,b,c){var d=a.$;return d.extend(b.options,{pick:null,accept:null}),b.register({name:"picker",init:function(a){return this.pickers=[],a.pick&&this.addBtn(a.pick)},refresh:function(){d.each(this.pickers,function(){this.refresh()})},addBtn:function(b){var e=this,f=e.options,g=f.accept,h=[];if(b)return d.isPlainObject(b)||(b={id:b}),d(b.id).each(function(){var i,j,k;k=a.Deferred(),i=d.extend({},b,{accept:d.isPlainObject(g)?[g]:g,swf:f.swf,runtimeOrder:f.runtimeOrder,id:this}),j=new c(i),j.once("ready",k.resolve),j.on("select",function(a){e.owner.request("add-file",[a])}),j.on("dialogopen",function(){e.owner.trigger("dialogOpen",j.button)}),j.init(),e.pickers.push(j),h.push(k.promise())}),a.when.apply(a,h)},disable:function(){d.each(this.pickers,function(){this.disable()})},enable:function(){d.each(this.pickers,function(){this.enable()})},destroy:function(){d.each(this.pickers,function(){this.destroy()}),this.pickers=null}})}),b("lib/image",["base","runtime/client","lib/blob"],function(a,b,c){function d(a){this.options=e.extend({},d.options,a),b.call(this,"Image"),this.on("load",function(){this._info=this.exec("info"),this._meta=this.exec("meta")})}var e=a.$;return d.options={quality:90,crop:!1,preserveHeaders:!1,allowMagnify:!1},a.inherits(b,{constructor:d,info:function(a){return a?(this._info=a,this):this._info},meta:function(a){return a?(this._meta=a,this):this._meta},loadFromBlob:function(a){var b=this,c=a.getRuid();this.connectRuntime(c,function(){b.exec("init",b.options),b.exec("loadFromBlob",a)})},resize:function(){var b=a.slice(arguments);return this.exec.apply(this,["resize"].concat(b))},crop:function(){var b=a.slice(arguments);return this.exec.apply(this,["crop"].concat(b))},getAsDataUrl:function(a){return this.exec("getAsDataUrl",a)},getAsBlob:function(a){var b=this.exec("getAsBlob",a);return new c(this.getRuid(),b)}}),d}),b("widgets/image",["base","uploader","lib/image","widgets/widget"],function(a,b,c){var d,e=a.$;return d=function(a){var b=0,c=[],d=function(){for(var d;c.length&&a>b;)d=c.shift(),b+=d[0],d[1]()};return function(a,e,f){c.push([e,f]),a.once("destroy",function(){b-=e,setTimeout(d,1)}),setTimeout(d,1)}}(5242880),e.extend(b.options,{thumb:{width:110,height:110,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"},compress:{width:1600,height:1600,quality:90,allowMagnify:!1,crop:!1,preserveHeaders:!0}}),b.register({name:"image",makeThumb:function(a,b,f,g){var h,i;return a=this.request("get-file",a),a.type.match(/^image/)?(h=e.extend({},this.options.thumb),e.isPlainObject(f)&&(h=e.extend(h,f),f=null),f=f||h.width,g=g||h.height,i=new c(h),i.once("load",function(){a._info=a._info||i.info(),a._meta=a._meta||i.meta(),1>=f&&f>0&&(f=a._info.width*f),1>=g&&g>0&&(g=a._info.height*g),i.resize(f,g)}),i.once("complete",function(){b(!1,i.getAsDataUrl(h.type)),i.destroy()}),i.once("error",function(a){b(a||!0),i.destroy()}),d(i,a.source.size,function(){a._info&&i.info(a._info),a._meta&&i.meta(a._meta),i.loadFromBlob(a.source)}),void 0):(b(!0),void 0)},beforeSendFile:function(b){var d,f,g=this.options.compress||this.options.resize,h=g&&g.compressSize||0,i=g&&g.noCompressIfLarger||!1;return b=this.request("get-file",b),!g||!~"image/jpeg,image/jpg".indexOf(b.type)||b.size<h||b._compressed?void 0:(g=e.extend({},g),f=a.Deferred(),d=new c(g),f.always(function(){d.destroy(),d=null}),d.once("error",f.reject),d.once("load",function(){var a=g.width,c=g.height;b._info=b._info||d.info(),b._meta=b._meta||d.meta(),1>=a&&a>0&&(a=b._info.width*a),1>=c&&c>0&&(c=b._info.height*c),d.resize(a,c)}),d.once("complete",function(){var a,c;try{a=d.getAsBlob(g.type),c=b.size,(!i||a.size<c)&&(b.source=a,b.size=a.size,b.trigger("resize",a.size,c)),b._compressed=!0,f.resolve()}catch(e){f.resolve()}}),b._info&&d.info(b._info),b._meta&&d.meta(b._meta),d.loadFromBlob(b.source),f.promise())}})}),b("file",["base","mediator"],function(a,b){function c(){return f+g++}function d(a){this.name=a.name||"Untitled",this.size=a.size||0,this.type=a.type||"application/octet-stream",this.lastModifiedDate=a.lastModifiedDate||1*new Date,this.id=c(),this.ext=h.exec(this.name)?RegExp.$1:"",this.statusText="",i[this.id]=d.Status.INITED,this.source=a,this.loaded=0,this.on("error",function(a){this.setStatus(d.Status.ERROR,a)})}var e=a.$,f="WU_FILE_",g=0,h=/\.([^.]+)$/,i={};return e.extend(d.prototype,{setStatus:function(a,b){var c=i[this.id];"undefined"!=typeof b&&(this.statusText=b),a!==c&&(i[this.id]=a,this.trigger("statuschange",a,c))},getStatus:function(){return i[this.id]},getSource:function(){return this.source},destroy:function(){this.off(),delete i[this.id]}}),b.installTo(d.prototype),d.Status={INITED:"inited",QUEUED:"queued",PROGRESS:"progress",ERROR:"error",COMPLETE:"complete",CANCELLED:"cancelled",INTERRUPT:"interrupt",INVALID:"invalid"},d}),b("queue",["base","mediator","file"],function(a,b,c){function d(){this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0,numofDeleted:0,numofInterrupt:0},this._queue=[],this._map={}}var e=a.$,f=c.Status;return e.extend(d.prototype,{append:function(a){return this._queue.push(a),this._fileAdded(a),this},prepend:function(a){return this._queue.unshift(a),this._fileAdded(a),this},getFile:function(a){return"string"!=typeof a?a:this._map[a]},fetch:function(a){var b,c,d=this._queue.length;for(a=a||f.QUEUED,b=0;d>b;b++)if(c=this._queue[b],a===c.getStatus())return c;return null},sort:function(a){"function"==typeof a&&this._queue.sort(a)},getFiles:function(){for(var a,b=[].slice.call(arguments,0),c=[],d=0,f=this._queue.length;f>d;d++)a=this._queue[d],(!b.length||~e.inArray(a.getStatus(),b))&&c.push(a);return c},removeFile:function(a){var b=this._map[a.id];b&&(delete this._map[a.id],a.destroy(),this.stats.numofDeleted++)},_fileAdded:function(a){var b=this,c=this._map[a.id];c||(this._map[a.id]=a,a.on("statuschange",function(a,c){b._onFileStatusChange(a,c)}))},_onFileStatusChange:function(a,b){var c=this.stats;switch(b){case f.PROGRESS:c.numOfProgress--;break;case f.QUEUED:c.numOfQueue--;break;case f.ERROR:c.numOfUploadFailed--;break;case f.INVALID:c.numOfInvalid--;break;case f.INTERRUPT:c.numofInterrupt--}switch(a){case f.QUEUED:c.numOfQueue++;break;case f.PROGRESS:c.numOfProgress++;break;case f.ERROR:c.numOfUploadFailed++;break;case f.COMPLETE:c.numOfSuccess++;break;case f.CANCELLED:c.numOfCancel++;break;case f.INVALID:c.numOfInvalid++;break;case f.INTERRUPT:c.numofInterrupt++}}}),b.installTo(d.prototype),d}),b("widgets/queue",["base","uploader","queue","file","lib/file","runtime/client","widgets/widget"],function(a,b,c,d,e,f){var g=a.$,h=/\.\w+$/,i=d.Status;return b.register({name:"queue",init:function(b){var d,e,h,i,j,k,l,m=this;if(g.isPlainObject(b.accept)&&(b.accept=[b.accept]),b.accept){for(j=[],h=0,e=b.accept.length;e>h;h++)i=b.accept[h].extensions,i&&j.push(i);j.length&&(k="\\."+j.join(",").replace(/,/g,"$|\\.").replace(/\*/g,".*")+"$"),m.accept=new RegExp(k,"i")}return m.queue=new c,m.stats=m.queue.stats,"html5"===this.request("predict-runtime-type")?(d=a.Deferred(),this.placeholder=l=new f("Placeholder"),l.connectRuntime({runtimeOrder:"html5"},function(){m._ruid=l.getRuid(),d.resolve()}),d.promise()):void 0},_wrapFile:function(a){if(!(a instanceof d)){if(!(a instanceof e)){if(!this._ruid)throw new Error("Can't add external files.");a=new e(this._ruid,a)}a=new d(a)}return a},acceptFile:function(a){var b=!a||!a.size||this.accept&&h.exec(a.name)&&!this.accept.test(a.name);return!b},_addFile:function(a){var b=this;return a=b._wrapFile(a),b.owner.trigger("beforeFileQueued",a)?b.acceptFile(a)?(b.queue.append(a),b.owner.trigger("fileQueued",a),a):(b.owner.trigger("error","Q_TYPE_DENIED",a),void 0):void 0},getFile:function(a){return this.queue.getFile(a)},addFile:function(a){var b=this;a.length||(a=[a]),a=g.map(a,function(a){return b._addFile(a)}),a.length&&(b.owner.trigger("filesQueued",a),b.options.auto&&setTimeout(function(){b.request("start-upload")},20))},getStats:function(){return this.stats},removeFile:function(a,b){var c=this;a=a.id?a:c.queue.getFile(a),this.request("cancel-file",a),b&&this.queue.removeFile(a)},getFiles:function(){return this.queue.getFiles.apply(this.queue,arguments)},fetchFile:function(){return this.queue.fetch.apply(this.queue,arguments)},retry:function(a,b){var c,d,e,f=this;if(a)return a=a.id?a:f.queue.getFile(a),a.setStatus(i.QUEUED),b||f.request("start-upload"),void 0;for(c=f.queue.getFiles(i.ERROR),d=0,e=c.length;e>d;d++)a=c[d],a.setStatus(i.QUEUED);f.request("start-upload")},sortFiles:function(){return this.queue.sort.apply(this.queue,arguments)},reset:function(){this.owner.trigger("reset"),this.queue=new c,this.stats=this.queue.stats},destroy:function(){this.reset(),this.placeholder&&this.placeholder.destroy()}})}),b("widgets/runtime",["uploader","runtime/runtime","widgets/widget"],function(a,b){return a.support=function(){return b.hasRuntime.apply(b,arguments)},a.register({name:"runtime",init:function(){if(!this.predictRuntimeType())throw Error("Runtime Error")},predictRuntimeType:function(){var a,c,d=this.options.runtimeOrder||b.orders,e=this.type;if(!e)for(d=d.split(/\s*,\s*/g),a=0,c=d.length;c>a;a++)if(b.hasRuntime(d[a])){this.type=e=d[a];break}return e}})}),b("lib/transport",["base","runtime/client","mediator"],function(a,b,c){function d(a){var c=this;a=c.options=e.extend(!0,{},d.options,a||{}),b.call(this,"Transport"),this._blob=null,this._formData=a.formData||{},this._headers=a.headers||{},this.on("progress",this._timeout),this.on("load error",function(){c.trigger("progress",1),clearTimeout(c._timer)})}var e=a.$;return d.options={server:"",method:"POST",withCredentials:!1,fileVal:"file",timeout:12e4,formData:{},headers:{},sendAsBinary:!1},e.extend(d.prototype,{appendBlob:function(a,b,c){var d=this,e=d.options;d.getRuid()&&d.disconnectRuntime(),d.connectRuntime(b.ruid,function(){d.exec("init")}),d._blob=b,e.fileVal=a||e.fileVal,e.filename=c||e.filename},append:function(a,b){"object"==typeof a?e.extend(this._formData,a):this._formData[a]=b},setRequestHeader:function(a,b){"object"==typeof a?e.extend(this._headers,a):this._headers[a]=b},send:function(a){this.exec("send",a),this._timeout()},abort:function(){return clearTimeout(this._timer),this.exec("abort")},destroy:function(){this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()},getResponse:function(){return this.exec("getResponse")},getResponseAsJson:function(){return this.exec("getResponseAsJson")},getStatus:function(){return this.exec("getStatus")},_timeout:function(){var a=this,b=a.options.timeout;b&&(clearTimeout(a._timer),a._timer=setTimeout(function(){a.abort(),a.trigger("error","timeout")},b))}}),c.installTo(d.prototype),d}),b("widgets/upload",["base","uploader","file","lib/transport","widgets/widget"],function(a,b,c,d){function e(a,b){var c,d,e=[],f=a.source,g=f.size,h=b?Math.ceil(g/b):1,i=0,j=0;for(d={file:a,has:function(){return!!e.length},shift:function(){return e.shift()},unshift:function(a){e.unshift(a)}};h>j;)c=Math.min(b,g-i),e.push({file:a,start:i,end:b?i+c:g,total:g,chunks:h,chunk:j++,cuted:d}),i+=c;return a.blocks=e.concat(),a.remaning=e.length,d}var f=a.$,g=a.isPromise,h=c.Status;f.extend(b.options,{prepareNextFile:!1,chunked:!1,chunkSize:5242880,chunkRetry:2,threads:3,formData:{}}),b.register({name:"upload",init:function(){var b=this.owner,c=this;this.runing=!1,this.progress=!1,b.on("startUpload",function(){c.progress=!0}).on("uploadFinished",function(){c.progress=!1}),this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this.__tick=a.bindFn(this._tick,this),b.on("uploadComplete",function(a){a.blocks&&f.each(a.blocks,function(a,b){b.transport&&(b.transport.abort(),b.transport.destroy()),delete b.transport}),delete a.blocks,delete a.remaning})},reset:function(){this.request("stop-upload",!0),this.runing=!1,this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this._trigged=!1,this._promise=null},startUpload:function(b){var c=this;if(f.each(c.request("get-files",h.INVALID),function(){c.request("remove-file",this)}),b?(b=b.id?b:c.request("get-file",b),b.getStatus()===h.INTERRUPT?(b.setStatus(h.QUEUED),f.each(c.pool,function(a,c){c.file===b&&(c.transport&&c.transport.send(),b.setStatus(h.PROGRESS))})):b.getStatus()!==h.PROGRESS&&b.setStatus(h.QUEUED)):f.each(c.request("get-files",[h.INITED]),function(){this.setStatus(h.QUEUED)}),c.runing)return a.nextTick(c.__tick);c.runing=!0;var d=[];b||f.each(c.pool,function(a,b){var e=b.file;e.getStatus()===h.INTERRUPT&&(c._trigged=!1,d.push(e),b.transport&&b.transport.send())}),f.each(d,function(){this.setStatus(h.PROGRESS)}),b||f.each(c.request("get-files",h.INTERRUPT),function(){this.setStatus(h.PROGRESS)}),c._trigged=!1,a.nextTick(c.__tick),c.owner.trigger("startUpload")},stopUpload:function(b,c){var d,e=this;if(b===!0&&(c=b,b=null),e.runing!==!1){if(b){if(b=b.id?b:e.request("get-file",b),b.getStatus()!==h.PROGRESS&&b.getStatus()!==h.QUEUED)return;return b.setStatus(h.INTERRUPT),f.each(e.pool,function(a,c){return c.file===b?(d=c,!1):void 0}),d.transport&&d.transport.abort(),c&&(e._putback(d),e._popBlock(d)),a.nextTick(e.__tick)}e.runing=!1,this._promise&&this._promise.file&&this._promise.file.setStatus(h.INTERRUPT),c&&f.each(e.pool,function(a,b){b.transport&&b.transport.abort(),b.file.setStatus(h.INTERRUPT)}),e.owner.trigger("stopUpload")}},cancelFile:function(a){a=a.id?a:this.request("get-file",a),a.blocks&&f.each(a.blocks,function(a,b){var c=b.transport;c&&(c.abort(),c.destroy(),delete b.transport)}),a.setStatus(h.CANCELLED),this.owner.trigger("fileDequeued",a)},isInProgress:function(){return!!this.progress},_getStats:function(){return this.request("get-stats")},skipFile:function(a,b){a=a.id?a:this.request("get-file",a),a.setStatus(b||h.COMPLETE),a.skipped=!0,a.blocks&&f.each(a.blocks,function(a,b){var c=b.transport;c&&(c.abort(),c.destroy(),delete b.transport)}),this.owner.trigger("uploadSkip",a)},_tick:function(){var b,c,d=this,e=d.options;return d._promise?d._promise.always(d.__tick):(d.pool.length<e.threads&&(c=d._nextBlock())?(d._trigged=!1,b=function(b){d._promise=null,b&&b.file&&d._startSend(b),a.nextTick(d.__tick)},d._promise=g(c)?c.always(b):b(c)):d.remaning||d._getStats().numOfQueue||d._getStats().numofInterrupt||(d.runing=!1,d._trigged||a.nextTick(function(){d.owner.trigger("uploadFinished")}),d._trigged=!0),void 0)},_putback:function(a){var b;a.cuted.unshift(a),b=this.stack.indexOf(a.cuted),~b||this.stack.unshift(a.cuted)},_getStack:function(){for(var a,b=0;a=this.stack[b++];){if(a.has()&&a.file.getStatus()===h.PROGRESS)return a;(!a.has()||a.file.getStatus()!==h.PROGRESS&&a.file.getStatus()!==h.INTERRUPT)&&this.stack.splice(--b,1)}return null},_nextBlock:function(){var a,b,c,d,f=this,h=f.options;return(a=this._getStack())?(h.prepareNextFile&&!f.pending.length&&f._prepareNextFile(),a.shift()):f.runing?(!f.pending.length&&f._getStats().numOfQueue&&f._prepareNextFile(),b=f.pending.shift(),c=function(b){return b?(a=e(b,h.chunked?h.chunkSize:0),f.stack.push(a),a.shift()):null},g(b)?(d=b.file,b=b[b.pipe?"pipe":"then"](c),b.file=d,b):c(b)):void 0},_prepareNextFile:function(){var a,b=this,c=b.request("fetch-file"),d=b.pending;c&&(a=b.request("before-send-file",c,function(){return c.getStatus()===h.PROGRESS||c.getStatus()===h.INTERRUPT?c:b._finishFile(c)}),b.owner.trigger("uploadStart",c),c.setStatus(h.PROGRESS),a.file=c,a.done(function(){var b=f.inArray(a,d);~b&&d.splice(b,1,c)}),a.fail(function(a){c.setStatus(h.ERROR,a),b.owner.trigger("uploadError",c,a),b.owner.trigger("uploadComplete",c)}),d.push(a))},_popBlock:function(a){var b=f.inArray(a,this.pool);this.pool.splice(b,1),a.file.remaning--,this.remaning--},_startSend:function(b){var c,d=this,e=b.file;return e.getStatus()!==h.PROGRESS?(e.getStatus()===h.INTERRUPT&&d._putback(b),void 0):(d.pool.push(b),d.remaning++,b.blob=1===b.chunks?e.source:e.source.slice(b.start,b.end),c=d.request("before-send",b,function(){e.getStatus()===h.PROGRESS?d._doSend(b):(d._popBlock(b),a.nextTick(d.__tick))}),c.fail(function(){1===e.remaning?d._finishFile(e).always(function(){b.percentage=1,d._popBlock(b),d.owner.trigger("uploadComplete",e),a.nextTick(d.__tick)}):(b.percentage=1,d.updateFileProgress(e),d._popBlock(b),a.nextTick(d.__tick))}),void 0)},_doSend:function(b){var c,e,g=this,i=g.owner,j=g.options,k=b.file,l=new d(j),m=f.extend({},j.formData),n=f.extend({},j.headers);b.transport=l,l.on("destroy",function(){delete b.transport,g._popBlock(b),a.nextTick(g.__tick)}),l.on("progress",function(a){b.percentage=a,g.updateFileProgress(k)}),c=function(a){var c;return e=l.getResponseAsJson()||{},e._raw=l.getResponse(),c=function(b){a=b},i.trigger("uploadAccept",b,e,c)||(a=a||"server"),a},l.on("error",function(a,d){b.retried=b.retried||0,b.chunks>1&&~"http,abort".indexOf(a)&&b.retried<j.chunkRetry?(b.retried++,l.send()):(d||"server"!==a||(a=c(a)),k.setStatus(h.ERROR,a),i.trigger("uploadError",k,a),i.trigger("uploadComplete",k))}),l.on("load",function(){var a;return(a=c())?(l.trigger("error",a,!0),void 0):(1===k.remaning?g._finishFile(k,e):l.destroy(),void 0)}),m=f.extend(m,{id:k.id,name:k.name,type:k.type,lastModifiedDate:k.lastModifiedDate,size:k.size}),b.chunks>1&&f.extend(m,{chunks:b.chunks,chunk:b.chunk}),i.trigger("uploadBeforeSend",b,m,n),l.appendBlob(j.fileVal,b.blob,k.name),l.append(m),l.setRequestHeader(n),l.send()
},_finishFile:function(a,b,c){var d=this.owner;return d.request("after-send-file",arguments,function(){a.setStatus(h.COMPLETE),d.trigger("uploadSuccess",a,b,c)}).fail(function(b){a.getStatus()===h.PROGRESS&&a.setStatus(h.ERROR,b),d.trigger("uploadError",a,b)}).always(function(){d.trigger("uploadComplete",a)})},updateFileProgress:function(a){var b=0,c=0;a.blocks&&(f.each(a.blocks,function(a,b){c+=(b.percentage||0)*(b.end-b.start)}),b=c/a.size,this.owner.trigger("uploadProgress",a,b||0))}})}),b("widgets/validator",["base","uploader","file","widgets/widget"],function(a,b,c){var d,e=a.$,f={};return d={addValidator:function(a,b){f[a]=b},removeValidator:function(a){delete f[a]}},b.register({name:"validator",init:function(){var b=this;a.nextTick(function(){e.each(f,function(){this.call(b.owner)})})}}),d.addValidator("fileNumLimit",function(){var a=this,b=a.options,c=0,d=parseInt(b.fileNumLimit,10),e=!0;d&&(a.on("beforeFileQueued",function(a){return c>=d&&e&&(e=!1,this.trigger("error","Q_EXCEED_NUM_LIMIT",d,a),setTimeout(function(){e=!0},1)),c>=d?!1:!0}),a.on("fileQueued",function(){c++}),a.on("fileDequeued",function(){c--}),a.on("reset",function(){c=0}))}),d.addValidator("fileSizeLimit",function(){var a=this,b=a.options,c=0,d=parseInt(b.fileSizeLimit,10),e=!0;d&&(a.on("beforeFileQueued",function(a){var b=c+a.size>d;return b&&e&&(e=!1,this.trigger("error","Q_EXCEED_SIZE_LIMIT",d,a),setTimeout(function(){e=!0},1)),b?!1:!0}),a.on("fileQueued",function(a){c+=a.size}),a.on("fileDequeued",function(a){c-=a.size}),a.on("reset",function(){c=0}))}),d.addValidator("fileSingleSizeLimit",function(){var a=this,b=a.options,d=b.fileSingleSizeLimit;d&&a.on("beforeFileQueued",function(a){return a.size>d?(a.setStatus(c.Status.INVALID,"exceed_size"),this.trigger("error","F_EXCEED_SIZE",d,a),!1):void 0})}),d.addValidator("duplicate",function(){function a(a){for(var b,c=0,d=0,e=a.length;e>d;d++)b=a.charCodeAt(d),c=b+(c<<6)+(c<<16)-c;return c}var b=this,c=b.options,d={};c.duplicate||(b.on("beforeFileQueued",function(b){var c=b.__hash||(b.__hash=a(b.name+b.size+b.lastModifiedDate));return d[c]?(this.trigger("error","F_DUPLICATE",b),!1):void 0}),b.on("fileQueued",function(a){var b=a.__hash;b&&(d[b]=!0)}),b.on("fileDequeued",function(a){var b=a.__hash;b&&delete d[b]}),b.on("reset",function(){d={}}))}),d}),b("lib/md5",["runtime/client","mediator"],function(a,b){function c(){a.call(this,"Md5")}return b.installTo(c.prototype),c.prototype.loadFromBlob=function(a){var b=this;b.getRuid()&&b.disconnectRuntime(),b.connectRuntime(a.ruid,function(){b.exec("init"),b.exec("loadFromBlob",a)})},c.prototype.getResult=function(){return this.exec("getResult")},c}),b("widgets/md5",["base","uploader","lib/md5","lib/blob","widgets/widget"],function(a,b,c,d){return b.register({name:"md5",md5File:function(b,e,f){var g=new c,h=a.Deferred(),i=b instanceof d?b:this.request("get-file",b).source;return g.on("progress load",function(a){a=a||{},h.notify(a.total?a.loaded/a.total:1)}),g.on("complete",function(){h.resolve(g.getResult())}),g.on("error",function(a){h.reject(a)}),arguments.length>1&&(e=e||0,f=f||0,0>e&&(e=i.size+e),0>f&&(f=i.size+f),f=Math.min(f,i.size),i=i.slice(e,f)),g.loadFromBlob(i),h.promise()}})}),b("runtime/compbase",[],function(){function a(a,b){this.owner=a,this.options=a.options,this.getRuntime=function(){return b},this.getRuid=function(){return b.uid},this.trigger=function(){return a.trigger.apply(a,arguments)}}return a}),b("runtime/html5/runtime",["base","runtime/runtime","runtime/compbase"],function(b,c,d){function e(){var a={},d=this,e=this.destroy;c.apply(d,arguments),d.type=f,d.exec=function(c,e){var f,h=this,i=h.uid,j=b.slice(arguments,2);return g[c]&&(f=a[i]=a[i]||new g[c](h,d),f[e])?f[e].apply(f,j):void 0},d.destroy=function(){return e&&e.apply(this,arguments)}}var f="html5",g={};return b.inherits(c,{constructor:e,init:function(){var a=this;setTimeout(function(){a.trigger("ready")},1)}}),e.register=function(a,c){var e=g[a]=b.inherits(d,c);return e},a.Blob&&a.FileReader&&a.DataView&&c.addRuntime(f,e),e}),b("runtime/html5/blob",["runtime/html5/runtime","lib/blob"],function(a,b){return a.register("Blob",{slice:function(a,c){var d=this.owner.source,e=d.slice||d.webkitSlice||d.mozSlice;return d=e.call(d,a,c),new b(this.getRuid(),d)}})}),b("runtime/html5/dnd",["base","runtime/html5/runtime","lib/file"],function(a,b,c){var d=a.$,e="webuploader-dnd-";return b.register("DragAndDrop",{init:function(){var b=this.elem=this.options.container;this.dragEnterHandler=a.bindFn(this._dragEnterHandler,this),this.dragOverHandler=a.bindFn(this._dragOverHandler,this),this.dragLeaveHandler=a.bindFn(this._dragLeaveHandler,this),this.dropHandler=a.bindFn(this._dropHandler,this),this.dndOver=!1,b.on("dragenter",this.dragEnterHandler),b.on("dragover",this.dragOverHandler),b.on("dragleave",this.dragLeaveHandler),b.on("drop",this.dropHandler),this.options.disableGlobalDnd&&(d(document).on("dragover",this.dragOverHandler),d(document).on("drop",this.dropHandler))},_dragEnterHandler:function(a){var b,c=this,d=c._denied||!1;return a=a.originalEvent||a,c.dndOver||(c.dndOver=!0,b=a.dataTransfer.items,b&&b.length&&(c._denied=d=!c.trigger("accept",b)),c.elem.addClass(e+"over"),c.elem[d?"addClass":"removeClass"](e+"denied")),a.dataTransfer.dropEffect=d?"none":"copy",!1},_dragOverHandler:function(a){var b=this.elem.parent().get(0);return b&&!d.contains(b,a.currentTarget)?!1:(clearTimeout(this._leaveTimer),this._dragEnterHandler.call(this,a),!1)},_dragLeaveHandler:function(){var a,b=this;return a=function(){b.dndOver=!1,b.elem.removeClass(e+"over "+e+"denied")},clearTimeout(b._leaveTimer),b._leaveTimer=setTimeout(a,100),!1},_dropHandler:function(a){var b,f,g=this,h=g.getRuid(),i=g.elem.parent().get(0);if(i&&!d.contains(i,a.currentTarget))return!1;a=a.originalEvent||a,b=a.dataTransfer;try{f=b.getData("text/html")}catch(j){}return g.dndOver=!1,g.elem.removeClass(e+"over"),f?void 0:(g._getTansferFiles(b,function(a){g.trigger("drop",d.map(a,function(a){return new c(h,a)}))}),!1)},_getTansferFiles:function(b,c){var d,e,f,g,h,i,j,k=[],l=[];for(d=b.items,e=b.files,j=!(!d||!d[0].webkitGetAsEntry),h=0,i=e.length;i>h;h++)f=e[h],g=d&&d[h],j&&g.webkitGetAsEntry().isDirectory?l.push(this._traverseDirectoryTree(g.webkitGetAsEntry(),k)):k.push(f);a.when.apply(a,l).done(function(){k.length&&c(k)})},_traverseDirectoryTree:function(b,c){var d=a.Deferred(),e=this;return b.isFile?b.file(function(a){c.push(a),d.resolve()}):b.isDirectory&&b.createReader().readEntries(function(b){var f,g=b.length,h=[],i=[];for(f=0;g>f;f++)h.push(e._traverseDirectoryTree(b[f],i));a.when.apply(a,h).then(function(){c.push.apply(c,i),d.resolve()},d.reject)}),d.promise()},destroy:function(){var a=this.elem;a&&(a.off("dragenter",this.dragEnterHandler),a.off("dragover",this.dragOverHandler),a.off("dragleave",this.dragLeaveHandler),a.off("drop",this.dropHandler),this.options.disableGlobalDnd&&(d(document).off("dragover",this.dragOverHandler),d(document).off("drop",this.dropHandler)))}})}),b("runtime/html5/filepaste",["base","runtime/html5/runtime","lib/file"],function(a,b,c){return b.register("FilePaste",{init:function(){var b,c,d,e,f=this.options,g=this.elem=f.container,h=".*";if(f.accept){for(b=[],c=0,d=f.accept.length;d>c;c++)e=f.accept[c].mimeTypes,e&&b.push(e);b.length&&(h=b.join(","),h=h.replace(/,/g,"|").replace(/\*/g,".*"))}this.accept=h=new RegExp(h,"i"),this.hander=a.bindFn(this._pasteHander,this),g.on("paste",this.hander)},_pasteHander:function(a){var b,d,e,f,g,h=[],i=this.getRuid();for(a=a.originalEvent||a,b=a.clipboardData.items,f=0,g=b.length;g>f;f++)d=b[f],"file"===d.kind&&(e=d.getAsFile())&&h.push(new c(i,e));h.length&&(a.preventDefault(),a.stopPropagation(),this.trigger("paste",h))},destroy:function(){this.elem.off("paste",this.hander)}})}),b("runtime/html5/filepicker",["base","runtime/html5/runtime"],function(a,b){var c=a.$;return b.register("FilePicker",{init:function(){var a,b,d,e,f=this.getRuntime().getContainer(),g=this,h=g.owner,i=g.options,j=this.label=c(document.createElement("label")),k=this.input=c(document.createElement("input"));if(k.attr("type","file"),k.attr("capture","camera"),k.attr("name",i.name),k.addClass("webuploader-element-invisible"),j.on("click",function(a){k.trigger("click"),a.stopPropagation(),h.trigger("dialogopen")}),j.css({opacity:0,width:"100%",height:"100%",display:"block",cursor:"pointer",background:"#ffffff"}),i.multiple&&k.attr("multiple","multiple"),i.accept&&i.accept.length>0){for(a=[],b=0,d=i.accept.length;d>b;b++)a.push(i.accept[b].mimeTypes);k.attr("accept",a.join(","))}f.append(k),f.append(j),e=function(a){h.trigger(a.type)},k.on("change",function(a){var b,d=arguments.callee;g.files=a.target.files,b=this.cloneNode(!0),b.value=null,this.parentNode.replaceChild(b,this),k.off(),k=c(b).on("change",d).on("mouseenter mouseleave",e),h.trigger("change")}),j.on("mouseenter mouseleave",e)},getFiles:function(){return this.files},destroy:function(){this.input.off(),this.label.off()}})}),b("runtime/html5/util",["base"],function(b){var c=a.createObjectURL&&a||a.URL&&URL.revokeObjectURL&&URL||a.webkitURL,d=b.noop,e=d;return c&&(d=function(){return c.createObjectURL.apply(c,arguments)},e=function(){return c.revokeObjectURL.apply(c,arguments)}),{createObjectURL:d,revokeObjectURL:e,dataURL2Blob:function(a){var b,c,d,e,f,g;for(g=a.split(","),b=~g[0].indexOf("base64")?atob(g[1]):decodeURIComponent(g[1]),d=new ArrayBuffer(b.length),c=new Uint8Array(d),e=0;e<b.length;e++)c[e]=b.charCodeAt(e);return f=g[0].split(":")[1].split(";")[0],this.arrayBufferToBlob(d,f)},dataURL2ArrayBuffer:function(a){var b,c,d,e;for(e=a.split(","),b=~e[0].indexOf("base64")?atob(e[1]):decodeURIComponent(e[1]),c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);return c.buffer},arrayBufferToBlob:function(b,c){var d,e=a.BlobBuilder||a.WebKitBlobBuilder;return e?(d=new e,d.append(b),d.getBlob(c)):new Blob([b],c?{type:c}:{})},canvasToDataUrl:function(a,b,c){return a.toDataURL(b,c/100)},parseMeta:function(a,b){b(!1,{})},updateImageHead:function(a){return a}}}),b("runtime/html5/imagemeta",["runtime/html5/util"],function(a){var b;return b={parsers:{65505:[]},maxMetaDataSize:262144,parse:function(a,b){var c=this,d=new FileReader;d.onload=function(){b(!1,c._parse(this.result)),d=d.onload=d.onerror=null},d.onerror=function(a){b(a.message),d=d.onload=d.onerror=null},a=a.slice(0,c.maxMetaDataSize),d.readAsArrayBuffer(a.getSource())},_parse:function(a,c){if(!(a.byteLength<6)){var d,e,f,g,h=new DataView(a),i=2,j=h.byteLength-4,k=i,l={};if(65496===h.getUint16(0)){for(;j>i&&(d=h.getUint16(i),d>=65504&&65519>=d||65534===d)&&(e=h.getUint16(i+2)+2,!(i+e>h.byteLength));){if(f=b.parsers[d],!c&&f)for(g=0;g<f.length;g+=1)f[g].call(b,h,i,e,l);i+=e,k=i}k>6&&(l.imageHead=a.slice?a.slice(2,k):new Uint8Array(a).subarray(2,k))}return l}},updateImageHead:function(a,b){var c,d,e,f=this._parse(a,!0);return e=2,f.imageHead&&(e=2+f.imageHead.byteLength),d=a.slice?a.slice(e):new Uint8Array(a).subarray(e),c=new Uint8Array(b.byteLength+2+d.byteLength),c[0]=255,c[1]=216,c.set(new Uint8Array(b),2),c.set(new Uint8Array(d),b.byteLength+2),c.buffer}},a.parseMeta=function(){return b.parse.apply(b,arguments)},a.updateImageHead=function(){return b.updateImageHead.apply(b,arguments)},b}),b("runtime/html5/imagemeta/exif",["base","runtime/html5/imagemeta"],function(a,b){var c={};return c.ExifMap=function(){return this},c.ExifMap.prototype.map={Orientation:274},c.ExifMap.prototype.get=function(a){return this[a]||this[this.map[a]]},c.exifTagTypes={1:{getValue:function(a,b){return a.getUint8(b)},size:1},2:{getValue:function(a,b){return String.fromCharCode(a.getUint8(b))},size:1,ascii:!0},3:{getValue:function(a,b,c){return a.getUint16(b,c)},size:2},4:{getValue:function(a,b,c){return a.getUint32(b,c)},size:4},5:{getValue:function(a,b,c){return a.getUint32(b,c)/a.getUint32(b+4,c)},size:8},9:{getValue:function(a,b,c){return a.getInt32(b,c)},size:4},10:{getValue:function(a,b,c){return a.getInt32(b,c)/a.getInt32(b+4,c)},size:8}},c.exifTagTypes[7]=c.exifTagTypes[1],c.getExifValue=function(b,d,e,f,g,h){var i,j,k,l,m,n,o=c.exifTagTypes[f];if(!o)return a.log("Invalid Exif data: Invalid tag type."),void 0;if(i=o.size*g,j=i>4?d+b.getUint32(e+8,h):e+8,j+i>b.byteLength)return a.log("Invalid Exif data: Invalid data offset."),void 0;if(1===g)return o.getValue(b,j,h);for(k=[],l=0;g>l;l+=1)k[l]=o.getValue(b,j+l*o.size,h);if(o.ascii){for(m="",l=0;l<k.length&&(n=k[l],"\0"!==n);l+=1)m+=n;return m}return k},c.parseExifTag=function(a,b,d,e,f){var g=a.getUint16(d,e);f.exif[g]=c.getExifValue(a,b,d,a.getUint16(d+2,e),a.getUint32(d+4,e),e)},c.parseExifTags=function(b,c,d,e,f){var g,h,i;if(d+6>b.byteLength)return a.log("Invalid Exif data: Invalid directory offset."),void 0;if(g=b.getUint16(d,e),h=d+2+12*g,h+4>b.byteLength)return a.log("Invalid Exif data: Invalid directory size."),void 0;for(i=0;g>i;i+=1)this.parseExifTag(b,c,d+2+12*i,e,f);return b.getUint32(h,e)},c.parseExifData=function(b,d,e,f){var g,h,i=d+10;if(1165519206===b.getUint32(d+4)){if(i+8>b.byteLength)return a.log("Invalid Exif data: Invalid segment size."),void 0;if(0!==b.getUint16(d+8))return a.log("Invalid Exif data: Missing byte alignment offset."),void 0;switch(b.getUint16(i)){case 18761:g=!0;break;case 19789:g=!1;break;default:return a.log("Invalid Exif data: Invalid byte alignment marker."),void 0}if(42!==b.getUint16(i+2,g))return a.log("Invalid Exif data: Missing TIFF marker."),void 0;h=b.getUint32(i+4,g),f.exif=new c.ExifMap,h=c.parseExifTags(b,i,i+h,g,f)}},b.parsers[65505].push(c.parseExifData),c}),b("runtime/html5/jpegencoder",[],function(){function a(a){function b(a){for(var b=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],c=0;64>c;c++){var d=y((b[c]*a+50)/100);1>d?d=1:d>255&&(d=255),z[P[c]]=d}for(var e=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],f=0;64>f;f++){var g=y((e[f]*a+50)/100);1>g?g=1:g>255&&(g=255),A[P[f]]=g}for(var h=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],i=0,j=0;8>j;j++)for(var k=0;8>k;k++)B[i]=1/(8*z[P[i]]*h[j]*h[k]),C[i]=1/(8*A[P[i]]*h[j]*h[k]),i++}function c(a,b){for(var c=0,d=0,e=new Array,f=1;16>=f;f++){for(var g=1;g<=a[f];g++)e[b[d]]=[],e[b[d]][0]=c,e[b[d]][1]=f,d++,c++;c*=2}return e}function d(){t=c(Q,R),u=c(U,V),v=c(S,T),w=c(W,X)}function e(){for(var a=1,b=2,c=1;15>=c;c++){for(var d=a;b>d;d++)E[32767+d]=c,D[32767+d]=[],D[32767+d][1]=c,D[32767+d][0]=d;for(var e=-(b-1);-a>=e;e++)E[32767+e]=c,D[32767+e]=[],D[32767+e][1]=c,D[32767+e][0]=b-1+e;a<<=1,b<<=1}}function f(){for(var a=0;256>a;a++)O[a]=19595*a,O[a+256>>0]=38470*a,O[a+512>>0]=7471*a+32768,O[a+768>>0]=-11059*a,O[a+1024>>0]=-21709*a,O[a+1280>>0]=32768*a+8421375,O[a+1536>>0]=-27439*a,O[a+1792>>0]=-5329*a}function g(a){for(var b=a[0],c=a[1]-1;c>=0;)b&1<<c&&(I|=1<<J),c--,J--,0>J&&(255==I?(h(255),h(0)):h(I),J=7,I=0)}function h(a){H.push(N[a])}function i(a){h(255&a>>8),h(255&a)}function j(a,b){var c,d,e,f,g,h,i,j,k,l=0,m=8,n=64;for(k=0;m>k;++k){c=a[l],d=a[l+1],e=a[l+2],f=a[l+3],g=a[l+4],h=a[l+5],i=a[l+6],j=a[l+7];var o=c+j,p=c-j,q=d+i,r=d-i,s=e+h,t=e-h,u=f+g,v=f-g,w=o+u,x=o-u,y=q+s,z=q-s;a[l]=w+y,a[l+4]=w-y;var A=.707106781*(z+x);a[l+2]=x+A,a[l+6]=x-A,w=v+t,y=t+r,z=r+p;var B=.382683433*(w-z),C=.5411961*w+B,D=1.306562965*z+B,E=.707106781*y,G=p+E,H=p-E;a[l+5]=H+C,a[l+3]=H-C,a[l+1]=G+D,a[l+7]=G-D,l+=8}for(l=0,k=0;m>k;++k){c=a[l],d=a[l+8],e=a[l+16],f=a[l+24],g=a[l+32],h=a[l+40],i=a[l+48],j=a[l+56];var I=c+j,J=c-j,K=d+i,L=d-i,M=e+h,N=e-h,O=f+g,P=f-g,Q=I+O,R=I-O,S=K+M,T=K-M;a[l]=Q+S,a[l+32]=Q-S;var U=.707106781*(T+R);a[l+16]=R+U,a[l+48]=R-U,Q=P+N,S=N+L,T=L+J;var V=.382683433*(Q-T),W=.5411961*Q+V,X=1.306562965*T+V,Y=.707106781*S,Z=J+Y,$=J-Y;a[l+40]=$+W,a[l+24]=$-W,a[l+8]=Z+X,a[l+56]=Z-X,l++}var _;for(k=0;n>k;++k)_=a[k]*b[k],F[k]=_>0?0|_+.5:0|_-.5;return F}function k(){i(65504),i(16),h(74),h(70),h(73),h(70),h(0),h(1),h(1),h(0),i(1),i(1),h(0),h(0)}function l(a,b){i(65472),i(17),h(8),i(b),i(a),h(3),h(1),h(17),h(0),h(2),h(17),h(1),h(3),h(17),h(1)}function m(){i(65499),i(132),h(0);for(var a=0;64>a;a++)h(z[a]);h(1);for(var b=0;64>b;b++)h(A[b])}function n(){i(65476),i(418),h(0);for(var a=0;16>a;a++)h(Q[a+1]);for(var b=0;11>=b;b++)h(R[b]);h(16);for(var c=0;16>c;c++)h(S[c+1]);for(var d=0;161>=d;d++)h(T[d]);h(1);for(var e=0;16>e;e++)h(U[e+1]);for(var f=0;11>=f;f++)h(V[f]);h(17);for(var g=0;16>g;g++)h(W[g+1]);for(var j=0;161>=j;j++)h(X[j])}function o(){i(65498),i(12),h(3),h(1),h(0),h(2),h(17),h(3),h(17),h(0),h(63),h(0)}function p(a,b,c,d,e){for(var f,h=e[0],i=e[240],k=16,l=63,m=64,n=j(a,b),o=0;m>o;++o)G[P[o]]=n[o];var p=G[0]-c;c=G[0],0==p?g(d[0]):(f=32767+p,g(d[E[f]]),g(D[f]));for(var q=63;q>0&&0==G[q];q--);if(0==q)return g(h),c;for(var r,s=1;q>=s;){for(var t=s;0==G[s]&&q>=s;++s);var u=s-t;if(u>=k){r=u>>4;for(var v=1;r>=v;++v)g(i);u=15&u}f=32767+G[s],g(e[(u<<4)+E[f]]),g(D[f]),s++}return q!=l&&g(h),c}function q(){for(var a=String.fromCharCode,b=0;256>b;b++)N[b]=a(b)}function r(a){if(0>=a&&(a=1),a>100&&(a=100),x!=a){var c=0;c=50>a?Math.floor(5e3/a):Math.floor(200-2*a),b(c),x=a}}function s(){a||(a=50),q(),d(),e(),f(),r(a)}Math.round;var t,u,v,w,x,y=Math.floor,z=new Array(64),A=new Array(64),B=new Array(64),C=new Array(64),D=new Array(65535),E=new Array(65535),F=new Array(64),G=new Array(64),H=[],I=0,J=7,K=new Array(64),L=new Array(64),M=new Array(64),N=new Array(256),O=new Array(2048),P=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],Q=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],R=[0,1,2,3,4,5,6,7,8,9,10,11],S=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],T=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],U=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],V=[0,1,2,3,4,5,6,7,8,9,10,11],W=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],X=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(a,b){b&&r(b),H=new Array,I=0,J=7,i(65496),k(),m(),l(a.width,a.height),n(),o();var c=0,d=0,e=0;I=0,J=7,this.encode.displayName="_encode_";for(var f,h,j,q,s,x,y,z,A,D=a.data,E=a.width,F=a.height,G=4*E,N=0;F>N;){for(f=0;G>f;){for(s=G*N+f,x=s,y=-1,z=0,A=0;64>A;A++)z=A>>3,y=4*(7&A),x=s+z*G+y,N+z>=F&&(x-=G*(N+1+z-F)),f+y>=G&&(x-=f+y-G+4),h=D[x++],j=D[x++],q=D[x++],K[A]=(O[h]+O[j+256>>0]+O[q+512>>0]>>16)-128,L[A]=(O[h+768>>0]+O[j+1024>>0]+O[q+1280>>0]>>16)-128,M[A]=(O[h+1280>>0]+O[j+1536>>0]+O[q+1792>>0]>>16)-128;c=p(K,B,c,t,v),d=p(L,C,d,u,w),e=p(M,C,e,u,w),f+=32}N+=8}if(J>=0){var P=[];P[1]=J+1,P[0]=(1<<J+1)-1,g(P)}i(65497);var Q="data:image/jpeg;base64,"+btoa(H.join(""));return H=[],Q},s()}return a.encode=function(b,c){var d=new a(c);return d.encode(b)},a}),b("runtime/html5/androidpatch",["runtime/html5/util","runtime/html5/jpegencoder","base"],function(a,b,c){var d,e=a.canvasToDataUrl;a.canvasToDataUrl=function(a,f,g){var h,i,j,k,l;return c.os.android?("image/jpeg"===f&&"undefined"==typeof d&&(k=e.apply(null,arguments),l=k.split(","),k=~l[0].indexOf("base64")?atob(l[1]):decodeURIComponent(l[1]),k=k.substring(0,2),d=255===k.charCodeAt(0)&&216===k.charCodeAt(1)),"image/jpeg"!==f||d?e.apply(null,arguments):(i=a.width,j=a.height,h=a.getContext("2d"),b.encode(h.getImageData(0,0,i,j),g))):e.apply(null,arguments)}}),b("runtime/html5/image",["base","runtime/html5/runtime","runtime/html5/util"],function(a,b,c){var d="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";return b.register("Image",{modified:!1,init:function(){var a=this,b=new Image;b.onload=function(){a._info={type:a.type,width:this.width,height:this.height},a._metas||"image/jpeg"!==a.type?a.owner.trigger("load"):c.parseMeta(a._blob,function(b,c){a._metas=c,a.owner.trigger("load")})},b.onerror=function(){a.owner.trigger("error")},a._img=b},loadFromBlob:function(a){var b=this,d=b._img;b._blob=a,b.type=a.type,d.src=c.createObjectURL(a.getSource()),b.owner.once("load",function(){c.revokeObjectURL(d.src)})},resize:function(a,b){var c=this._canvas||(this._canvas=document.createElement("canvas"));this._resize(this._img,c,a,b),this._blob=null,this.modified=!0,this.owner.trigger("complete","resize")},crop:function(a,b,c,d,e){var f=this._canvas||(this._canvas=document.createElement("canvas")),g=this.options,h=this._img,i=h.naturalWidth,j=h.naturalHeight,k=this.getOrientation();e=e||1,f.width=c,f.height=d,g.preserveHeaders||this._rotate2Orientaion(f,k),this._renderImageToCanvas(f,h,-a,-b,i*e,j*e),this._blob=null,this.modified=!0,this.owner.trigger("complete","crop")},getAsBlob:function(a){var b,d=this._blob,e=this.options;if(a=a||this.type,this.modified||this.type!==a){if(b=this._canvas,"image/jpeg"===a){if(d=c.canvasToDataUrl(b,a,e.quality),e.preserveHeaders&&this._metas&&this._metas.imageHead)return d=c.dataURL2ArrayBuffer(d),d=c.updateImageHead(d,this._metas.imageHead),d=c.arrayBufferToBlob(d,a)}else d=c.canvasToDataUrl(b,a);d=c.dataURL2Blob(d)}return d},getAsDataUrl:function(a){var b=this.options;return a=a||this.type,"image/jpeg"===a?c.canvasToDataUrl(this._canvas,a,b.quality):this._canvas.toDataURL(a)},getOrientation:function(){return this._metas&&this._metas.exif&&this._metas.exif.get("Orientation")||1},info:function(a){return a?(this._info=a,this):this._info},meta:function(a){return a?(this._metas=a,this):this._metas},destroy:function(){var a=this._canvas;this._img.onload=null,a&&(a.getContext("2d").clearRect(0,0,a.width,a.height),a.width=a.height=0,this._canvas=null),this._img.src=d,this._img=this._blob=null},_resize:function(a,b,c,d){var e,f,g,h,i,j=this.options,k=a.width,l=a.height,m=this.getOrientation();~[5,6,7,8].indexOf(m)&&(c^=d,d^=c,c^=d),e=Math[j.crop?"max":"min"](c/k,d/l),j.allowMagnify||(e=Math.min(1,e)),f=k*e,g=l*e,j.crop?(b.width=c,b.height=d):(b.width=f,b.height=g),h=(b.width-f)/2,i=(b.height-g)/2,j.preserveHeaders||this._rotate2Orientaion(b,m),this._renderImageToCanvas(b,a,h,i,f,g)},_rotate2Orientaion:function(a,b){var c=a.width,d=a.height,e=a.getContext("2d");switch(b){case 5:case 6:case 7:case 8:a.width=d,a.height=c}switch(b){case 2:e.translate(c,0),e.scale(-1,1);break;case 3:e.translate(c,d),e.rotate(Math.PI);break;case 4:e.translate(0,d),e.scale(1,-1);break;case 5:e.rotate(.5*Math.PI),e.scale(1,-1);break;case 6:e.rotate(.5*Math.PI),e.translate(0,-d);break;case 7:e.rotate(.5*Math.PI),e.translate(c,-d),e.scale(-1,1);break;case 8:e.rotate(-.5*Math.PI),e.translate(-c,0)}},_renderImageToCanvas:function(){function b(a,b,c){var d,e,f,g=document.createElement("canvas"),h=g.getContext("2d"),i=0,j=c,k=c;for(g.width=1,g.height=c,h.drawImage(a,0,0),d=h.getImageData(0,0,1,c).data;k>i;)e=d[4*(k-1)+3],0===e?j=k:i=k,k=j+i>>1;return f=k/c,0===f?1:f}function c(a){var b,c,d=a.naturalWidth,e=a.naturalHeight;return d*e>1048576?(b=document.createElement("canvas"),b.width=b.height=1,c=b.getContext("2d"),c.drawImage(a,-d+1,0),0===c.getImageData(0,0,1,1).data[3]):!1}return a.os.ios?a.os.ios>=7?function(a,c,d,e,f,g){var h=c.naturalWidth,i=c.naturalHeight,j=b(c,h,i);return a.getContext("2d").drawImage(c,0,0,h*j,i*j,d,e,f,g)}:function(a,d,e,f,g,h){var i,j,k,l,m,n,o,p=d.naturalWidth,q=d.naturalHeight,r=a.getContext("2d"),s=c(d),t="image/jpeg"===this.type,u=1024,v=0,w=0;for(s&&(p/=2,q/=2),r.save(),i=document.createElement("canvas"),i.width=i.height=u,j=i.getContext("2d"),k=t?b(d,p,q):1,l=Math.ceil(u*g/p),m=Math.ceil(u*h/q/k);q>v;){for(n=0,o=0;p>n;)j.clearRect(0,0,u,u),j.drawImage(d,-n,-v),r.drawImage(i,0,0,u,u,e+o,f+w,l,m),n+=u,o+=l;v+=u,w+=m}r.restore(),i=j=null}:function(b){var c=a.slice(arguments,1),d=b.getContext("2d");d.drawImage.apply(d,c)}}()})}),b("runtime/html5/transport",["base","runtime/html5/runtime"],function(a,b){var c=a.noop,d=a.$;return b.register("Transport",{init:function(){this._status=0,this._response=null},send:function(){var b,c,e,f=this.owner,g=this.options,h=this._initAjax(),i=f._blob,j=g.server;g.sendAsBinary?(j+=(/\?/.test(j)?"&":"?")+d.param(f._formData),c=i.getSource()):(b=new FormData,d.each(f._formData,function(a,c){b.append(a,c)}),b.append(g.fileVal,i.getSource(),g.filename||f._formData.name||"")),g.withCredentials&&"withCredentials"in h?(h.open(g.method,j,!0),h.withCredentials=!0):h.open(g.method,j),this._setRequestHeader(h,g.headers),c?(h.overrideMimeType&&h.overrideMimeType("application/octet-stream"),a.os.android?(e=new FileReader,e.onload=function(){h.send(this.result),e=e.onload=null},e.readAsArrayBuffer(c)):h.send(c)):h.send(b)},getResponse:function(){return this._response},getResponseAsJson:function(){return this._parseJson(this._response)},getStatus:function(){return this._status},abort:function(){var a=this._xhr;a&&(a.upload.onprogress=c,a.onreadystatechange=c,a.abort(),this._xhr=a=null)},destroy:function(){this.abort()},_initAjax:function(){var a=this,b=new XMLHttpRequest,d=this.options;return!d.withCredentials||"withCredentials"in b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest),b.upload.onprogress=function(b){var c=0;return b.lengthComputable&&(c=b.loaded/b.total),a.trigger("progress",c)},b.onreadystatechange=function(){return 4===b.readyState?(b.upload.onprogress=c,b.onreadystatechange=c,a._xhr=null,a._status=b.status,b.status>=200&&b.status<300?(a._response=b.responseText,a.trigger("load")):b.status>=500&&b.status<600?(a._response=b.responseText,a.trigger("error","server")):a.trigger("error",a._status?"http":"abort")):void 0},a._xhr=b,b},_setRequestHeader:function(a,b){d.each(b,function(b,c){a.setRequestHeader(b,c)})},_parseJson:function(a){var b;try{b=JSON.parse(a)}catch(c){b={}}return b}})}),b("runtime/html5/md5",["runtime/html5/runtime"],function(a){var b=function(a,b){return 4294967295&a+b},c=function(a,c,d,e,f,g){return c=b(b(c,a),b(e,g)),b(c<<f|c>>>32-f,d)},d=function(a,b,d,e,f,g,h){return c(b&d|~b&e,a,b,f,g,h)},e=function(a,b,d,e,f,g,h){return c(b&e|d&~e,a,b,f,g,h)},f=function(a,b,d,e,f,g,h){return c(b^d^e,a,b,f,g,h)},g=function(a,b,d,e,f,g,h){return c(d^(b|~e),a,b,f,g,h)},h=function(a,c){var h=a[0],i=a[1],j=a[2],k=a[3];h=d(h,i,j,k,c[0],7,-680876936),k=d(k,h,i,j,c[1],12,-389564586),j=d(j,k,h,i,c[2],17,606105819),i=d(i,j,k,h,c[3],22,-1044525330),h=d(h,i,j,k,c[4],7,-176418897),k=d(k,h,i,j,c[5],12,1200080426),j=d(j,k,h,i,c[6],17,-1473231341),i=d(i,j,k,h,c[7],22,-45705983),h=d(h,i,j,k,c[8],7,1770035416),k=d(k,h,i,j,c[9],12,-1958414417),j=d(j,k,h,i,c[10],17,-42063),i=d(i,j,k,h,c[11],22,-1990404162),h=d(h,i,j,k,c[12],7,1804603682),k=d(k,h,i,j,c[13],12,-40341101),j=d(j,k,h,i,c[14],17,-1502002290),i=d(i,j,k,h,c[15],22,1236535329),h=e(h,i,j,k,c[1],5,-165796510),k=e(k,h,i,j,c[6],9,-1069501632),j=e(j,k,h,i,c[11],14,643717713),i=e(i,j,k,h,c[0],20,-373897302),h=e(h,i,j,k,c[5],5,-701558691),k=e(k,h,i,j,c[10],9,38016083),j=e(j,k,h,i,c[15],14,-660478335),i=e(i,j,k,h,c[4],20,-405537848),h=e(h,i,j,k,c[9],5,568446438),k=e(k,h,i,j,c[14],9,-1019803690),j=e(j,k,h,i,c[3],14,-187363961),i=e(i,j,k,h,c[8],20,1163531501),h=e(h,i,j,k,c[13],5,-1444681467),k=e(k,h,i,j,c[2],9,-51403784),j=e(j,k,h,i,c[7],14,1735328473),i=e(i,j,k,h,c[12],20,-1926607734),h=f(h,i,j,k,c[5],4,-378558),k=f(k,h,i,j,c[8],11,-2022574463),j=f(j,k,h,i,c[11],16,1839030562),i=f(i,j,k,h,c[14],23,-35309556),h=f(h,i,j,k,c[1],4,-1530992060),k=f(k,h,i,j,c[4],11,1272893353),j=f(j,k,h,i,c[7],16,-155497632),i=f(i,j,k,h,c[10],23,-1094730640),h=f(h,i,j,k,c[13],4,681279174),k=f(k,h,i,j,c[0],11,-358537222),j=f(j,k,h,i,c[3],16,-722521979),i=f(i,j,k,h,c[6],23,76029189),h=f(h,i,j,k,c[9],4,-640364487),k=f(k,h,i,j,c[12],11,-421815835),j=f(j,k,h,i,c[15],16,530742520),i=f(i,j,k,h,c[2],23,-995338651),h=g(h,i,j,k,c[0],6,-198630844),k=g(k,h,i,j,c[7],10,1126891415),j=g(j,k,h,i,c[14],15,-1416354905),i=g(i,j,k,h,c[5],21,-57434055),h=g(h,i,j,k,c[12],6,1700485571),k=g(k,h,i,j,c[3],10,-1894986606),j=g(j,k,h,i,c[10],15,-1051523),i=g(i,j,k,h,c[1],21,-2054922799),h=g(h,i,j,k,c[8],6,1873313359),k=g(k,h,i,j,c[15],10,-30611744),j=g(j,k,h,i,c[6],15,-1560198380),i=g(i,j,k,h,c[13],21,1309151649),h=g(h,i,j,k,c[4],6,-145523070),k=g(k,h,i,j,c[11],10,-1120210379),j=g(j,k,h,i,c[2],15,718787259),i=g(i,j,k,h,c[9],21,-343485551),a[0]=b(h,a[0]),a[1]=b(i,a[1]),a[2]=b(j,a[2]),a[3]=b(k,a[3])},i=function(a){var b,c=[];for(b=0;64>b;b+=4)c[b>>2]=a.charCodeAt(b)+(a.charCodeAt(b+1)<<8)+(a.charCodeAt(b+2)<<16)+(a.charCodeAt(b+3)<<24);return c},j=function(a){var b,c=[];for(b=0;64>b;b+=4)c[b>>2]=a[b]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24);return c},k=function(a){var b,c,d,e,f,g,j=a.length,k=[1732584193,-271733879,-1732584194,271733878];for(b=64;j>=b;b+=64)h(k,i(a.substring(b-64,b)));for(a=a.substring(b-64),c=a.length,d=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=0;c>b;b+=1)d[b>>2]|=a.charCodeAt(b)<<(b%4<<3);if(d[b>>2]|=128<<(b%4<<3),b>55)for(h(k,d),b=0;16>b;b+=1)d[b]=0;return e=8*j,e=e.toString(16).match(/(.*?)(.{0,8})$/),f=parseInt(e[2],16),g=parseInt(e[1],16)||0,d[14]=f,d[15]=g,h(k,d),k},l=function(a){var b,c,d,e,f,g,i=a.length,k=[1732584193,-271733879,-1732584194,271733878];for(b=64;i>=b;b+=64)h(k,j(a.subarray(b-64,b)));for(a=i>b-64?a.subarray(b-64):new Uint8Array(0),c=a.length,d=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=0;c>b;b+=1)d[b>>2]|=a[b]<<(b%4<<3);if(d[b>>2]|=128<<(b%4<<3),b>55)for(h(k,d),b=0;16>b;b+=1)d[b]=0;return e=8*i,e=e.toString(16).match(/(.*?)(.{0,8})$/),f=parseInt(e[2],16),g=parseInt(e[1],16)||0,d[14]=f,d[15]=g,h(k,d),k},m=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=function(a){var b,c="";for(b=0;4>b;b+=1)c+=m[15&a>>8*b+4]+m[15&a>>8*b];return c},o=function(a){var b;for(b=0;b<a.length;b+=1)a[b]=n(a[b]);return a.join("")},p=function(a){return o(k(a))},q=function(){this.reset()};return"5d41402abc4b2a76b9719d911017c592"!==p("hello")&&(b=function(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}),q.prototype.append=function(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),this.appendBinary(a),this},q.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var b,c=this._buff.length;for(b=64;c>=b;b+=64)h(this._state,i(this._buff.substring(b-64,b)));return this._buff=this._buff.substr(b-64),this},q.prototype.end=function(a){var b,c,d=this._buff,e=d.length,f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(b=0;e>b;b+=1)f[b>>2]|=d.charCodeAt(b)<<(b%4<<3);return this._finish(f,e),c=a?this._state:o(this._state),this.reset(),c},q.prototype._finish=function(a,b){var c,d,e,f=b;if(a[f>>2]|=128<<(f%4<<3),f>55)for(h(this._state,a),f=0;16>f;f+=1)a[f]=0;c=8*this._length,c=c.toString(16).match(/(.*?)(.{0,8})$/),d=parseInt(c[2],16),e=parseInt(c[1],16)||0,a[14]=d,a[15]=e,h(this._state,a)},q.prototype.reset=function(){return this._buff="",this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},q.prototype.destroy=function(){delete this._state,delete this._buff,delete this._length},q.hash=function(a,b){/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a)));var c=k(a);return b?c:o(c)
},q.hashBinary=function(a,b){var c=k(a);return b?c:o(c)},q.ArrayBuffer=function(){this.reset()},q.ArrayBuffer.prototype.append=function(a){var b,c=this._concatArrayBuffer(this._buff,a),d=c.length;for(this._length+=a.byteLength,b=64;d>=b;b+=64)h(this._state,j(c.subarray(b-64,b)));return this._buff=d>b-64?c.subarray(b-64):new Uint8Array(0),this},q.ArrayBuffer.prototype.end=function(a){var b,c,d=this._buff,e=d.length,f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(b=0;e>b;b+=1)f[b>>2]|=d[b]<<(b%4<<3);return this._finish(f,e),c=a?this._state:o(this._state),this.reset(),c},q.ArrayBuffer.prototype._finish=q.prototype._finish,q.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},q.ArrayBuffer.prototype.destroy=q.prototype.destroy,q.ArrayBuffer.prototype._concatArrayBuffer=function(a,b){var c=a.length,d=new Uint8Array(c+b.byteLength);return d.set(a),d.set(new Uint8Array(b),c),d},q.ArrayBuffer.hash=function(a,b){var c=l(new Uint8Array(a));return b?c:o(c)},a.register("Md5",{init:function(){},loadFromBlob:function(a){var b,c,d=a.getSource(),e=2097152,f=Math.ceil(d.size/e),g=0,h=this.owner,i=new q.ArrayBuffer,j=this,k=d.mozSlice||d.webkitSlice||d.slice;c=new FileReader,b=function(){var l,m;l=g*e,m=Math.min(l+e,d.size),c.onload=function(b){i.append(b.target.result),h.trigger("progress",{total:a.size,loaded:m})},c.onloadend=function(){c.onloadend=c.onload=null,++g<f?setTimeout(b,1):setTimeout(function(){h.trigger("load"),j.result=i.end(),b=a=d=i=null,h.trigger("complete")},50)},c.readAsArrayBuffer(k.call(d,l,m))},b()},getResult:function(){return this.result}})}),b("runtime/flash/runtime",["base","runtime/runtime","runtime/compbase"],function(b,c,d){function e(){var a;try{a=navigator.plugins["Shockwave Flash"],a=a.description}catch(b){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(c){a="0.0"}}return a=a.match(/\d+/g),parseFloat(a[0]+"."+a[1],10)}function f(){function d(a,b){var c,d,e=a.type||a;c=e.split("::"),d=c[0],e=c[1],"Ready"===e&&d===j.uid?j.trigger("ready"):f[d]&&f[d].trigger(e.toLowerCase(),a,b)}var e={},f={},g=this.destroy,j=this,k=b.guid("webuploader_");c.apply(j,arguments),j.type=h,j.exec=function(a,c){var d,g=this,h=g.uid,k=b.slice(arguments,2);return f[h]=g,i[a]&&(e[h]||(e[h]=new i[a](g,j)),d=e[h],d[c])?d[c].apply(d,k):j.flashExec.apply(g,arguments)},a[k]=function(){var a=arguments;setTimeout(function(){d.apply(null,a)},1)},this.jsreciver=k,this.destroy=function(){return g&&g.apply(this,arguments)},this.flashExec=function(a,c){var d=j.getFlash(),e=b.slice(arguments,2);return d.exec(this.uid,a,c,e)}}var g=b.$,h="flash",i={};return b.inherits(c,{constructor:f,init:function(){var a,c=this.getContainer(),d=this.options;c.css({position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),a='<object id="'+this.uid+'" type="application/'+'x-shockwave-flash" data="'+d.swf+'" ',b.browser.ie&&(a+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),a+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+d.swf+'" />'+'<param name="flashvars" value="uid='+this.uid+"&jsreciver="+this.jsreciver+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+"</object>",c.html(a)},getFlash:function(){return this._flash?this._flash:(this._flash=g("#"+this.uid).get(0),this._flash)}}),f.register=function(a,c){return c=i[a]=b.inherits(d,g.extend({flashExec:function(){var a=this.owner,b=this.getRuntime();return b.flashExec.apply(a,arguments)}},c))},e()>=11.4&&c.addRuntime(h,f),f}),b("runtime/flash/filepicker",["base","runtime/flash/runtime"],function(a,b){var c=a.$;return b.register("FilePicker",{init:function(a){var b,d,e=c.extend({},a);for(b=e.accept&&e.accept.length,d=0;b>d;d++)e.accept[d].title||(e.accept[d].title="Files");delete e.button,delete e.id,delete e.container,this.flashExec("FilePicker","init",e)},destroy:function(){this.flashExec("FilePicker","destroy")}})}),b("runtime/flash/image",["runtime/flash/runtime"],function(a){return a.register("Image",{loadFromBlob:function(a){var b=this.owner;b.info()&&this.flashExec("Image","info",b.info()),b.meta()&&this.flashExec("Image","meta",b.meta()),this.flashExec("Image","loadFromBlob",a.uid)}})}),b("runtime/flash/transport",["base","runtime/flash/runtime","runtime/client"],function(b,c,d){var e=b.$;return c.register("Transport",{init:function(){this._status=0,this._response=null,this._responseJson=null},send:function(){var a,b=this.owner,c=this.options,d=this._initAjax(),f=b._blob,g=c.server;d.connectRuntime(f.ruid),c.sendAsBinary?(g+=(/\?/.test(g)?"&":"?")+e.param(b._formData),a=f.uid):(e.each(b._formData,function(a,b){d.exec("append",a,b)}),d.exec("appendBlob",c.fileVal,f.uid,c.filename||b._formData.name||"")),this._setRequestHeader(d,c.headers),d.exec("send",{method:c.method,url:g,forceURLStream:c.forceURLStream,mimeType:"application/octet-stream"},a)},getStatus:function(){return this._status},getResponse:function(){return this._response||""},getResponseAsJson:function(){return this._responseJson},abort:function(){var a=this._xhr;a&&(a.exec("abort"),a.destroy(),this._xhr=a=null)},destroy:function(){this.abort()},_initAjax:function(){var b=this,c=new d("XMLHttpRequest");return c.on("uploadprogress progress",function(a){var c=a.loaded/a.total;return c=Math.min(1,Math.max(0,c)),b.trigger("progress",c)}),c.on("load",function(){var d,e=c.exec("getStatus"),f=!1,g="";return c.off(),b._xhr=null,e>=200&&300>e?f=!0:e>=500&&600>e?(f=!0,g="server"):g="http",f&&(b._response=c.exec("getResponse"),b._response=decodeURIComponent(b._response),d=function(b){try{return a.JSON&&a.JSON.parse?JSON.parse(b):new Function("return "+b).call()}catch(c){return{}}},b._responseJson=b._response?d(b._response):{}),c.destroy(),c=null,g?b.trigger("error",g):b.trigger("load")}),c.on("error",function(){c.off(),b._xhr=null,b.trigger("error","http")}),b._xhr=c,c},_setRequestHeader:function(a,b){e.each(b,function(b,c){a.exec("setRequestHeader",b,c)})}})}),b("runtime/flash/blob",["runtime/flash/runtime","lib/blob"],function(a,b){return a.register("Blob",{slice:function(a,c){var d=this.flashExec("Blob","slice",a,c);return new b(this.getRuid(),d)}})}),b("runtime/flash/md5",["runtime/flash/runtime"],function(a){return a.register("Md5",{init:function(){},loadFromBlob:function(a){return this.flashExec("Md5","loadFromBlob",a.uid)}})}),b("preset/all",["base","widgets/filednd","widgets/filepaste","widgets/filepicker","widgets/image","widgets/queue","widgets/runtime","widgets/upload","widgets/validator","widgets/md5","runtime/html5/blob","runtime/html5/dnd","runtime/html5/filepaste","runtime/html5/filepicker","runtime/html5/imagemeta/exif","runtime/html5/androidpatch","runtime/html5/image","runtime/html5/transport","runtime/html5/md5","runtime/flash/filepicker","runtime/flash/image","runtime/flash/transport","runtime/flash/blob","runtime/flash/md5"],function(a){return a}),b("widgets/log",["base","uploader","widgets/widget"],function(a,b){function c(a){var b=e.extend({},d,a),c=f.replace(/^(.*)\?/,"$1"+e.param(b)),g=new Image;g.src=c}var d,e=a.$,f=" http://static.tieba.baidu.com/tb/pms/img/st.gif??",g=(location.hostname||location.host||"protected").toLowerCase(),h=g&&/baidu/i.exec(g);if(h)return d={dv:3,master:"webuploader",online:/test/.exec(g)?0:1,module:"",product:g,type:0},b.register({name:"log",init:function(){var a=this.owner,b=0,d=0;a.on("error",function(a){c({type:2,c_error_code:a})}).on("uploadError",function(a,b){c({type:2,c_error_code:"UPLOAD_ERROR",c_reason:""+b})}).on("uploadComplete",function(a){b++,d+=a.size}).on("uploadFinished",function(){c({c_count:b,c_size:d}),b=d=0}),c({c_usage:1})}})}),b("webuploader",["preset/all","widgets/log"],function(a){return a}),c("webuploader")});
!
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
    }(this, function() {
        "use strict";

        function e() {
            if (void 0 === arguments[0]) return console.error("sweetAlert2 expects at least 1 attribute!"), !1;
            var e = c({}, N);
            switch (typeof arguments[0]) {
                case "string":
                    e.title = arguments[0], e.text = arguments[1] || "", e.type = arguments[2] || "";
                    break;
                case "object":
                    c(e, arguments[0]), e.extraParams = arguments[0].extraParams, "email" === e.input && null === e.inputValidator && (e.inputValidator = function(e) {
                        return new Promise(function(t, n) {
                            var o = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                            o.test(e) ? t() : n("Invalid email address")
                        })
                    });
                    break;
                default:
                    return console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
            }
            O(e), H(), V(e.animation);
            var o = f();
            return new Promise(function(r) {
                function a(e, t) {
                    for (var n = 0; n < M.length; n++) if (e += t, e === M.length ? e = 0 : -1 === e && (e = M.length - 1), M[e].offsetWidth || M[e].offsetHeight || M[e].getClientRects().length) return void M[e].focus()
                }
                function l(n) {
                    var o = n || window.event,
                        i = o.keyCode || o.which;
                    if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                        for (var l = o.target || o.srcElement, c = -1, s = 0; s < M.length; s++) if (l === M[s]) {
                            c = s;
                            break
                        }
                        9 === i ? (o.shiftKey ? a(c, -1) : a(c, 1), T(o)) : 13 === i || 32 === i ? -1 === c && fireClick(q, o) : 27 === i && e.allowEscapeKey === !0 && (t.closeModal(), r(void 0))
                    }
                }
                e.timer && (o.timeout = setTimeout(function() {
                    t.closeModal(), r(void 0)
                }, e.timer));
                var c = function() {
                        switch (e.input) {
                            case "select":
                                return C(o, i.select);
                            case "radio":
                                return o.querySelector("." + i.radio + " input:checked") || o.querySelector("." + i.radio + " input:first-child");
                            case "checkbox":
                                return o.querySelector("#" + i.checkbox);
                            case "textarea":
                                return C(o, i.textarea);
                            default:
                                return C(o, i.input)
                        }
                    },
                    u = function() {
                        var t = c();
                        switch (e.input) {
                            case "checkbox":
                                return t.checked ? 1 : 0;
                            case "radio":
                                return t.checked ? t.value : null;
                            case "file":
                                return t.files.length ? t.files[0] : null;
                            default:
                                return e.inputAutoTrim ? t.value.trim() : t.value
                        }
                    };
                e.input && setTimeout(function() {
                    var e = c();
                    e && g(e)
                }, 0);
                var p, f = function(n) {
                        e.showLoaderOnConfirm && t.showLoading(), e.preConfirm ? e.preConfirm(n, e.extraParams).then(function(e) {
                                r(e || n), t.closeModal()
                            }, function() {
                                t.hideLoading()
                            }) : (r(n), t.closeModal())
                    },
                    B = function(n) {
                        var a = n || window.event,
                            l = a.target || a.srcElement,
                            c = h(l, i.confirm),
                            d = h(l, i.cancel),
                            p = h(o, "visible");
                        switch (a.type) {
                            case "mouseover":
                            case "mouseup":
                            case "focus":
                                e.buttonsStyling && (c ? l.style.backgroundColor = s(e.confirmButtonColor, -.1) : d && (l.style.backgroundColor = s(e.cancelButtonColor, -.1)));
                                break;
                            case "mouseout":
                            case "blur":
                                e.buttonsStyling && (c ? l.style.backgroundColor = e.confirmButtonColor : d && (l.style.backgroundColor = e.cancelButtonColor));
                                break;
                            case "mousedown":
                                e.buttonsStyling && (c ? l.style.backgroundColor = s(e.confirmButtonColor, -.2) : d && (l.style.backgroundColor = s(e.cancelButtonColor, -.2)));
                                break;
                            case "click":
                                if (c && p) if (e.input) {
                                    var m = u();
                                    e.inputValidator ? (t.disableInput(), e.inputValidator(m, e.extraParams).then(function() {
                                            t.enableInput(), f(m)
                                        }, function(e) {
                                            t.enableInput(), t.showValidationError(e)
                                        })) : f(m)
                                } else f(!0);
                                else d && p && (t.closeModal(), r(!1))
                        }
                    },
                    L = o.querySelectorAll("button");
                for (p = 0; p < L.length; p++) L[p].onclick = B, L[p].onmouseover = B, L[p].onmouseout = B, L[p].onmousedown = B;
                d.previousDocumentClick = document.onclick, document.onclick = function(n) {
                    var o = n || window.event,
                        a = o.target || o.srcElement;
                    (h(a, i.close) || a === m() && e.allowOutsideClick) && (t.closeModal(), r(void 0))
                };
                var q = y(),
                    A = v(),
                    M = [q, A].concat(Array.prototype.slice.call(o.querySelectorAll("button:not([class^=" + n + "]), input:not([type=hidden]), textarea, select")));
                for (p = 0; p < M.length; p++) M[p].onfocus = B, M[p].onblur = B;
                e.reverseButtons && q.parentNode.insertBefore(A, q), a(-1, 1), d.previousWindowKeyDown = window.onkeydown, window.onkeydown = l, e.buttonsStyling && (q.style.borderLeftColor = e.confirmButtonColor, q.style.borderRightColor = e.confirmButtonColor), t.showLoading = t.enableLoading = function() {
                    b(q, "loading"), b(o, "loading"), A.disabled = !0
                }, t.hideLoading = t.disableLoading = function() {
                    w(q, "loading"), w(o, "loading"), A.disabled = !1
                }, t.enableButtons = function() {
                    q.disabled = !1, A.disabled = !1
                }, t.disableButtons = function() {
                    q.disabled = !0, A.disabled = !0
                }, t.enableInput = function() {
                    var e = c();
                    if ("radio" === e.type) for (var t = e.parentNode.parentNode, n = t.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = !1;
                    else e.disabled = !1
                }, t.disableInput = function() {
                    var e = c();
                    if ("radio" === e.type) for (var t = e.parentNode.parentNode, n = t.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = !0;
                    else e.disabled = !0
                }, t.showValidationError = function(e) {
                    var t = o.querySelector("." + i.validationerror);
                    t.innerHTML = e, x(t);
                    var n = c();
                    g(n), b(n, "error")
                }, t.resetValidationError = function() {
                    var e = o.querySelector("." + i.validationerror);
                    S(e);
                    var t = c();
                    t && w(t, "error")
                }, t.enableButtons(), t.hideLoading(), t.resetValidationError();
                var P, N = ["input", "select", "radio", "checkbox", "textarea"];
                for (p = 0; p < N.length; p++) {
                    var O = i[N[p]];
                    for (P = C(o, O); P.attributes.length > 0;) P.removeAttribute(P.attributes[0].name);
                    for (var V in e.inputAttributes) P.setAttribute(V, e.inputAttributes[V]);
                    P.className = O, e.inputClass && b(P, e.inputClass), E(P)
                }
                var H;
                switch (e.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "file":
                        P = C(o, i.input), P.value = e.inputValue, P.placeholder = e.inputPlaceholder, P.type = e.input, k(P);
                        break;
                    case "select":
                        var D = C(o, i.select);
                        if (D.innerHTML = "", e.inputPlaceholder) {
                            var I = document.createElement("option");
                            I.innerHTML = e.inputPlaceholder, I.value = "", I.disabled = !0, I.selected = !0, D.appendChild(I)
                        }
                        H = function(t) {
                            for (var n in t) {
                                var o = document.createElement("option");
                                o.value = n, o.innerHTML = t[n], e.inputValue === n && (o.selected = !0), D.appendChild(o)
                            }
                            k(D), D.focus()
                        };
                        break;
                    case "radio":
                        var j = C(o, i.radio);
                        j.innerHTML = "", H = function(t) {
                            for (var n in t) {
                                var o = 1,
                                    r = document.createElement("input"),
                                    a = document.createElement("label"),
                                    l = document.createElement("span");
                                r.type = "radio", r.name = i.radio, r.value = n, r.id = i.radio + "-" + o++, e.inputValue === n && (r.checked = !0), l.innerHTML = t[n], a.appendChild(r), a.appendChild(l), a["for"] = r.id, j.appendChild(a)
                            }
                            k(j);
                            var c = j.querySelectorAll("input");
                            c.length && c[0].focus()
                        };
                        break;
                    case "checkbox":
                        var K = C(o, i.checkbox),
                            W = o.querySelector("#" + i.checkbox);
                        W.value = 1, W.checked = Boolean(e.inputValue);
                        var U = K.getElementsByTagName("span");
                        U.length && K.removeChild(U[0]), U = document.createElement("span"), U.innerHTML = e.inputPlaceholder, K.appendChild(U), k(K);
                        break;
                    case "textarea":
                        var z = C(o, i.textarea);
                        z.value = e.inputValue, z.placeholder = e.inputPlaceholder, k(z);
                        break;
                    case null:
                        break;
                    default:
                        console.error('Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got ' + typeof arguments[0])
                }
                "select" !== e.input && "radio" !== e.input || (e.inputOptions instanceof Promise ? (t.showLoading(), e.inputOptions.then(function(e) {
                        t.hideLoading(), H(e)
                    })) : "object" == typeof e.inputOptions ? H(e.inputOptions) : console.error("Unexpected type of inputOptions! Expected object or Promise, got " + e.inputOptions))
            })
        }
        function t() {
            var n = arguments,
                o = f();
            return null === o && (t.init(), o = f()), h(o, "visible") && P(), e.apply(this, n)
        }
        var n = "swal2-",
            o = function(e) {
                var t = {};
                for (var o in e) t[e[o]] = n + e[o];
                return t
            },
            i = o(["container", "modal", "overlay", "close", "content", "spacer", "confirm", "cancel", "icon", "image", "input", "select", "radio", "checkbox", "textarea", "validationerror"]),
            r = o(["success", "warning", "info", "question", "error"]),
            a = {
                title: "",
                text: "",
                html: "",
                type: null,
                animation: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                showConfirmButton: !0,
                showCancelButton: !1,
                preConfirm: null,
                confirmButtonText: "OK",
                confirmButtonColor: "#3085d6",
                confirmButtonClass: null,
                cancelButtonText: "Cancel",
                cancelButtonColor: "#aaa",
                cancelButtonClass: null,
                buttonsStyling: !0,
                reverseButtons: !1,
                showCloseButton: !1,
                showLoaderOnConfirm: !1,
                imageUrl: null,
                imageWidth: null,
                imageHeight: null,
                imageClass: null,
                timer: null,
                width: 500,
                padding: 20,
                background: "#fff",
                input: null,
                inputPlaceholder: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputClass: null,
                inputAttributes: {},
                inputValidator: null
            },
            l = '<div class="' + i.overlay + '" tabIndex="-1"></div><div class="' + i.modal + '" style="display: none" tabIndex="-1"><div class="' + i.icon + " " + r.error + '"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="' + i.icon + " " + r.question + '">?</div><div class="' + i.icon + " " + r.warning + '">!</div><div class="' + i.icon + " " + r.info + '">i</div><div class="' + i.icon + " " + r.success + '"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="' + i.image + '"><h2></h2><div class="' + i.content + '"></div><input class="' + i.input + '"><select class="' + i.select + '"></select><div class="' + i.radio + '"></div><label for="' + i.checkbox + '" class="' + i.checkbox + '"><input type="checkbox" id="' + i.checkbox + '"></label><textarea class="' + i.textarea + '"></textarea><div class="' + i.validationerror + '"></div><hr class="' + i.spacer + '"><button class="' + i.confirm + '">OK</button><button class="' + i.cancel + '">Cancel</button><span class="' + i.close + '">&times;</span></div>',
            c = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            s = function(e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                for (var n = "#", o = 0; 3 > o; o++) {
                    var i = parseInt(e.substr(2 * o, 2), 16);
                    i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16), n += ("00" + i).substr(i.length)
                }
                return n
            },
            u = n + "mediaquery",
            d = {
                previousDocumentClick: null,
                previousWindowKeyDown: null,
                previousActiveElement: null
            },
            p = function(e) {
                return document.querySelector("." + e)
            },
            f = function() {
                return p(i.modal)
            },
            m = function() {
                return p(i.overlay)
            },
            y = function() {
                return p(i.confirm)
            },
            v = function() {
                return p(i.cancel)
            },
            h = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            },
            g = function(e) {
                e.focus();
                var t = e.value;
                e.value = "", e.value = t
            },
            b = function(e, t) {
                t && !h(e, t) && (e.className += " " + t)
            },
            w = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (h(e, t)) {
                    for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            },
            C = function(e, t) {
                for (var n = 0; n < e.childNodes.length; n++) if (e.childNodes[n].classList.contains(t)) return e.childNodes[n]
            },
            k = function(e) {
                e.style.opacity = "", e.style.display = "block"
            },
            x = function(e) {
                if (e && !e.length) return k(e);
                for (var t = 0; t < e.length; ++t) k(e[t])
            },
            E = function(e) {
                e.style.opacity = "", e.style.display = "none"
            },
            S = function(e) {
                if (e && !e.length) return E(e);
                for (var t = 0; t < e.length; ++t) E(e[t])
            },
            B = function(e, t) {
                e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
            },
            L = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t = e.clientHeight,
                    n = parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10);
                return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n, 10) + "px"
            },
            q = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var n = +new Date,
                        o = function() {
                            var i = +e.style.opacity + (new Date - n) / 100;
                            e.style.opacity = i > 1 ? 1 : i, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t)
                        };
                    o()
                }
            },
            A = function(e, t) {
                if (+e.style.opacity > 0) {
                    t = t || 16;
                    var n = e.style.opacity,
                        o = +new Date,
                        i = function() {
                            var r = new Date - o,
                                a = +e.style.opacity - r / (100 * n);
                            e.style.opacity = a, o = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : E(e)
                        };
                    i()
                }
            },
            T = function(e) {
                "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : window.event && window.event.hasOwnProperty("cancelBubble") && (window.event.cancelBubble = !0)
            },
            M = function() {
                var e = document.createElement("div"),
                    t = {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd oanimationend",
                        msAnimation: "MSAnimationEnd",
                        animation: "animationend"
                    };
                for (var n in t) if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
                return !1
            }(),
            P = function() {
                var e = f();
                window.onkeydown = d.previousWindowKeyDown, document.onclick = d.previousDocumentClick, d.previousActiveElement && d.previousActiveElement.focus(), clearTimeout(e.timeout);
                var t = document.getElementsByTagName("head")[0],
                    n = document.getElementById(u);
                n && t.removeChild(n)
            },
            N = c({}, a),
            O = function(e) {
                var t, n = f();
                n.style.width = e.width + "px", n.style.padding = e.padding + "px", n.style.marginLeft = -e.width / 2 + "px", n.style.background = e.background;
                var o = document.getElementsByTagName("head")[0],
                    a = document.createElement("style");
                a.type = "text/css", a.id = u;
                var l = 5,
                    c = e.width + parseInt(e.width * (l / 100) * 2, 10);
                a.innerHTML = "@media screen and (max-width: " + c + "px) {." + i.modal + " {width: auto !important;left: " + l + "% !important;right: " + l + "% !important;margin-left: 0 !important;}}", o.appendChild(a);
                var s = n.querySelector("h2"),
                    d = n.querySelector("." + i.content),
                    p = y(),
                    m = v(),
                    h = n.querySelector("." + i.spacer),
                    g = n.querySelector("." + i.close);
                if (s.innerHTML = e.title.split("\n").join("<br>"), e.text || e.html) {
                    if ("object" == typeof e.html) if (d.innerHTML = "", 0 in e.html) for (t = 0; t in e.html; t++) d.appendChild(e.html[t]);
                    else d.appendChild(e.html);
                    else d.innerHTML = e.html || e.text.split("\n").join("<br>");
                    x(d)
                } else S(d);
                if (e.showCloseButton ? x(g) : S(g), n.className = i.modal, e.customClass && b(n, e.customClass), S(n.querySelectorAll("." + i.icon)), e.type) {
                    var C = !1;
                    for (var k in r) if (e.type === k) {
                        C = !0;
                        break
                    }
                    if (!C) return console.error("Unknown alert type: " + e.type), !1;
                    var E = n.querySelector("." + i.icon + "." + r[e.type]);
                    switch (x(E), e.type) {
                        case "success":
                            b(E, "animate"), b(E.querySelector(".tip"), "animate-success-tip"), b(E.querySelector(".long"), "animate-success-long");
                            break;
                        case "error":
                            b(E, "animate-error-icon"), b(E.querySelector(".x-mark"), "animate-x-mark");
                            break;
                        case "warning":
                            b(E, "pulse-warning")
                    }
                }
                var L = n.querySelector("." + i.image);
                e.imageUrl ? (L.setAttribute("src", e.imageUrl), x(L), e.imageWidth && L.setAttribute("width", e.imageWidth), e.imageHeight && L.setAttribute("height", e.imageHeight), e.imageClass && b(L, e.imageClass)) : S(L), e.showCancelButton ? m.style.display = "inline-block" : S(m), e.showConfirmButton ? B(p, "display") : S(p), e.showConfirmButton || e.showCancelButton ? x(h) : S(h), p.innerHTML = e.confirmButtonText, m.innerHTML = e.cancelButtonText, e.buttonsStyling && (p.style.backgroundColor = e.confirmButtonColor, m.style.backgroundColor = e.cancelButtonColor), p.className = i.confirm, b(p, e.confirmButtonClass), m.className = i.cancel, b(m, e.cancelButtonClass), e.buttonsStyling ? (b(p, "styled"), b(m, "styled")) : (w(p, "styled"), w(m, "styled"), p.style.backgroundColor = p.style.borderLeftColor = p.style.borderRightColor = "", m.style.backgroundColor = m.style.borderLeftColor = m.style.borderRightColor = ""), e.animation === !0 ? w(n, "no-animation") : b(n, "no-animation")
            },
            V = function(e) {
                var t = f();
                e ? (q(m(), 10), b(t, "show-swal2"), w(t, "hide-swal2")) : x(m()), x(t), d.previousActiveElement = document.activeElement, b(t, "visible")
            },
            H = function() {
                var e = f();
                setTimeout(function (){e.style.marginTop = -($(e).height()/2+15)+'px'});
                //e.style.marginTop = L(e)
            };
        return t.queue = function(e) {
            return new Promise(function(n, o) {
                !
                    function i(r, a) {
                        r < e.length ? t(e[r]).then(function(e) {
                                e ? i(r + 1, a) : o()
                            }) : n()
                    }(0)
            })
        }, t.close = t.closeModal = function() {
            var e = f();
            w(e, "show-swal2"), b(e, "hide-swal2"), w(e, "visible");
            var t = e.querySelector("." + i.icon + "." + r.success);
            w(t, "animate"), w(t.querySelector(".tip"), "animate-success-tip"), w(t.querySelector(".long"), "animate-success-long");
            var n = e.querySelector("." + i.icon + "." + r.error);
            w(n, "animate-error-icon"), w(n.querySelector(".x-mark"), "animate-x-mark");
            var o = e.querySelector("." + i.icon + "." + r.warning);
            w(o, "pulse-warning"), P(), M && !h(e, "no-animation") ? e.addEventListener(M, function a() {
                    e.removeEventListener(M, a), h(e, "hide-swal2") && (E(e), A(m(), 0))
                }) : (E(e), E(m()))
        }, t.clickConfirm = function() {
            y().click()
        }, t.clickCancel = function() {
            v().click()
        }, t.init = function() {
            if ("undefined" == typeof document) return void console.log("SweetAlert2 requires document to initialize");
            if (!document.getElementsByClassName(i.container).length) {
                var e = document.createElement("div");
                e.className = i.container, e.innerHTML = l, document.body.appendChild(e);
                var n = f(),
                    o = C(n, i.input),
                    r = C(n, i.select),
                    a = n.querySelector("#" + i.checkbox),
                    c = C(n, i.textarea);
                o.oninput = function() {
                    t.resetValidationError()
                }, o.onkeyup = function(e) {
                    e.stopPropagation(), 13 === e.keyCode && t.clickConfirm()
                }, r.onchange = function() {
                    t.resetValidationError()
                }, a.onchange = function() {
                    t.resetValidationError()
                }, c.onchange = function() {
                    t.resetValidationError()
                }
            }
        }, t.setDefaults = function(e) {
            if (!e) throw new Error("userParams is required");
            if ("object" != typeof e) throw new Error("userParams has to be a object");
            c(N, e)
        }, t.resetDefaults = function() {
            N = c({}, a)
        }, t.version = "3.3.8", window.sweetAlert = window.swal = t, function() {
            "complete" === document.readyState || "interactive" === document.readyState && document.body ? t.init() : document.addEventListener("DOMContentLoaded", function e() {
                    document.removeEventListener("DOMContentLoaded", e, !1), t.init()
                }, !1)
        }(), t
    });
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.splice(0);
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function(){
					return $(this).css('z-index') !== 'auto';
				}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'yyyy-mm-dd',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
			daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
			daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			today: "今天",
			clear: "清空"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?j(t,it.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U});
//# sourceMappingURL=app.js.map
