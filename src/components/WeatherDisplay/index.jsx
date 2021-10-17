import React from 'react'
import moment from 'moment'
import { AiOutlineLoading } from 'react-icons/ai'
import './index.css'

export function WeatherDisplay({data}) {
    if (data.isLoading) {
        return <div className="weather-loading"><AiOutlineLoading /></div>
    }
    if (data.isError) {
        return (
            <div className="weather-not-found">
                <div className="weather-not-found-content">Not found</div>
            </div>
        )
    }
    if (data.weather) {
        return <>
            <div className="weather">
                <p className="weather-city">{data.weather.city}, {data.weather.country}</p>
                <p className="weather-main">{data.weather.weather[0].main}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Description:</td>
                            <td>{data.weather.weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>Temperature:</td>
                            <td>{data.weather.main.temp_min}°C ~ {data.weather.main.temp_max}°C</td>
                        </tr>
                        <tr>
                            <td>Humidity:</td>
                            <td>{data.weather.main.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td>{moment(data.weather.main.time).format('YYYY-MM-DD HH:mm A')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    }
    return <></>
}