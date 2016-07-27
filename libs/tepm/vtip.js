$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide(); 
//slide up and down when hover over heading 2
$("h2").hover(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).next(".togglebox").slideToggle("slow");
return true;
});
});

$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".togglebox1").hide(); 

	//Slide up and down on hover
	$("h2").click(function(){
		$(this).next(".togglebox1").slideToggle("slow");
	});

});
$(document).ready(function(){
	
//Set default open/close settings
$('.acc_container').hide(); //Hide/close all containers
$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
 
//On Click
$('.acc_trigger').click(function(){
	if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
		$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
		$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
	}
	return false; //Prevent the browser jump to the link anchor
});