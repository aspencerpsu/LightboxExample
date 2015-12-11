$(document).ready(function(){

	$("#lightbox-link").on("click", function(e){
	// 	// console.log("you have clicked!");
	// 	// $(".outerlightbox" ).css( "display");
		e.preventDefault();
		$(".outerlightbox").show();
		$('.outerlightbox').on("click", function(){
		console.log("you have click!");
		$(this).hide();
						});	
  
	});
});