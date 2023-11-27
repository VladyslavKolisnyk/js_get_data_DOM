var e=document.querySelectorAll(".population"),n=document.querySelector(".total-population"),r=document.querySelector(".average-population"),o=[];e.forEach(function(e){return o.push(+e.innerHTML.replaceAll(",",""))});var t=o.reduce(function(e,n){return e+n},0),l=t/o.length;n.innerHTML=t.toLocaleString("en-US"),r.innerHTML=l.toLocaleString("en-US");//# sourceMappingURL=index.07a29b82.js.map

//# sourceMappingURL=index.07a29b82.js.map
