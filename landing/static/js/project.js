$(document).ready(function(){
    $(".testing").on("click",function(){
	 var iddiv =  $(this).attr("id") ;
         $(".box").hide();
         $("."+iddiv).show();
            });
 })