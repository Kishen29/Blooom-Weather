const button = document.querySelector("#button")
const inputValue = document.querySelector('#inputValue');
const cityname = document.querySelector('#name');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');

button.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=15366dc2866888931ce2d3413791da6d")
        .then(response => response.json())
        .then(data => {
            const nameVal = data['name'];
            const descVal = data['weather'][0]['description'];
            const tempVal = ((data['main']['temp']) - 273.15).toFixed(2);
            const finalTemp = Math.round(tempVal) + "°C";

            cityname.innerHTML = nameVal;
            desc.innerHTML = descVal;
            temp.innerHTML = finalTemp;
        })
        .catch(err => alert('Enter a valid city name'))
});
