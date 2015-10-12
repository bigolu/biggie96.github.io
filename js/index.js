
$(document).ready(function(){
    $( "#first_name, #last_name" ).hide(); 
    $( "#first_name, #last_name" ).fadeIn(3000, function(){
        document.getElementById("real_name").style.color = "#333"; 
    });
});

