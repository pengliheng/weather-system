import React from "react";
import moment from "moment";
import { AiOutlineLoading } from "react-icons/ai";
import "./index.css";
import { StoreContext } from "../../App";

export const WeatherDisplay = () => {
  const { state } = React.useContext(StoreContext);
  if (state.isLoading) {
    return (
      <div className="weather-loading">
        <AiOutlineLoading />
      </div>
    );
  }
  if (state.isError) {
    return (
      <div className="weather-not-found">
        <div className="weather-not-found-content">Not found</div>
      </div>
    );
  }
  if (state.weather) {
    return (
      <>
        <div className="weather">
          <p className="weather-city">
            {state.weather.city}, {state.weather.country}
          </p>
          <p className="weather-main">{state.weather.weather[0].main}</p>
          <table>
            <tbody>
              <tr>
                <td>Description:</td>
                <td>{state.weather.weather[0].description}</td>
              </tr>
              <tr>
                <td>Temperature:</td>
                <td>
                  {state.weather.main.temp_min}°C ~{" "}
                  {state.weather.main.temp_max}
                  °C
                </td>
              </tr>
              <tr>
                <td>Humidity:</td>
                <td>{state.weather.main.humidity}%</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>
                  {moment(state.weather.main.time).format("YYYY-MM-DD HH:mm A")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return <></>;
};
