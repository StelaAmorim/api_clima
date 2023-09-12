function Localizacao() {
    cidade = document.getElementById("cidade").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=64ed82577ced7f69cb1687f0ce536131`).then(response => {
        return response.json()
    }).then(clima => {
        console.log(clima)
        temp = parseInt(clima.main.temp) - 273, 15
        document.getElementById("nome").innerHTML = "<h3>Cidade: " + clima.name + "</h3>"
        document.getElementById("temperatura").innerHTML = "<p>Temperatura: " + temp + "°</p>"
        document.getElementById("vento").innerHTML = "<p>Vento: " + clima.wind.speed + "km/h </p>"
        document.getElementById("umidade").innerHTML = "<p>Umidade: " + clima.main.humidity + "% </p>"
    })
}

function Mapa() {
    cidade = document.getElementById("cidade").value
    window.location.href = `https://earth.google.com/web/search/${result}`
}