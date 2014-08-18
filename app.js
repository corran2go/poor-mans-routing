(function() {
	var googleMap = document.querySelector('google-map');
	var debug = document.querySelector('#debug');

	function round(number) {
		return Math.round(number * 10000) / 10000;
	}

	navigator.geolocation.getCurrentPosition(function(geoposition) {
		console.log(geoposition);
		var lat = round(geoposition.coords.latitude);
		var lon = round(geoposition.coords.longitude);
		var acc = geoposition.coords.accuracy;
		debug.innerHTML = 'lat: ' + lat + ', lon: ' + lon + ', acc: ' + acc;
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