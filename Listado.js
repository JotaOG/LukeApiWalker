import React from 'react';
import { People } from './people';
import { Planets } from './planets';
import { Species } from './species';
import { Starships } from './starships';
import { Vehicles } from './vehicles';

export const Listado = () => {
    return (
        <div>
            <h1>Listado</h1>
            <People />
            <Planets />
            <Species />
            <Starships />
            <Vehicles />
        </div>
    );
}