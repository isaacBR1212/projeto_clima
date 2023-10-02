const keyAPI = "743eef289a785a9792b45396bde52661";

const pesquisaInput = document.querySelector("#pesquisa");
const pesquisarAgora = document.querySelector("#search")
const cidade = document.querySelector("#cidade");
const temperatura = document.querySelector("#temperatura_span");
const vento = document.querySelector("#velocidadeVento");
const sensacao = document.querySelector("#sensacao");
const umidade = document.querySelector("#umidade");
const diaAtual = document.querySelector("#diaAtual");

const dadosMeteorologicos = async (city) => {

    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyAPI}&lang=pt_br`;

    const resultado = await fetch(urlAPI);
    const data = resultado.json()
    console.log(data)

    return data;
}


 

const mostrarData = async (city) => {
    const data = await dadosMeteorologicos(city)

    var descricaoClima = data.weather[0].description;
    console.log(descricaoClima)

    var climaIcon = {
        "algumas nuvens" : "icons/rNublado.svg",
        "céu limpo" : "icons/Ensolarado.svg",
        "nublado" : "icons/rNublado.svg",
        "chuva forte" : "icons/chuva.svg"

    }

    cidade.innerText = data.name;
    umidade.innerText = parseInt(data.main.humidity);
    temperatura.innerText = parseInt(data.main.temp);
    vento.innerText = parseInt(data.wind.speed)
    
};

pesquisarAgora.addEventListener('click', (e) => {
    e.preventDefault(); 

    const city = pesquisaInput.value;
    mostrarData(city);
});









