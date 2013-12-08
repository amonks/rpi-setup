// sort nav by class

// start by declaring an order for the options
var array = ['rpi', 'web'];

// then put the elements into that order
$.each(array,function(index,value){
   $('.nav').append($('.'+value));
});



// group nav classes and add headers

// first remove original ul
$(".nav").children().unwrap()

// then make new ones
var collection = [];

$('.topic').each(function() {
    var thisClass = $(this).attr('class');
    var nextBox = $(this).next().hasClass(thisClass);
    
    collection.push($(this));
    
    if(!nextBox)
    {
        var container = $('<h4>'+ thisClass.split(" ")[0] + ':</h4> <ul class="nav nav-pills nav-stacked"></ul>');
        container.insertBefore(collection[0]);
        for(i=0;i<collection.length;i++)
        {
            // collection[i].appendTo(container);
        }
        collection = [];
    }
})
