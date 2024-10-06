interface DailyForecastsResponse {
    DailyForecasts: Array<{
        Temperature: {
            Minimum: { Value: number };
            Maximum: { Value: number };
        };
        Day: {
            IconPhrase: string;
        };
    }>;
}

interface PropsCityDaily {
    weatherData: DailyForecastsResponse;
    cityName?: string;
}

const CityDaily = ({ weatherData, cityName }: PropsCityDaily): JSX.Element => {
    const temperature = weatherData.DailyForecasts[0].Temperature;
    const iconPhrase = weatherData.DailyForecasts[0].Day.IconPhrase;

    const convertToCelsius = (tempF: number): number | null => {
        return isNaN(tempF) ? null : Math.floor((tempF - 32) * 5 / 9);
    };

    return (
        <div>
            <h2>{cityName}</h2>
            <p>Min: {convertToCelsius(temperature.Minimum.Value)}°C</p>
            <p>Max: {convertToCelsius(temperature.Maximum.Value)}°C</p>
            <p>{iconPhrase}</p>
        </div>
    );
};

export default CityDaily;