interface WeatherDataWeekly {
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

interface CityWeekProps {
    weatherDataWeekly: WeatherDataWeekly;
}

const CityWeek = (props: CityWeekProps) => {
    const weeklyForecasts = props.weatherDataWeekly.DailyForecasts;

    return (
        <>
            {weeklyForecasts.map((item, i) => {
                return (
                    <div className="weekly-card" key={i}>
                        <p>Min: {item.Temperature.Minimum.Value}</p>
                        <p>Max: {item.Temperature.Maximum.Value}</p>
                        <p>{item.Day.IconPhrase}</p>
                    </div>
                );
            })}
        </>
    );
};

export default CityWeek;