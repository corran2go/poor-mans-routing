(function() {
	var googleMap = document.querySelector('google-map');
	var debug = document.querySelector('#debug');

	function round(number) {
		return Math.round(number * 100) / 100;
	}

	navigator.geolocation.getCurrentPosition(function(geoposition) {
		console.log(geoposition);
		var lat = geoposition.coords.latitude;
		var lon = geoposition.coords.longitude;
		var acc = geoposition.coords.accuracy;
		debug.innerHTML = 'lat: ' + round(lat) + ', lon: ' + round(lon) + ', acc: ' + acc;
		googleMap.latitude = lat;
		googleMap.longitude = lon;
		if (acc <= 50) {
			googleMap.zoom = 19;
		} else if (acc <= 150) {
			googleMap.zoom = 17;
		} else if (acc <= 1500) {
			googleMap.zoom = 15;
		} else if (acc <= 150000) {
			googleMap.zoom = 12;
		}
	});
})();