import React from 'react';

export const Starships = ({ starships, display }) => {
    
  return (
    <div className='show-data'>
        {display}
        {starships?.title && (<p>title: {starships.title}</p>)}
        {starships?.episode_id && (<p>episode_id: {starships.episode_id}</p>)}
        {starships?.opening_crawl && (<p>opening_crawl: {starships.opening_crawl}</p>)}
        {starships?.director && (<p>director: {starships.director}</p>)}
        {starships?.producer && (<p>producer: {starships.producer}</p>)}
        {starships?.release_date && (<p>release_date: {starships.release_date}</p>)}
        {starships?.characters && (<p>characters: {starships.characters}</p>)}
    </div>
)};