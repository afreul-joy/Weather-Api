const btn = () => {
  const inputField = document.getElementById('input-field');
  const inputValue = inputField.value
  inputField.value = ''
  // console.log(inputValue);
  const dynamicUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=be5c8a0a77276f45330cca10c9dc4e55`
  fetch(dynamicUrl)
    .then(res => res.json())
    .then(data=>showWeather(data))
    .catch(res=>alert('please Type Right City Name'))
} 
  
const showWeather = (data) => {
  const city = data.name
  const tem = data.main.temp - 273.15 // kelvin to celsius
  const temperature = parseFloat(tem).toFixed(2)
  const description = data.weather[0].description
  document.getElementById('city-name').innerText = city
  document.getElementById('temperature').innerText = temperature
  document.getElementById('description').innerText = description
  
}
