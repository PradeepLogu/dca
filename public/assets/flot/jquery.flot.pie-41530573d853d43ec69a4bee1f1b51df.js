!function(e){function t(t){function a(e,t){t.series.pie.show&&(t.grid.show=!1,"auto"==t.series.pie.label.show&&(t.series.pie.label.show=t.legend.show?!1:!0),"auto"==t.series.pie.radius&&(t.series.pie.radius=t.series.pie.label.show?.75:1),t.series.pie.tilt>1&&(t.series.pie.tilt=1),t.series.pie.tilt<0&&(t.series.pie.tilt=0),e.hooks.processDatapoints.push(o),e.hooks.drawOverlay.push(k),e.hooks.draw.push(d))}function s(e,t){var i=e.getOptions();i.series.pie.show&&i.grid.hoverable&&t.unbind("mousemove").mousemove(m),i.series.pie.show&&i.grid.clickable&&t.unbind("click").click(g)}function r(e){for(var t=0;t<e.length;++t){var i=parseFloat(e[t].data[0][1]);i&&(A+=i)}}function o(t){z||(z=!0,C=t.getCanvas(),S=e(C).parent(),n=t.getOptions(),t.setData(u(t.getData())))}function l(){N=S.children().filter(".legend").children().width(),D=Math.min(C.width,C.height/n.series.pie.tilt)/2,M=C.height/2+n.series.pie.offset.top,T=C.width/2,"auto"==n.series.pie.offset.left?n.legend.position.match("w")?T+=N/2:T-=N/2:T+=n.series.pie.offset.left,D>T?T=D:T>C.width-D&&(T=C.width-D)}function c(e){for(var t=0;t<e.length;++t)"number"==typeof e[t].data?e[t].data=[[1,e[t].data]]:("undefined"==typeof e[t].data||"undefined"==typeof e[t].data[0])&&("undefined"!=typeof e[t].data&&"undefined"!=typeof e[t].data.label&&(e[t].label=e[t].data.label),e[t].data=[[1,0]]);return e}function u(e){e=c(e),r(e);for(var t=0,i=0,a=n.series.pie.combine.color,s=[],o=0;o<e.length;++o)e[o].data[0][1]=parseFloat(e[o].data[0][1]),e[o].data[0][1]||(e[o].data[0][1]=0),e[o].data[0][1]/A<=n.series.pie.combine.threshold?(t+=e[o].data[0][1],i++,a||(a=e[o].color)):s.push({data:[[1,e[o].data[0][1]]],color:e[o].color,label:e[o].label,angle:2*e[o].data[0][1]*Math.PI/A,percent:e[o].data[0][1]/A*100});return i>0&&s.push({data:[[1,t]],color:a,label:n.series.pie.combine.label,angle:2*t*Math.PI/A,percent:t/A*100}),s}function d(t,i){function a(){ctx.clearRect(0,0,C.width,C.height),S.children().filter(".pieLabel, .pieLabelBackground").remove()}function s(){var e=5,t=15,i=10,a=.02;if(n.series.pie.radius>1)var s=n.series.pie.radius;else var s=D*n.series.pie.radius;if(!(s>=C.width/2-e||s*n.series.pie.tilt>=C.height/2-t||i>=s)){ctx.save(),ctx.translate(e,t),ctx.globalAlpha=a,ctx.fillStyle="#000",ctx.translate(T,M),ctx.scale(1,n.series.pie.tilt);for(var r=1;i>=r;r++)ctx.beginPath(),ctx.arc(0,0,s,0,2*Math.PI,!1),ctx.fill(),s-=r;ctx.restore()}}function r(){function t(t,i,n){0>=t||(n?ctx.fillStyle=i:(ctx.strokeStyle=i,ctx.lineJoin="round"),ctx.beginPath(),Math.abs(t-2*Math.PI)>1e-9?ctx.moveTo(0,0):e.browser.msie&&(t-=1e-4),ctx.arc(0,0,a,s,s+t,!1),ctx.closePath(),s+=t,n?ctx.fill():ctx.stroke())}function i(){function t(t,i,s){if(0!=t.data[0][1]){var r,o=n.legend.labelFormatter,l=n.series.pie.label.formatter;r=o?o(t.label,t):t.label,l&&(r=l(r,t));var c=(i+t.angle+i)/2,u=T+Math.round(Math.cos(c)*a),d=M+Math.round(Math.sin(c)*a)*n.series.pie.tilt,h='<span class="pieLabel" id="pieLabel'+s+'" style="position:absolute;top:'+d+"px;left:"+u+'px;">'+r+"</span>";S.append(h);var p=S.children("#pieLabel"+s),f=d-p.height()/2,m=u-p.width()/2;if(p.css("top",f),p.css("left",m),(0-f>0||0-m>0||C.height-(f+p.height())<0||C.width-(m+p.width())<0)&&(P=!0),0!=n.series.pie.label.background.opacity){var g=n.series.pie.label.background.color;null==g&&(g=t.color);var v="top:"+f+"px;left:"+m+"px;";e('<div class="pieLabelBackground" style="position:absolute;width:'+p.width()+"px;height:"+p.height()+"px;"+v+"background-color:"+g+';"> </div>').insertBefore(p).css("opacity",n.series.pie.label.background.opacity)}}}var i=startAngle;if(n.series.pie.label.radius>1)var a=n.series.pie.label.radius;else var a=D*n.series.pie.label.radius;for(var s=0;s<o.length;++s)o[s].percent>=100*n.series.pie.label.threshold&&t(o[s],i,s),i+=o[s].angle}if(startAngle=Math.PI*n.series.pie.startAngle,n.series.pie.radius>1)var a=n.series.pie.radius;else var a=D*n.series.pie.radius;ctx.save(),ctx.translate(T,M),ctx.scale(1,n.series.pie.tilt),ctx.save();for(var s=startAngle,r=0;r<o.length;++r)o[r].startAngle=s,t(o[r].angle,o[r].color,!0);ctx.restore(),ctx.save(),ctx.lineWidth=n.series.pie.stroke.width,s=startAngle;for(var r=0;r<o.length;++r)t(o[r].angle,n.series.pie.stroke.color,!1);ctx.restore(),h(ctx),n.series.pie.label.show&&i(),ctx.restore()}if(S){ctx=i,l();var o=t.getData(),c=0;for(P=!0;P&&E>c;)P=!1,c>0&&(D*=I),c+=1,a(),n.series.pie.tilt<=.8&&s(),r();c>=E&&(a(),S.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')),t.setSeries&&t.insertLegend&&(t.setSeries(o),t.insertLegend())}}function h(e){n.series.pie.innerRadius>0&&(e.save(),innerRadius=n.series.pie.innerRadius>1?n.series.pie.innerRadius:D*n.series.pie.innerRadius,e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=n.series.pie.stroke.color,e.arc(0,0,innerRadius,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=n.series.pie.stroke.color,e.arc(0,0,innerRadius,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore())}function p(e,t){for(var i=!1,n=-1,a=e.length,s=a-1;++n<a;s=n)(e[n][1]<=t[1]&&t[1]<e[s][1]||e[s][1]<=t[1]&&t[1]<e[n][1])&&t[0]<(e[s][0]-e[n][0])*(t[1]-e[n][1])/(e[s][1]-e[n][1])+e[n][0]&&(i=!i);return i}function f(e,i){for(var n=t.getData(),a=t.getOptions(),s=a.series.pie.radius>1?a.series.pie.radius:D*a.series.pie.radius,r=0;r<n.length;++r){var o=n[r];if(o.pie.show){if(ctx.save(),ctx.beginPath(),ctx.moveTo(0,0),ctx.arc(0,0,s,o.startAngle,o.startAngle+o.angle,!1),ctx.closePath(),x=e-T,y=i-M,ctx.isPointInPath){if(ctx.isPointInPath(e-T,i-M))return ctx.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:r}}else if(p1X=s*Math.cos(o.startAngle),p1Y=s*Math.sin(o.startAngle),p2X=s*Math.cos(o.startAngle+o.angle/4),p2Y=s*Math.sin(o.startAngle+o.angle/4),p3X=s*Math.cos(o.startAngle+o.angle/2),p3Y=s*Math.sin(o.startAngle+o.angle/2),p4X=s*Math.cos(o.startAngle+o.angle/1.5),p4Y=s*Math.sin(o.startAngle+o.angle/1.5),p5X=s*Math.cos(o.startAngle+o.angle),p5Y=s*Math.sin(o.startAngle+o.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y],p(arrPoly,arrPoint))return ctx.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:r};ctx.restore()}}return null}function m(e){v("plothover",e)}function g(e){v("plotclick",e)}function v(e,i){var a=t.offset(),s=parseInt(i.pageX-a.left),r=parseInt(i.pageY-a.top),o=f(s,r);if(n.grid.autoHighlight)for(var l=0;l<H.length;++l){var c=H[l];c.auto!=e||o&&c.series==o.series||_(c.series)}o&&b(o.series,e);var u={pageX:i.pageX,pageY:i.pageY};S.trigger(e,[u,o])}function b(e,i){"number"==typeof e&&(e=series[e]);var n=w(e);-1==n?(H.push({series:e,auto:i}),t.triggerRedrawOverlay()):i||(H[n].auto=!1)}function _(e){null==e&&(H=[],t.triggerRedrawOverlay()),"number"==typeof e&&(e=series[e]);var i=w(e);-1!=i&&(H.splice(i,1),t.triggerRedrawOverlay())}function w(e){for(var t=0;t<H.length;++t){var i=H[t];if(i.series==e)return t}return-1}function k(e,t){function n(e){e.angle<0||(t.fillStyle="rgba(255, 255, 255, "+a.series.pie.highlight.opacity+")",t.beginPath(),Math.abs(e.angle-2*Math.PI)>1e-9&&t.moveTo(0,0),t.arc(0,0,s,e.startAngle,e.startAngle+e.angle,!1),t.closePath(),t.fill())}var a=e.getOptions(),s=a.series.pie.radius>1?a.series.pie.radius:D*a.series.pie.radius;for(t.save(),t.translate(T,M),t.scale(1,a.series.pie.tilt),i=0;i<H.length;++i)n(H[i].series);h(t),t.restore()}var C=null,S=null,D=null,T=null,M=null,A=0,P=!0,E=10,I=.95,N=0,z=!1,H=[];t.hooks.processOptions.push(a),t.hooks.bindEvents.push(s)}var n={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(e,t){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+t.color+';">'+e+"<br/>"+Math.round(t.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};e.plot.plugins.push({init:t,options:n,name:"pie",version:"1.0"})}(jQuery);