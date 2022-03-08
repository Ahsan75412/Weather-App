

const API_KEY = `1c6cce3fefd6bf6b35e81913c0112772`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
  

}

const displayTemperature = temperature => {
    console.log(temperature);
}