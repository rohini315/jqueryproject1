$( document ).ready(function() {
    console.log( "ready!" );

    $("#submit").click(function(){
    	var pw=$("#password").val();
        var user=$("#username").val();
        var testing=/[0-9]+/.test(user);
    	if(pw == "1234" && testing==true) {
       $("#valid").text("VALID");        
    }else {
        $("#valid").text("INVALID");  
    }        
  }); // End validate function
    
    $("#output").keypress(function(event){
        console.log(event.key);
    });
        

    

        }); // End of document.ready



