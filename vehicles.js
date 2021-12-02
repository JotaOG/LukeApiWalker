import React from 'react';

export const Vehicles = ({ vehicles, display }) => {
    
  return (
    <div className='show-data'>
        {display}
        {vehicles?.name && (<p>name: {vehicles.name}</p>)}
        {vehicles?.model && (<p>model: {vehicles.model}</p>)}
        {vehicles?.manufacturer && (<p>manufacturer: {vehicles.manufacturer}</p>)}
        {vehicles?.cost_in_credits && (<p>cost_in_credits: {vehicles.cost_in_credits}</p>)}
        {vehicles?.length && (<p>length: {vehicles.length}</p>)}
        {vehicles?.max_atmosphering_speed && (<p>max_atmosphering_speed: {vehicles.max_atmosphering_speed}</p>)}
        {vehicles?.crew && (<p>crew: {vehicles.crew}</p>)}
        {vehicles?.passengers && (<p>passengers: {vehicles.passengers}</p>)}
        {vehicles?.cargo_capacity && (<p>cargo_capacity: {vehicles.cargo_capacity}</p>)}
        {vehicles?.consumables && (<p>consumables: {vehicles.consumables}</p>)}
        {vehicles?.vehicle_class && (<p>vehicle_class: {vehicles.vehicle_class}</p>)}
    </div>
)};