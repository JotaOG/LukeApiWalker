import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const People = ({ people, display }) => {
    const [planeta, setPlaneta ] = useState('');
   useEffect(() => {
     axios.get(`${people.homeworld}`)
     .then((res) => setPlaneta(res.data.name))
     .catch((err) => console.log(err))})
  return (
    <div className='show-data'>
        {display}
        {people?.name && (<p>name: {people.name}</p>)}
        {people?.height && (<p>height: {people.height}</p>)}
        {people?.mass && (<p>mass: {people.mass}</p>)}
        {people?.hair_color && (<p>hair_color: {people.hair_color}</p>)}
        {people?.skin_color && (<p>skin_color: {people.skin_color}</p>)}
        {people?.eye_color && (<p>eye_color: {people.eye_color}</p>)}
        {people?.birth_year && (<p>brith_year: {people.birth_year}</p>)}
        {people?.gender && (<p>gender: {people.gender}</p>)}
        {people?.homeworld && (<p>homeworld: {planeta}</p>)}
    </div>
)};