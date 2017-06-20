$(document).ready(function(){
    $(".dropdown-menu li a").on("click",function(){
	 var iddiv =  $(this).attr("id") ;
         $(".box").hide();
         $("."+iddiv).show();
            });
 });