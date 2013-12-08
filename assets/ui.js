// sort nav by class

$('.nav').children().tsort({attr:'class'});

$("li:contains('" + document.title + "')").addClass("active")
// // start by declaring an order for the options
// var array = ['rpi', 'web'];

// // then put the elements into that order
// $.each(array,function(index,value){
//    $('.nav').append($('.'+value));
// });



// group nav classes and add headers

// first remove original ul
$(".nav").children().unwrap()

// then make new ones
var collection = [];

$('#sidebar li').each(function() {
    var thisClass = $(this).attr('class').split(" ")[0].replace("-"," ");
    var nextBox = $(this).next().hasClass(thisClass);
    
    collection.push($(this));
    
    if(!nextBox)
    {
        var container = $('<h3>'+ thisClass + ':</h3> <ul class="nav nav-pills nav-stacked ' + thisClass + '"></div>');
        container.insertBefore(collection[0]);
        for(i=0;i<collection.length;i++)
        {
            collection[i].appendTo($('.nav').filter('.' + thisClass));
        }
        collection = [];
    }
})
