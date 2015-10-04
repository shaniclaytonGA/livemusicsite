(function(){

	// this is API section
	var venueLoc = $("some input from DOM");
	var baseURL = "http://api.songkick.com/api/3.0/venues/" + venueLoc + "/calendar.json?apikey=";

	var __MY_KEY__ = ""
	
	var fullURL = baseURL + __MY_KEY__;

	function successFunc( data ) {
		console.log('this is returned data:', data);
	}

	// $.ajax({
	// 	method: "GET",
	// 	url: fullURL,
	// 	success: successFunc
	// })

	// This is the slickslider section
	$('.the-slider').slick({
		slideToShow: 1,
		infinite: true
	});


})();