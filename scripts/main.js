(function(){
	// 69cc7meyzhktnpfe5zn9ut76
	// my api key

	// this is API section
	var venueLoc = $("some input from DOM");
	var baseURL = "http://api.jambase.com/events?zipCode=95128&page=1&api_key=rdrguhhx4m58qdedtk59cbqw&o=json";

	function successFunc( data ) {
		console.log('this is returned data.Events:', data.Events);
		

		// data.Events[0].Date
		var slideloop = data.Events;
	console.log( data.Events )
		for ( var i = 2; i < 5; i++){

			var artistName = slideloop[i].Artists[0].Name,
				showDate = new Date( slideloop[i].Date ),
				showVenueName = slideloop[i].Venue.Name,
				showVenueAddress = slideloop[i].Venue.Address,
				showTickets;
				
				if(slideloop[i].TicketUrl === ""){
					showTickets = 'http://naynaysoul.com/upcoming-events';
				}
				else {
					showTickets = slideloop[i].TicketUrl;
				}

			var displayName = $(".content-slider").append('<div class="slides slide-1"><div class="slides__img-container"><div class="boximage'+(i+0)+'"></div></div><div class="slides__text-container js-holder">' + showDate + '</div><div class="slides__text-container js-holder">' + artistName + '</div><div class="slides__text-container venue-name">' + showVenueName + '</div><div class="slides__text-container venue-addy">' + showVenueAddress + '</div><a href="' + showTickets + '" target="_blank"><span class="get-tix">GET TIX</span></a></div>');		


		}
		callSlider();

	}

	$.ajax({
		method: "GET",
		url: baseURL,
		success: successFunc
	});

	// This is the slickslider section
	function callSlider() {
		$('.content-slider').slick({
			slideToShow: 1,
			infinite: true
		});
	}

})();

//psuedo code for search function
// everything will happen on the click event
// get the value of the search form 
// - google how to get value of seach form using jquery 
// from there on, after you get the value of the search form then 

//$('searchform') .on('click'),
	//function () {
		//value of 'searchform' 
		//input same $.ajax call
		//then call successFunc }





















