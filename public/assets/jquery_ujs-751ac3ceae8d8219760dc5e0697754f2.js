!function(e,t){e.rails!==t&&e.error("jquery-ujs has already been loaded!");var i;e.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector:"button[data-remote]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var i=e('meta[name="csrf-token"]').attr("content");i&&t.setRequestHeader("X-CSRF-Token",i)},fire:function(t,i,n){var a=e.Event(i);return t.trigger(a,n),a.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(n){var a,s,r,o,l,u,c,h;if(i.fire(n,"ajax:before")){if(o=n.data("cross-domain"),l=o===t?null:o,u=n.data("with-credentials")||null,c=n.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,n.is("form")){a=n.attr("method"),s=n.attr("action"),r=n.serializeArray();var d=n.data("ujs:submit-button");d&&(r.push(d),n.data("ujs:submit-button",null))}else n.is(i.inputChangeSelector)?(a=n.data("method"),s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(a=n.data("method")||"get",s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):(a=n.data("method"),s=i.href(n),r=n.data("params")||null);h={type:a||"GET",data:r,dataType:c,beforeSend:function(e,a){return a.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+a.accepts.script),i.fire(n,"ajax:beforeSend",[e,a])},success:function(e,t,i){n.trigger("ajax:success",[e,t,i])},complete:function(e,t){n.trigger("ajax:complete",[e,t])},error:function(e,t,i){n.trigger("ajax:error",[e,t,i])},crossDomain:l},u&&(h.xhrFields={withCredentials:u}),s&&(h.url=s);var p=i.ajax(h);return n.trigger("ajax:send",p),p}return!1},handleMethod:function(n){var a=i.href(n),s=n.data("method"),r=n.attr("target"),o=e("meta[name=csrf-token]").attr("content"),l=e("meta[name=csrf-param]").attr("content"),u=e('<form method="post" action="'+a+'"></form>'),c='<input name="_method" value="'+s+'" type="hidden" />';l!==t&&o!==t&&(c+='<input name="'+l+'" value="'+o+'" type="hidden" />'),r&&u.attr("target",r),u.hide().append(c).appendTo("body"),u.submit()},disableFormElements:function(t){t.find(i.disableSelector).each(function(){var t=e(this),i=t.is("button")?"html":"val";t.data("ujs:enable-with",t[i]()),t[i](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(i.enableSelector).each(function(){var t=e(this),i=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[i](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t,n=e.data("confirm"),a=!1;return n?(i.fire(e,"confirm")&&(a=i.confirm(n),t=i.fire(e,"confirm:complete",[a])),a&&t):!0},blankInputs:function(t,i,n){var a,s,r=e(),o=i||"input,textarea",l=t.find(o);return l.each(function(){if(a=e(this),s=a.is("input[type=checkbox],input[type=radio]")?a.is(":checked"):a.val(),!s==!n){if(a.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+a.attr("name")+'"]').length)return!0;r=r.add(a)}}),r.length?r:!1},nonBlankInputs:function(e,t){return i.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return i.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable")}},i.fire(e(document),"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,n){e.crossDomain||i.CSRFProtection(n)}),e(document).delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(e(this))}),e(document).delegate(i.linkClickSelector,"click.rails",function(n){var a=e(this),s=a.data("method"),r=a.data("params");if(!i.allowAction(a))return i.stopEverything(n);if(a.is(i.linkDisableSelector)&&i.disableElement(a),a.data("remote")!==t){if(!(!n.metaKey&&!n.ctrlKey||s&&"GET"!==s||r))return!0;var o=i.handleRemote(a);return o===!1?i.enableElement(a):o.error(function(){i.enableElement(a)}),!1}return a.data("method")?(i.handleMethod(a),!1):void 0}),e(document).delegate(i.buttonClickSelector,"click.rails",function(t){var n=e(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(t)}),e(document).delegate(i.inputChangeSelector,"change.rails",function(t){var n=e(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(t)}),e(document).delegate(i.formSubmitSelector,"submit.rails",function(n){var a=e(this),s=a.data("remote")!==t,r=i.blankInputs(a,i.requiredInputSelector),o=i.nonBlankInputs(a,i.fileInputSelector);if(!i.allowAction(a))return i.stopEverything(n);if(r&&a.attr("novalidate")==t&&i.fire(a,"ajax:aborted:required",[r]))return i.stopEverything(n);if(s){if(o){setTimeout(function(){i.disableFormElements(a)},13);var l=i.fire(a,"ajax:aborted:file",[o]);return l||setTimeout(function(){i.enableFormElements(a)},13),l}return i.handleRemote(a),!1}setTimeout(function(){i.disableFormElements(a)},13)}),e(document).delegate(i.formInputClickSelector,"click.rails",function(t){var n=e(this);if(!i.allowAction(n))return i.stopEverything(t);var a=n.attr("name"),s=a?{name:a,value:n.val()}:null;n.closest("form").data("ujs:submit-button",s)}),e(document).delegate(i.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&i.disableFormElements(e(this))}),e(document).delegate(i.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&i.enableFormElements(e(this))}),e(function(){var t=e("meta[name=csrf-token]").attr("content"),i=e("meta[name=csrf-param]").attr("content");e('form input[name="'+i+'"]').val(t)}))}(jQuery);