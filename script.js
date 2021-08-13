const button = document.querySelector("#button")
const inputValue = document.querySelector('#inputValue');
const cityname = document.querySelector('#name');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const temp_min = document.querySelector('#tempmin');
const temp_max = document.querySelector('#tempmax');
const pressure = document.querySelector('#pressure');
const humidity = document.querySelector('#humidity');
const latitude = document.querySelector('#lat');
const longitude = document.querySelector('#lon');
const windspeed = document.querySelector('#windspeed');
const winddegree = document.querySelector('#winddegree');
const windgust = document.querySelector('#windgust');
 
button.addEventListener('click',function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=15366dc2866888931ce2d3413791da6d")
        .then(response => response.json())
        .then(data => {
            const nameVal = data['name'];
            const descVal = data['weather'][0]['description'];
            const tempVal = ((data['main']['temp'])-273.15).toFixed(2);
            const tempminVal = ((data['main']['temp_min'])-273.15).toFixed(2);
            const tempmaxVal = ((data['main']['temp_max'])-273.15).toFixed(2);
			const pressureVal = data['main']['pressure'];
			const humidityVal = data['main']['humidity'];
            const latitudeVal = data['coord']['lat'];
            const longitudeVal = data['coord']['lon'];
            const windSpeedVal = data['wind']['speed'];
            const windDegreeVal = data['wind']['deg'];
            const windGustVal = data['wind']['gust'];
            			
            cityname.innerHTML = nameVal;
            desc.innerHTML = descVal;
            temp.innerHTML = tempVal;
            temp_min.innerHTML = tempminVal;
            temp_max.innerHTML = tempmaxVal;
			pressure.innerHTML = pressureVal;
			humidity.innerHTML = humidityVal;
            latitude.innerHTML = latitudeVal;
            longitude.innerHTML = longitudeVal;
            windspeed.innerHTML = windSpeedVal;
            winddegree.innerHTML = windDegreeVal;
            windgust.innerHTML = windGustVal;
        })
	
});
