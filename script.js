const cityname = document.querySelector('#name');

    fetch("http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=15366dc2866888931ce2d3413791da6d")
        .then(response => response.json())
        .then(data => {
            const nameVal = data['name'];
            			
            cityname.innerHTML = nameVal;
        })
        
        
    .catch(err => alert("Wrong city name!Enter a valid city name"));
	