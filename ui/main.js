var button = document.getElementById('counter');

button.onClick = function(){
    console.log('button is clicked');
    alert('hey');
    // Create a request object
    var request = new XMLHttpRequest();
     
    // Capture the response and store it in a variable 
    request.onreadystatechange = function(){                //onreadystatechange detects the change in request like sent,sending etc.
        if(request.readyState === XMLHttpRequest.DONE){     // Now check the request state if it is completly done
                                                            // Take some actions
            if(request.status === 200 ){                    // Now check if the request made was an successfull one
                var counter = request.responseText;         // responseText gives access to response value
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
                                                            // if not done yet do here
        }
    }; 
    
     // Make a request to counter endpoint
     request.open('GET','http://krishna7902.imad.hasura-app.io/counter',true);
     request.send(null);
};