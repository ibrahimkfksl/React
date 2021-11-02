import {useEffect, useState} from 'react'
import axios from "axios"

function GetWeather() {
    const [weather, setWeather] = useState(null)
    useEffect(()=>{
        axios("https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=ee037aa8dd46108358534ef42715401f")
            .then((res) => console.log(res.data))
    },[])

    return (
        <h1>selam</h1>
    )
}

export default GetWeather
