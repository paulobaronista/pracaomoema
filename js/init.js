(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready

  // POPUP
	$("#fecha-popup").click(function(){
    	$("#popup").css("display","none");
   		return false;
  	});
	$("#popup").click(function(){
    	$("#popup").css("display","none");
		return false;
  	});
  	
})(jQuery); // end of jQuery name space