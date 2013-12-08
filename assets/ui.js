// sort nav by class

// start by declaring an order for the options
var array = ['rpi', 'web'];

// then put the elements into that order
$.each(array,function(index,value){
   $('.nav').append($('.'+value));
});



// group nav classes and add headers

$(".nav li").each(function() {
    var group = $(this).attr('class');
    // If the grouping <li> doesn't exist, create it
    if ($(".nav li.group." + group).length === 0) {
        $(".nav").append($('<ul class="group ' + group + '">' + group + '<ul></ul></li>'));
    }
    // Add the current <li> to the corresponding grouping <li>
    $(this).appendTo($(".nav li.group." + group + " ul"));
});