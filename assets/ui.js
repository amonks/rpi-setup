sort(postLink, class)



function sort(sortProperty, sortClass)
{
    var sortThings = document.getElementsByClassName(sortClass);
    sortThings = Array.prototype.slice.call(sortThings,0)
    sortThings.sort(function(a,b)
         {
             return (a[sortProperty] > b[sortProperty]);
         })
    return sortThings;
}