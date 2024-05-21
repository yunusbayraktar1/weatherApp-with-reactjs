import React from 'react'
import './card.css'

const Card =  ({temp,weather,tmp_min,tmp_max}) => {
   
    return <div className='card'>
      
        <h2>{Math.round(temp)}°C</h2>
        <h3>{weather}</h3>
        <h2>{Math.round(tmp_min)}°C/{Math.round(tmp_max)}°C</h2>
    </div>
}

export default Card;