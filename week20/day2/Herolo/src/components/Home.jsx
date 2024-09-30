import axios from "axios"
import { useRef } from "react"
import { useState } from "react";
import { v1 as uuidv1 } from 'uuid';


const KEY = 'xAD6mImOshJTJpAWXF2AFxbLmvztMGPY';
const URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
const URL_CURRENT = 'http://dataservice.accuweather.com/currentconditions/v1/';

const URL_WEEKLY = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';



const Home = () => {
    const inputRef = useRef();
    const [dailyTextMsg, setDailyTextMsg] = useState("")
    const [currentTemp, setCurrentTemp] = useState("")
    const [currentCity, setCurrentCity] = useState("")
    const [showCurrentWeather, setShowCurrentWeather] = useState(false)


    const [weeklyForecasts, setWeeklyForecasts] = useState([])
    const [showWeeklyWeather, setShowWeeklyWeather] = useState(false)

    // favorites

    const [favoritesCities, setFavoriteCities] = useState([])


    const fetchCode = async (city) => {
        try {
            const response = await axios.get(URL, {
                params: {
                    apikey: KEY,
                    q: city,
                },
            });
            if (!response.data.length) {
                throw new Error("City not found");
            }
            console.log(response.data[0])
            const cityName = response.data[0].LocalizedName
            if(!cityName) return 
            setCurrentCity(cityName)
            return response.data[0].Key;
        } catch (error) {
            console.error("Error fetching city code:", error);
        }
    };

    const getCurrentWeatherByCode = async (code) => {
        try {
            if (!code) return;
            const response = await axios.get(`${URL_CURRENT}${code}`, {
                params: {
                    apikey: KEY,
                },
            });
            const dailyTemprature = response.data[0].Temperature.Metric.Value
            const dailyText = response.data[0].WeatherText
            if(!dailyTemprature || !dailyText ) throw Error("Cannot get temrature and text")


          
            console.log(response.data[0])
            console.log(dailyTemprature, dailyText)
            
            // update state with current data
            setCurrentTemp(dailyTemprature)
            setDailyTextMsg(dailyText)
            setShowCurrentWeather(true)
        
        } catch (error) {
            console.error("Error fetching current weather:", error);
        }
    };

    const getWeeklyWeatherByCode = async (code) => {
        try {
            const response = await axios.get(`${URL_WEEKLY}/${code}`, {
                params: {
                    apikey: KEY,
                },
            });
            
            const dailyForecasts = response.data.DailyForecasts;
            
            if (!dailyForecasts) {
                throw new Error("Cannot fetch daily forecasts...");
            }
    
            // Set the new state with daily forecasts
            setWeeklyForecasts(dailyForecasts);

            // show weekly forecasts
            setShowWeeklyWeather(true)
            
            // To check the value, use a callback or separate effect to log the new state
            console.log("Weekly forecasts updated", dailyForecasts);
        } catch (error) {
            console.log("Error fetching weekly forecasts:", error);
        }
    };

    const getWeatherByCity = async (city) => {
        try {
            const code = await fetchCode(city);
            if (code) {
                await getCurrentWeatherByCode(code);
                await getWeeklyWeatherByCode(code)
            }
        } catch (error) {
            console.error("Error fetching weather by city:", error);
        }
    };

    const getWeatherFromInput = async () => {
        setShowCurrentWeather(false)
        setShowWeeklyWeather(false)
        const city = inputRef.current.value.trim().toLowerCase();
        if (!city) return;
        await getWeatherByCity(city);
    };



    const handleClick = () => {
        const newFavorite = {
            id: uuidv1(),
            city: currentCity
        }
        const cityExists = favoritesCities.some(fav => fav.city === newFavorite.city);

        if (!cityExists) {
            setFavoriteCities([...favoritesCities, newFavorite]);
        }
    }

    return (
        <>
            <h3>Home</h3>
            <input ref={inputRef} type="text" placeholder="Enter your city ..." />
            <button onClick={getWeatherFromInput}>Search</button>

            
            {showCurrentWeather && <div>
                <p>City: {currentCity} </p>
                <p>Temrature: {currentTemp} C</p>
                <p>{dailyTextMsg}</p>
                <button onClick={handleClick}>Add to Favorites</button>
            </div>}
            

        { 
          showWeeklyWeather &&

            <div className="container">
            <h3>5 days forecasts</h3>
            <div className="weekly-container">
                {weeklyForecasts.map((item)=>{
                    const converToC = (far)=> {
                        const Celsius = (Number(far) - 32) * 5/9
                        return Celsius.toFixed(1)
                    }
                    return (
                        <div className="weekly-block" key={uuidv1()}>
                            <p>Max: {converToC(item.Temperature.Maximum.Value)}</p>
                            <p>Min: {converToC(item.Temperature.Minimum.Value)} </p>
                            <p>{item.Day.IconPhrase}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        }
        </>
    );
};

export default Home;