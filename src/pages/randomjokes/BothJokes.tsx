import React, { useEffect, useState } from 'react';
import JokesDataProps from '../../interfaces/pages/randomjokes/JokesDataProps';
import './styles.scss';

const BothJokes: React.FunctionComponent<JokesDataProps> = ({
          responseData
     }:JokesDataProps) => 
 {

  

    return (
        <div id="elem-content">
        both jokes
        </div>
    );
}

export default BothJokes;