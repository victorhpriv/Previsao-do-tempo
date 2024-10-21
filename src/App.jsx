import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5days from './components/WeatherInformations5days/WeatherInformations5days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()

  const inputRef = useRef()

  async function searchcity() {
    const city = inputRef.current.value
    const key = "4e8ee932000ec9a2e7a40cdc7cbf7c84"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)

    setWeather5days(apiInfo5days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite aqui o nome da cidade!' />
      <button onClick={searchcity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5days && <WeatherInformations5days weather5days={weather5days} />}
    </div>
  )
}

export default App
