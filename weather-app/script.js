const apiKey = "0eb392d14ed5c257ab4e122abe9e6f41";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const apiKeyTime = "FcYmL16+t3ctYd140MOrhw==n5jqYuWbVbCpNoBU";
const apiUrlTime = "https://api.api-ninjas.com/v1/worldtime?city=";


const searchBox = document.querySelector("#search-bar input");
const searchBtn = document.querySelector("#search-bar button");


// const date = new Date();
// const getDate = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
// const getMonth = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
// const today= `${getDate}-${getMonth}-${date.getFullYear()}`;
// const getHours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
// const getMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
// const time = `${getHours}:${getMinutes}`;

async function checkWeather(city) {
    const responce = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (responce.status == 404) {

        document.querySelector('#error').style.display = 'block';
        document.querySelector('#result-div').style.display = "none"

    } else {

        var data = await responce.json();

        const finalTimeApi = apiUrlTime + `${city}`;
        const timeResponce = await fetch(finalTimeApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': `${apiKeyTime}`
            }
        });
        const timeData = await timeResponce.json();
        let ampm = +timeData.hour >= 12 ? 'PM' : 'AM';
        const hours = +timeData.hour % 12 || 12;


        document.querySelector("#time").innerHTML = hours + ":" + timeData.minute + ' ' + ampm;
        document.querySelector("#today").innerHTML = timeData.date
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector("#humidity h4").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind h4").innerHTML = data.wind.speed + " km/h";

        // console.log(timeData)  For debugging
        const pngUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        if (data.weather[0].main == "Haze") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Rain") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Thunderstorm") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Drizzle") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Snow") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Mist") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Haze") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Clear") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        } else if (data.weather[0].main == "Clouds") {
            document.querySelector("#result-div img").src = pngUrl;
            document.querySelector('#weather').innerHTML = data.weather[0].main;
        }

        document.querySelector('#result-div').style.display = "block"

    }




}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})