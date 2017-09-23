var button = document.getElementById('counter');

button.onClick = function(){
    
    // Make a request to counter endpoint
    var request = new XMLHttpRequest();
     
    // Capture the response and store it in a variable 
    request.onreadystatechange = function(){                //onreadystatechange detects the change in request like sent,sending etc.
        if(request.readyState === XMLHttpRequest.DONE){     // Now check the request state if it is completly done
                                                            // Take some actions
            if(request.status === 200 ){                    // Now check if the request made was an successfull one
                var counter = request.responseText;         // responseText gives access to response value
                var count = document.getElementById('count');
                count.innerHTML = counter.toString();
            }
                                                            // if not done yet do here
        }
    }; 
    
}