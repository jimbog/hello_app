var temperatureC = document.getElementById('celsius');
var result = document.getElementById('result');

function celsiusToFarenheit (e) {
    console.log(e.target.value);
    result.innerText = (e.target.value * (5/9)) + 32 ;
}

temperatureC.addEventListener('change', celsiusToFarenheit, false);