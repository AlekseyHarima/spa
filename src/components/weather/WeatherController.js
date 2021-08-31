import React from 'react';

const WeatherController = (props) => {
    return (
        <div>
            <img src={props.weatherData.iconUrl} alt="icon"/>
            <p>Температура: {props.weatherData.temp}</p>
            <p>Восход солнца: {props.weatherData.sunrise}</p>
        </div>
    );
};
export default WeatherController;