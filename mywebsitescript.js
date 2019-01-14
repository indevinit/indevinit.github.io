 
 
 //pixer.io = currency info website
 //start of currency js
 
      
// set endpoint and your access key
endpoint = 'latest';
access_key = '0c9a466585dd4d9bbddfdddadf626f27';

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,
     
    dataType: 'jsonp',
    success: function(json) {

         

         // timestamp can be accessed in json.timestamp
        $(".textbox0").text(json.date)


        // // base currency is stored in json.base
         $(".textbox1").text(json.base);

         // exchange rata data is stored in json.rates
         $(".textbox2").text(json.rates.GBP);
         $(".textbox3").text(json.rates.USD);
         $(".textbox4").text(json.rates.AUD);
         $(".textbox5").text(json.rates.CAD);
         $(".textbox6").text(json.rates.JPY);
         $(".textbox7").text(json.rates.IDR);
          
    }
});


$(document).ready(function(){
	$(".panel").hide();
	 

	$("#friendbutton").click(function(){
			    $(".panel").slideDown();
			});

	$(".panel").click(function(){
			    $(".panel").slideUp();
			});

	$("#al").click(function() {
			  alert("Thank you for being a Friend and subscribed to my website. Please check your email for confirmation.");
			});
	// $("#home").click(function(){
	// 		    $(".page-header").scrollIntoView();
	// 		});


	// $(".story").click(function(){
	// 		$("#stories").scrollIntoView();			    
	// 		 });
 });

//end of currency js


// This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
//start of js from google documentation
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.924420, lng: 4.477733},
          zoom: 5,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
//end of js from google documentation


				
