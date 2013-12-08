// sort nav by class

$(function() {
    
    $('#nav ul').sortChildren(function(elem) {
        var t = [];
        $(elem).children().each(function() {
            t.push($.sortChildren.map(elem));
        });
        return t;
    });
    
});



// group nav classes and add headers

// first remove original ul
$(".nav").children().unwrap()

// then make new ones
var collection = [];

$('.topic').each(function() {
    var thisClass = $(this).attr('class').split(" ")[0];
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
