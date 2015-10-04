(function(){

	// this is API section
	var venueLoc = $("some input from DOM");
	var baseURL = "http://api.jambase.com/events?zipCode=95128&page=1&api_key=69cc7meyzhktnpfe5zn9ut76&o=json";

	function successFunc( data ) {
		console.log('this is returned data:', data);
	}

	$.ajax({
		method: "GET",
		url: baseURL,
		success: successFunc
	});

	// This is the slickslider section
	$('.content-slider').slick({
		slideToShow: 1,
		infinite: true
	});


})();