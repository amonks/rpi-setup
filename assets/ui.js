var array = ['rpi', 'web'];

$.each(array,function(index,value){
   $('.nav').append($('.'+value));
});