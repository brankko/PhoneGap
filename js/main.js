
function getTemp(city) {
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather',
		data: {
			q: city,
			units: 'metric'
		},
		method: 'GET',
		complete: function(data){
			var weather = data.responseJSON;
			var temperature = Math.round(weather.main.temp);
			var typeOfWeather = weather.weather[0].main;
			var description = weather.weather[0].description;
			var icon = weather.weather[0].icon;
			var image = 'http://openweathermap.org/img/w/' + icon + '.png';
console.log(weather);
console.log(image);
			document.getElementById('temp').innerHTML = temperature + "&deg;C";
			document.getElementById('description').innerHTML = '<img src="' + image + '">' + 
			'<h3>' + typeOfWeather + '</h3>' + description;

		}
	});
}



