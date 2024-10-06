import { useRef, useState } from "react";
import axios from "axios";
import CityDaily from "./CityDaily";
import CityWeek from "./CityWeek";

const KEY = 'xAD6mImOshJTJpAWXF2AFxbLmvztMGPY';
const URL = '/api/locations/v1/cities/search';
const URL_DAILY = '/api/forecasts/v1/daily/1day/';
const URL_WEEKLY = '/api/forecasts/v1/daily/5day/';

interface CityResponse {
    Key: string;
    LocalizedName: string;
    Country: {
        LocalizedName: string;
    };
}

interface Forecast {
    Temperature: {
        Minimum: { Value: number };
        Maximum: { Value: number };
    };
    Day: {
        IconPhrase: string;
    };
}

interface WeatherForecastResponse {
    DailyForecasts: Forecast[];
}

const Search: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [weatherData, setWeatherData] = useState<WeatherForecastResponse | null>(null);
    const [weatherDataWeekly, setWeatherDataWeekly] = useState<WeatherForecastResponse | null>(null);
    const [cityName, setCityName] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getDailyWeather = async (cityKey: string, cityName: string) => {
        try {
            const response = await axios.get<WeatherForecastResponse>(`${URL_DAILY}${cityKey}`, {
                params: {
                    apikey: KEY,
                },
            });
            setWeatherData(response.data);
            setCityName(cityName);
        } catch (error) {
            setError("Failed to fetch daily weather data.");
            console.error(error);
        }
    };

    const getWeeklyWeather = async (cityKey: string) => {
        try {
            const response = await axios.get<WeatherForecastResponse>(`${URL_WEEKLY}${cityKey}`, {
                params: {
                    apikey: KEY,
                },
            });
            setWeatherDataWeekly(response.data);
        } catch (error) {
            setError("Failed to fetch weekly weather data.");
            console.error(error);
        }
    };

    const getCityKey = async (value: string) => {
        try {
            setLoading(true);
            const response = await axios.get<CityResponse[]>(URL, {
                params: {
                    apikey: KEY,
                    q: value,
                },
            });
            console.log(response)
            const city = response.data[0];
            if (city?.Key) {
                await Promise.all([
                    getDailyWeather(city.Key, city.LocalizedName),
                    getWeeklyWeather(city.Key),
                ]);
            } else {
                setError("City not found.");
            }
        } catch (error) {
            setError("Failed to fetch city information.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleClick = async () => {
        const value = inputRef.current?.value;
        if (value) {
            setError(null);
            setWeatherData(null);
            setWeatherDataWeekly(null);
            getCityKey(value);
        }
    };

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Enter the city..." />
            <button onClick={handleClick}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weatherData && cityName && (
                <CityDaily weatherData={weatherData} cityName={cityName} />
            )}
            <div className="weekly-forecast">
                {weatherDataWeekly && (
                    <CityWeek weatherDataWeekly={weatherDataWeekly} />
                )}
            </div>
        </>
    );
};

export default Search;