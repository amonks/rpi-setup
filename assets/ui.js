// sort nav by class

// start by declaring an order for the options
var array = ['rpi', 'web'];

// then put the elements into that order
$.each(array,function(index,value){
   $('.nav').append($('.'+value));
});



// group nav classes and add headers

var collection = [];

$('.topic').each(function() {
    var thisClass = $(this).attr('class');
    var nextBox = $(this).next().hasClass(thisClass);
    
    collection.push($(this));
    
    if(!nextBox)
    {
        var container = $('<h3>'+ thisClass + '</h3> <ul class="nav nav-pills nav-stacked"></div>');
        container.insertBefore(collection[0]);
        for(i=0;i<collection.length;i++)
        {
            collection[i].appendTo(container);
        }
        collection = [];
    }
})
