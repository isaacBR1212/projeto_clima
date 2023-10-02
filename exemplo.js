// Define a chave da API e a URL base para obter as bandeiras dos países.
const apiKey = "af042ed61c29b1a3951f1d02cd1740b0";
const apiCountryURL = "https://flagsapi.com//flat/64.png";

// Seleciona elementos HTML usando seus IDs.
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

// Função para obter dados meteorológicos de uma cidade específica.
const getWeatherData = async (city) => {
  // Constrói a URL da API do OpenWeatherMap com a cidade e sua chave de API.
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  // Faz uma solicitação à API usando fetch e aguarda a resposta.
  const res = await fetch(apiWeatherURL);
  // Converte a resposta em formato JSON.
  const data = await res.json();

  return data; // Retorna os dados meteorológicos.
}

const showWeatherData = async (city) => {
  // Chama a função para obter os dados meteorológicos da cidade especificada.
  const data = await getWeatherData(city);

  // Atualiza os elementos HTML com os dados meteorológicos obtidos.
  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  // Define a imagem do ícone do clima com base nos dados da API.
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
}

// Evento de clique do botão de pesquisa.
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o envio do formulário (comportamento padrão).

  const city = cityInput.value; // Obtém a cidade inserida pelo usuário.
  showWeatherData(city); // Chama a função para exibir os dados meteorológicos.
});