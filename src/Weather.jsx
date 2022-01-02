import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import cities from './cities';
import { Link } from 'react-router-dom';

const API_KEY = '36e4e38a5e8b496ab25195853212612'; // put in your weather api key

const Weather = props => {

    const {cityName} = useParams();
    const [location, setLocation] = useState('Sulaymaniyah');
    const [weather, setWeather] = useState({
        city: location,
        country: 'Iraq',
        icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
        temp: 5
    });

    const getWeather = async () => {
        
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`)
        const data = await result.json();
        const newWeather = {
            city: data.location.name,
            country: data.location.country,
            icon: data.current.condition.icon,
            temp: data.current.temp_c
        }
       
        setWeather(newWeather)
    }

    useEffect(() => {
        getWeather()
    }, [cityName]);

    return (
        
        <div className="weather-app">
            <h1>{weather.city}, {weather.country}</h1>
            <img src={weather.icon} alt={weather.location} />
            <h1>{weather.temp} C°</h1>
            <Link to="/">Go Back to Home Page</Link>
        </div>
    )
}

export default Weather;