import React, {useState} from 'react';
import Info from "./Info";
import Form from "./Form";
import WeatherController from "./WeatherController";

const WeatherMain = () => {
    const apiKey = 'f2beab7385a29831e5ee0344e59c32f9';
    let [state, setState] = useState({
        iconUrl: null,
        alt: null,
        wind: null,
        main: null,
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
    });
    
    let gettingWeather = async (event) => {
        event.preventDefault(); // отменяем обновление страницы при отправке формы
        
        const city= event.target.elements.city.value;
        console.log(city);
    
        let data = null;
        try {
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            data = await apiResponse.json();
            console.log(data);
        } catch (error) {
            console.error(`Произошла ошибка при выполнении запроса: ${error.message}`);
        }
        
        // let sunset = data.city.sunset;
        const sunrise = data?.sys.sunrise;
        const timezone = data?.timezone; // у НСК 25200сек = 7 часов
        const date = new Date();
        date.setTime(sunrise * 1000 - timezone);
        const sunriseTime = date.toLocaleTimeString();
        
        const icon = data?.weather[0].icon;
        setState({
           temp: (data?.main.temp -273.15).toFixed(2),
           iconUrl: `http://openweathermap.org/img/wn/${icon}.png`,
           sunrise: sunriseTime,
        });
    }
    
    return (
        <div>
            <Info/>
            <Form weatherMethod={gettingWeather}/>
            <WeatherController weatherData={state}/>
        </div>
    );
};
export default WeatherMain;