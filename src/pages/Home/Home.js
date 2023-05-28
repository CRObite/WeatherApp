
import Search from '../../components/search/search';
import CurrentWeather from '../../components/current-weather/current-weather';
import Forecast from '../../components/forecast/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL} from '../../api';
import { useState } from 'react';
import '../Home/Home.css';
import Practice from '../../components/practice/practice';
import GetCurrentAddress from "../../components/currentInfo/getCurrentAddress";
import CurrentTimeTimer from '../../components/timer/timer';
import Error from '../../components/errorMessage/errorMessage';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Home = ({changeBackgroundImage}) => {
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast , setForecast] = useState(null);
  

  const handleOnSearchChange = (searchData) => {
    const [lat,lon] = searchData.value.split(" ");
    const [name,code] = searchData.label.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    
     

    const handleButtonClick = () => {
        let newImage = 'https://source.unsplash.com/1600x900/?' + name;
        changeBackgroundImage(newImage);
    };

    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response) =>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();


        setCurrentWeather({ city: searchData.label ,...weatherResponse});
        setForecast({ city: searchData.label,...forecastResponse});
        

        handleButtonClick();

      })
      .catch((err) => setError(error.message));
  } 
  

  

  return (
    <div className = "container">
      <Search onSearchChange={handleOnSearchChange}/>
      <div className='extraInfo'>
        <ErrorBoundary>
            <GetCurrentAddress/>
            <CurrentTimeTimer/>
        </ErrorBoundary>
        {error && <Error message={error} />}
      </div>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data = {forecast}/>}
      <Practice/>
    </div>
    
  );
}

export default Home;