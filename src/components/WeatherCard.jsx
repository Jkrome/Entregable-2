import React from 'react'
import { useState } from 'react'
import './styles/weatherCard.css'

const WeatherCard = ({weather, temp}) => {

    const [isCel, setIsCel] = useState(true)

    const handleTemp = () => {
        setIsCel(!isCel)
    }
  return (
    <div className='weatherCard'>
        <h1 className='weatherCard_title'>Weather app</h1>
        <h2 className='weatherCard_city'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='weatherCard_body'>
            <figure className='weatherCard_img'>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt='weather image' />
            </figure>
            <article className='weatherCard_data'>
                <h3 className='weatherCard_description'>"{weather?.weather[0].description}"</h3>
                <ul className='weatherCard_list'>
                    <li className='weatherCard_item'><span>Wind speed: </span><span>{weather?.wind.speed} m/s</span></li>
                    <li className='weatherCard_item'><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                    <li className='weatherCard_item'><span>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                </ul>
            </article>
        </section>
        <h2 className='weatherCard_temp'>{isCel ? temp?.cel + 'ºC': temp?.fah + 'ºF'}</h2>
        <button className='weatherCard_btn' onClick={handleTemp}>Change to {isCel? 'ºF' : 'ºC'}</button>
    </div>
  )
}

export default WeatherCard