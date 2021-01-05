$(document).ready(function(){

	//sticky menu
	$(".js--services-section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");

		}else{
			$("nav").removeClass("sticky");

		}

	});





	//mix it up(port follio section)
	var mixer = mixitup('.container');




	 //smooth scrool for edge or safari


});



function openNav() {
	document.getElementById("mynav").style.width="100%";
};

function closeNav() {
	document.getElementById("mynav").style.width="0%";
};




