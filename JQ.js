$(document).ready(function(){
   
    $(':button').click(function(){
       alert("hello");
        $('#wrapper').addClass('wrapper2').removeAttr("id","wrapper");
    });
    $( "#tabs" ).tabs();
    var datee= new Date();
    $( "#datepicker" ).datepicker({
        minDate : datee,
        maxDate :"1m"
        
    });
    
    
});