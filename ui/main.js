//counter code

var button=document.getElementById('counter');
counter=0;
button.onclick= function() {
    //make a request to the counter endppoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    counter=counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=countrr.toString();
    };