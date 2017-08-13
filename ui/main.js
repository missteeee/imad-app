//counter code

var button=document.getElementById('counter');
counter=0;
button.onclick= function() {
    //create a request object
    var request= new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take action
if(request.status===200) {
    var counter= request.responseText;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}
      }  //not done yet
    };
    //make a request
    request.open('GET', 'http://tejaswinisridhar25.imad.hasura-app.io/counter',true);
    request.send(null);
    };