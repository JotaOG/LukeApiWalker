import React from 'react';

export const Species = ({ species, display }) => {
    
  return (
    <div className='show-data'>
        {display}
        {species?.name && (<p>name: {species.name}</p>)}
        {species?.classification && (<p>classification: {species.classification}</p>)}
        {species?.desiganation && (<p>designation: {species.designation}</p>)}
        {species?.average_height && (<p>average_height: {species.average_height}</p>)}
        {species?.skin_colors && (<p>skin_colors: {species.skin_colors}</p>)}
        {species?.hair_colors && (<p>hair_colors: {species.hair_colors}</p>)}
        {species?.eye_colors && (<p>eye_colors: {species.eye_colors}</p>)}
        {species?.average_lifespan && (<p>average_lifespan: {species.average_lifespan}</p>)}
        {species?.homeworld && (<p>homeworld: {species.homeworld}</p>)}
        {species?.language && (<p>language: {species.language}</p>)}
    </div>
)};