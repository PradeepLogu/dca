/*!
 * jQuery UI Core 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e,t){function i(t,i){var a,s,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,s=a.name,t.href&&s&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+s+"]")[0],!!r&&n(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,s=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,a,s=e(this[0]);s.length&&s[0]!==document;){if(n=s.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(a=parseInt(s.css("zIndex"),10),!isNaN(a)&&0!==a))return a;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){s.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),a=isNaN(n);return(a||n>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function a(t,i,n,a){return e.each(s,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var s="Width"===n?["Left","Right"]:["Top","Bottom"],r=n.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?o["inner"+n].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?o["outer"+n].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var a,s=e.ui[t].prototype;for(a in n)s.plugins[a]=s.plugins[a]||[],s.plugins[a].push([i,n[a]])},call:function(e,t,i){var n,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;n<a.length;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[n]>0?!0:(t[n]=1,a=t[n]>0,t[n]=0,a)}})}(jQuery),/*!
 * jQuery UI Widget 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e,t){var i=0,n=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(s){}a(t)},e.widget=function(t,i,n){var a,s,r,o,l={},c=t.split(".")[0];t=t.split(".")[1],a=c+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[c]=e[c]||{},s=e[c][t],r=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new r(e,t)},e.extend(r,s,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),o=new i,o.options=e.widget.extend({},o.options),e.each(n,function(t,n){return e.isFunction(n)?void(l[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},a=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,s=this._superApply;return this._super=e,this._superApply=a,t=n.apply(this,arguments),this._super=i,this._superApply=s,t}}()):void(l[t]=n)}),r.prototype=e.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix:t},l,{constructor:r,namespace:c,widgetName:t,widgetFullName:a}),s?(e.each(s._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),e.widget.bridge(t,r)},e.widget.extend=function(i){for(var a,s,r=n.call(arguments,1),o=0,l=r.length;l>o;o++)for(a in r[o])s=r[o][a],r[o].hasOwnProperty(a)&&s!==t&&(i[a]=e.isPlainObject(s)?e.isPlainObject(i[a])?e.widget.extend({},i[a],s):e.widget.extend({},s):s);return i},e.widget.bridge=function(i,a){var s=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,l=n.call(arguments,1),c=this;return r=!o&&l.length?e.widget.extend.apply(null,[r].concat(l)):r,this.each(o?function(){var n,a=e.data(this,s);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(n=a[r].apply(a,l),n!==a&&n!==t?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var t=e.data(this,s);t?t.option(r||{})._init():e.data(this,s,new a(r,this))}),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var a,s,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(s=o[i]=e.widget.extend({},this.options[i]),r=0;r<a.length-1;r++)s[a[r]]=s[a[r]]||{},s=s[a[r]];if(i=a.pop(),n===t)return s[i]===t?null:s[i];s[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];o[i]=n}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,n){var a,s=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=a=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,a=this.widget()),e.each(n,function(n,r){function o(){return t||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(o.guid=r.guid=r.guid||o.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+s.eventNamespace,u=l[2];u?a.delegate(u,c,o):i.bind(c,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var a,s,r=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(a in s)a in i||(i[a]=s[a]);return this.element.trigger(i,n),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,a,s){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=s,a.delay&&n.delay(a.delay),r&&e.effects&&e.effects.effect[o]?n[t](a):o!==t&&n[o]?n[o](a.duration,a.easing,s):n.queue(function(i){e(this)[t](),s&&s.call(n[0]),i()})}})}(jQuery),/*!
 * jQuery UI Mouse 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 *
 * Depends:
 *	jquery.ui.widget.js
 */
function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var n=this,a=1===i.which,s="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!s&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return n._mouseMove(e)},this._mouseUpDelegate=function(e){return n._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),/*!
 * jQuery UI Resizable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,n,a,s,r=this,o=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;i<t.length;i++)n=e.trim(t[i]),s="ui-resizable-"+n,a=e("<div class='ui-resizable-handle "+s+"'></div>"),a.css({zIndex:o.zIndex}),"se"===n&&a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[n]=".ui-resizable-"+n,this.element.append(a);this._renderAxis=function(t){var i,n,a,s;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(n=e(this.handles[i],this.element),s=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),a=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(a,s),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){r.resizing||(this.className&&(a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=a&&a[1]?a[1]:"se")}),o.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){o.disabled||(e(this).removeClass("ui-resizable-autohide"),r._handles.show())}).mouseleave(function(){o.disabled||r.resizing||(e(this).addClass("ui-resizable-autohide"),r._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,n,a=!1;for(i in this.handles)n=e(this.handles[i])[0],(n===t.target||e.contains(n,t.target))&&(a=!0);return!this.options.disabled&&a},_mouseStart:function(i){var n,a,s,r=this.options,o=this.element.position(),l=this.element;return this.resizing=!0,/absolute/.test(l.css("position"))?l.css({position:"absolute",top:l.css("top"),left:l.css("left")}):l.is(".ui-draggable")&&l.css({position:"absolute",top:o.top,left:o.left}),this._renderProxy(),n=t(this.helper.css("left")),a=t(this.helper.css("top")),r.containment&&(n+=e(r.containment).scrollLeft()||0,a+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:n,top:a},this.size=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()},this.originalSize=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()},this.originalPosition={left:n,top:a},this.sizeDiff={width:l.outerWidth()-l.width(),height:l.outerHeight()-l.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof r.aspectRatio?r.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===s?this.axis+"-resize":s),l.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,n=this.helper,a={},s=this.originalMousePosition,r=this.axis,o=this.position.top,l=this.position.left,c=this.size.width,u=this.size.height,d=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[r];return p?(i=p.apply(this,[t,d,h]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==o&&(a.top=this.position.top+"px"),this.position.left!==l&&(a.left=this.position.left+"px"),this.size.width!==c&&(a.width=this.size.width+"px"),this.size.height!==u&&(a.height=this.size.height+"px"),n.css(a),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(a)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,n,a,s,r,o,l,c=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),a=n&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,s=n?0:u.sizeDiff.width,r={width:u.helper.width()-s,height:u.helper.height()-a},o=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,l=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,c.animate||this.element.css(e.extend(r,{top:l,left:o})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!c.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,a,s,r,o=this.options;r={minWidth:i(o.minWidth)?o.minWidth:0,maxWidth:i(o.maxWidth)?o.maxWidth:1/0,minHeight:i(o.minHeight)?o.minHeight:0,maxHeight:i(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=r.minHeight*this.aspectRatio,a=r.minWidth/this.aspectRatio,n=r.maxHeight*this.aspectRatio,s=r.maxWidth/this.aspectRatio,t>r.minWidth&&(r.minWidth=t),a>r.minHeight&&(r.minHeight=a),n<r.maxWidth&&(r.maxWidth=n),s<r.maxHeight&&(r.maxHeight=s)),this._vBoundaries=r},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,a=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===a&&(e.left=t.left+(n.width-e.width),e.top=null),"nw"===a&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,a=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,r=i(e.width)&&t.minWidth&&t.minWidth>e.width,o=i(e.height)&&t.minHeight&&t.minHeight>e.height,l=this.originalPosition.left+this.originalSize.width,c=this.position.top+this.size.height,u=/sw|nw|w/.test(n),d=/nw|ne|n/.test(n);return r&&(e.width=t.minWidth),o&&(e.height=t.minHeight),a&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),r&&u&&(e.left=l-t.minWidth),a&&u&&(e.left=l-t.maxWidth),o&&d&&(e.top=c-t.minHeight),s&&d&&(e.top=c-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,n,a,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){if(a=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],n=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")],t=0;t<i.length;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(n[t],10)||0);a.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,n=this.originalPosition;return{left:n.left+t,width:i.width-t}},n:function(e,t,i){var n=this.originalSize,a=this.originalPosition;return{top:a.top+i,height:n.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,n){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,n]))},sw:function(t,i,n){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,n]))},ne:function(t,i,n){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,n]))},nw:function(t,i,n){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,n]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),n=i.options,a=i._proportionallyResizeElements,s=a.length&&/textarea/i.test(a[0].nodeName),r=s&&e.ui.hasScroll(a[0],"left")?0:i.sizeDiff.height,o=s?0:i.sizeDiff.width,l={width:i.size.width-o,height:i.size.height-r},c=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(l,u&&c?{top:u,left:c}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};a&&a.length&&e(a[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,n,a,s,r,o,l,c=e(this).data("ui-resizable"),u=c.options,d=c.element,h=u.containment,p=h instanceof e?h.get(0):/parent/.test(h)?d.parent().get(0):h;p&&(c.containerElement=e(p),/document/.test(h)||h===document?(c.containerOffset={left:0,top:0},c.containerPosition={left:0,top:0},c.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),n=[],e(["Top","Right","Left","Bottom"]).each(function(e,a){n[e]=t(i.css("padding"+a))}),c.containerOffset=i.offset(),c.containerPosition=i.position(),c.containerSize={height:i.innerHeight()-n[3],width:i.innerWidth()-n[1]},a=c.containerOffset,s=c.containerSize.height,r=c.containerSize.width,o=e.ui.hasScroll(p,"left")?p.scrollWidth:r,l=e.ui.hasScroll(p)?p.scrollHeight:s,c.parentData={element:p,left:a.left,top:a.top,width:o,height:l}))},resize:function(t){var i,n,a,s,r=e(this).data("ui-resizable"),o=r.options,l=r.containerOffset,c=r.position,u=r._aspectRatio||t.shiftKey,d={top:0,left:0},h=r.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(d=l),c.left<(r._helper?l.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-l.left:r.position.left-d.left),u&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=o.helper?l.left:0),c.top<(r._helper?l.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-l.top:r.position.top),u&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?l.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top,i=Math.abs((r._helper?r.offset.left-d.left:r.offset.left-d.left)+r.sizeDiff.width),n=Math.abs((r._helper?r.offset.top-d.top:r.offset.top-l.top)+r.sizeDiff.height),a=r.containerElement.get(0)===r.element.parent().get(0),s=/relative|absolute/.test(r.containerElement.css("position")),a&&s&&(i-=r.parentData.left),i+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-i,u&&(r.size.height=r.size.width/r.aspectRatio)),n+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-n,u&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,n=t.containerOffset,a=t.containerPosition,s=t.containerElement,r=e(t.helper),o=r.offset(),l=r.outerWidth()-t.sizeDiff.width,c=r.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(s.css("position"))&&e(this).css({left:o.left-a.left-n.left,width:l,height:c}),t._helper&&!i.animate&&/static/.test(s.css("position"))&&e(this).css({left:o.left-a.left-n.left,width:l,height:c})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,n=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?n(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],n(i.alsoResize)):e.each(i.alsoResize,function(e){n(e)})},resize:function(t,i){var n=e(this).data("ui-resizable"),a=n.options,s=n.originalSize,r=n.originalPosition,o={height:n.size.height-s.height||0,width:n.size.width-s.width||0,top:n.position.top-r.top||0,left:n.position.left-r.left||0},l=function(t,n){e(t).each(function(){var t=e(this),a=e(this).data("ui-resizable-alsoresize"),s={},r=n&&n.length?n:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(e,t){var i=(a[t]||0)+(o[t]||0);i&&i>=0&&(s[t]=i||null)}),t.css(s)})};"object"!=typeof a.alsoResize||a.alsoResize.nodeType?l(a.alsoResize):e.each(a.alsoResize,function(e,t){l(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,n=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:n.height,width:n.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,n=t.size,a=t.originalSize,s=t.originalPosition,r=t.axis,o="number"==typeof i.grid?[i.grid,i.grid]:i.grid,l=o[0]||1,c=o[1]||1,u=Math.round((n.width-a.width)/l)*l,d=Math.round((n.height-a.height)/c)*c,h=a.width+u,p=a.height+d,f=i.maxWidth&&i.maxWidth<h,m=i.maxHeight&&i.maxHeight<p,g=i.minWidth&&i.minWidth>h,v=i.minHeight&&i.minHeight>p;i.grid=o,g&&(h+=l),v&&(p+=c),f&&(h-=l),m&&(p-=c),/^(se|s|e)$/.test(r)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(r)?(t.size.width=h,t.size.height=p,t.position.top=s.top-d):/^(sw)$/.test(r)?(t.size.width=h,t.size.height=p,t.position.left=s.left-u):(t.size.width=h,t.size.height=p,t.position.top=s.top-d,t.position.left=s.left-u)}})}(jQuery);