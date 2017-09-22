var button = document.getElementById('counter');

button.onClick = function(){
    
    var request = new XMLHttpRequest();
     
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status ===200 ){
                var counter = request.responseText;
                
                var count = document.getElementById('count');
                count.innerHTML = counter.toString();
            }
            
        }
    }; 
    
}