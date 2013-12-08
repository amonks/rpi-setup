$('.nav li').sort(function(a,b){
   return a.dataset.sid > b.dataset.sid
}).appendTo('.clist')