import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const WeatherDetails = (props) => {

    const params = useParams()
    console.log('PARAMS OBJECT', params)

    return (
        <div>
            <h1>Weather Details</h1>
        </div>
    )
}

export default WeatherDetails;