window.Obj=function(e){return function(){var r=this,t=Obj.__counter++,n={};Object.defineProperty(this,"objID",{get:function(){return t}});for(var i in e)"init"!=i&&("function"==typeof e[i]||"_"==i[0]?this[i]=e[i]:(n[i]=e[i],function(e){Object.defineProperty(r,e,{get:function(){return n[e]},set:function(t){n[e]=t,Obj.refresh(r,e,t)},enumerable:!0})}(i)));e.init&&e.init.apply(r,arguments)}},Obj.__counter=0,Obj.parse=function(e){if(e){if(e instanceof HTMLElement)return e;var r=document.createElement("div");return r.innerHTML=e,r.childNodes[0]}},Obj.render=function(e,r){if(!e.render)return Obj;if(r instanceof HTMLElement)var r=[r];else if("string"==typeof r)var r=document.querySelectorAll(r);else if(!r){var t=Obj.parse(e.render());if(t)return t.setAttribute("objid",e.objID),t}if(r){for(var n=[],i=0;i<r.length;i++){var t=Obj.parse(e.render());t&&(t.setAttribute("objid",e.objID),r[i].appendChild(t),n.push(t))}return n}return Obj},Obj.refresh=function(e,r,t){if(!e.render&&!e.refresh)return Obj;var n=document.querySelectorAll('[objid="'+e.objID+'"]');if(e.refresh)for(var i=0;i<n.length;i++){var o=e.refresh(n[i],r,t);o&&(o.setAttribute("objid",e.objID),n[i].parentNode.replaceChild(o,n[i]))}else if(e.render)for(var i=0;i<n.length;i++){var o=Obj.parse(e.render());o?(o.setAttribute("objid",e.objID),n[i].parentNode.replaceChild(o,n[i])):n[i].parentNode.removeChild(n[i])}return Obj},Obj.version="4.0.1";