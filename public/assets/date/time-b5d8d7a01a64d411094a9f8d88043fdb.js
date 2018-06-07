/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
var TimeSpan=function(e,t,i,n,a){for(var s="days hours minutes seconds milliseconds".split(/\s+/),r=function(e){return function(){return this[e]}},o=function(e){return function(t){return this[e]=t,this}},l=0;l<s.length;l++){var u=s[l],c=u.slice(0,1).toUpperCase()+u.slice(1);TimeSpan.prototype[u]=0,TimeSpan.prototype["get"+c]=r(u),TimeSpan.prototype["set"+c]=o(u)}if(4==arguments.length)this.setDays(e),this.setHours(t),this.setMinutes(i),this.setSeconds(n);else if(5==arguments.length)this.setDays(e),this.setHours(t),this.setMinutes(i),this.setSeconds(n),this.setMilliseconds(a);else if(1==arguments.length&&"number"==typeof e){var d=0>e?-1:1;this.setMilliseconds(Math.abs(e)),this.setDays(Math.floor(this.getMilliseconds()/864e5)*d),this.setMilliseconds(this.getMilliseconds()%864e5),this.setHours(Math.floor(this.getMilliseconds()/36e5)*d),this.setMilliseconds(this.getMilliseconds()%36e5),this.setMinutes(Math.floor(this.getMilliseconds()/6e4)*d),this.setMilliseconds(this.getMilliseconds()%6e4),this.setSeconds(Math.floor(this.getMilliseconds()/1e3)*d),this.setMilliseconds(this.getMilliseconds()%1e3),this.setMilliseconds(this.getMilliseconds()*d)}return this.getTotalMilliseconds=function(){return 864e5*this.getDays()+36e5*this.getHours()+6e4*this.getMinutes()+1e3*this.getSeconds()},this.compareTo=function(e){var t,i=new Date(1970,1,1,this.getHours(),this.getMinutes(),this.getSeconds());return t=null===e?new Date(1970,1,1,0,0,0):new Date(1970,1,1,e.getHours(),e.getMinutes(),e.getSeconds()),t>i?-1:i>t?1:0},this.equals=function(e){return 0===this.compareTo(e)},this.add=function(e){return null===e?this:this.addSeconds(e.getTotalMilliseconds()/1e3)},this.subtract=function(e){return null===e?this:this.addSeconds(-e.getTotalMilliseconds()/1e3)},this.addDays=function(e){return new TimeSpan(this.getTotalMilliseconds()+864e5*e)},this.addHours=function(e){return new TimeSpan(this.getTotalMilliseconds()+36e5*e)},this.addMinutes=function(e){return new TimeSpan(this.getTotalMilliseconds()+6e4*e)},this.addSeconds=function(e){return new TimeSpan(this.getTotalMilliseconds()+1e3*e)},this.addMilliseconds=function(e){return new TimeSpan(this.getTotalMilliseconds()+e)},this.get12HourHour=function(){return this.getHours()>12?this.getHours()-12:0===this.getHours()?12:this.getHours()},this.getDesignator=function(){return this.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator},this.toString=function(e){this._toString=function(){return null!==this.getDays()&&this.getDays()>0?this.getDays()+"."+this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds()):this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds())},this.p=function(e){return e.toString().length<2?"0"+e:e};var t=this;return e?e.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,function(e){switch(e){case"d":return t.getDays();case"dd":return t.p(t.getDays());case"H":return t.getHours();case"HH":return t.p(t.getHours());case"h":return t.get12HourHour();case"hh":return t.p(t.get12HourHour());case"m":return t.getMinutes();case"mm":return t.p(t.getMinutes());case"s":return t.getSeconds();case"ss":return t.p(t.getSeconds());case"t":return(t.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator).substring(0,1);case"tt":return t.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator}}):this._toString()},this};Date.prototype.getTimeOfDay=function(){return new TimeSpan(0,this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())};var TimePeriod=function(e,t,i,n,a,s,r){for(var o="years months days hours minutes seconds milliseconds".split(/\s+/),l=function(e){return function(){return this[e]}},u=function(e){return function(t){return this[e]=t,this}},c=0;c<o.length;c++){var d=o[c],h=d.slice(0,1).toUpperCase()+d.slice(1);TimePeriod.prototype[d]=0,TimePeriod.prototype["get"+h]=l(d),TimePeriod.prototype["set"+h]=u(d)}if(7==arguments.length)this.years=e,this.months=t,this.setDays(i),this.setHours(n),this.setMinutes(a),this.setSeconds(s),this.setMilliseconds(r);else if(2==arguments.length&&arguments[0]instanceof Date&&arguments[1]instanceof Date){var p=e.clone(),f=t.clone(),m=p.clone(),g=p>f?-1:1;if(this.years=f.getFullYear()-p.getFullYear(),m.addYears(this.years),1==g?m>f&&0!==this.years&&this.years--:f>m&&0!==this.years&&this.years++,p.addYears(this.years),1==g)for(;f>p&&p.clone().addDays(Date.getDaysInMonth(p.getYear(),p.getMonth()))<f;)p.addMonths(1),this.months++;else for(;p>f&&p.clone().addDays(-p.getDaysInMonth())>f;)p.addMonths(-1),this.months--;var v=f-p;if(0!==v){var y=new TimeSpan(v);this.setDays(y.getDays()),this.setHours(y.getHours()),this.setMinutes(y.getMinutes()),this.setSeconds(y.getSeconds()),this.setMilliseconds(y.getMilliseconds())}}return this};