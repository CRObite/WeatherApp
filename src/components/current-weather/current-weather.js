import "./current-weather.css"
import AlertPopup from "../alert/AlertPopup";
import { useState } from "react";

const CurrentWeather = ({data}) => {

    const [isAlertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
  
    // Function to open the alert with a custom message
    const showAlert = (message) => {
      setAlertMessage(message);
      setAlertOpen(true);
    };
  
    // Function to close the alert
    const closeAlert = () => {
      setAlertOpen(false);
    };
  
    // Example usage
    const changeMessage = () => {
        if(data.main.temp >= 20){
            showAlert("Temperature above 20°C: T-shirt or blouse, Shorts or skirts, Sandals or lightweight shoes, Sunscreen and sunglasses");
        }else if(data.main.temp >= 10 && data.main.temp <= 20){
            showAlert("Temperature between 10°C and 20°C: Light jacket or cardigan, Comfortable shoes or sneakers, Light socks, Hat or cap (optional), T-shirts or long-sleeved shirts");
        }else if(data.main.temp >= 0 && data.main.temp <= 10){
            showAlert("Temperature between 0°C and 10°C: Medium-weight jacket or sweater, Light boots or sneakers, Medium-weight socks, Hat or beanie, Layered clothing with long-sleeved shirts and light sweaters");
        }else if(data.main.temp >= -10 && data.main.temp <= 0){
            showAlert("Temperature between -10°C and 0°C: Winter coat or jacket, Warm boots, Thick socks, Hat and gloves, Layered clothing with long-sleeved shirts and sweaters");
        }else if(data.main.temp <= -10){
            showAlert("Temperature below -10°C: Heavy winter coat or parka, Insulated boots, Thermal or woolen socks, Hat, scarf, and gloves, Layered clothing with thermal or woolen base layers");
        }
    };
  
    return (

        <div className="weather">

            <AlertPopup
                isOpen={isAlertOpen}
                onClose={closeAlert}
                message={alertMessage}
            />

            <div className="top">
                <div>
                    <p className = "city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>

                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>

            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>

            <button onClick={changeMessage} className="button-3">Recommendations</button>
        </div>
    );


    
} 

export default CurrentWeather;