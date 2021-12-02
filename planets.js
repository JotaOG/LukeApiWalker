import React from 'react';

export const Planets = ({ planets, display }) => {
    
  return (
    <div className='show-data'>
        {display}
        {planets?.name && (<p>name: {planets.name}</p>)}
        {planets?.rotation_period && (<p>rotation_period: {planets.rotation_period}</p>)}
        {planets?.orbital_period && (<p>orbital_period: {planets.orbital_period}</p>)}
        {planets?.diameter && (<p>diameter: {planets.diameter}</p>)}
        {planets?.climate && (<p>climate: {planets.climate}</p>)}
        {planets?.gravity && (<p>gravity: {planets.gravity}</p>)}
        {planets?.terrain && (<p>terrain: {planets.terrain}</p>)}
        {planets?.surface_water && (<p>surface_water: {planets.surface_water}</p>)}
        {planets?.population && (<p>population: {planets.population}</p>)}
    </div>
)};