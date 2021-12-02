import React from 'react';

export const Films = ({ films, display }) => {
    
  return (
    <div>
        {display}
        {films?.title && (<p>title: {films.title}</p>)}
        {films?.episode_id && (<p>episode_id: {films.episode_id}</p>)}
        {films?.opening_crawl && (<p>opening_crawl: {films.opening_crawl}</p>)}
        {films?.director && (<p>director: {films.director}</p>)}
        {films?.producer && (<p>producer: {films.producer}</p>)}
        {films?.release_date && (<p>release_date: {films.release_date}</p>)}
    </div>
)};
