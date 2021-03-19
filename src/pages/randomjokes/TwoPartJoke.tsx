import React, { useEffect, useState } from 'react';
import JokesDataProps from '../../interfaces/pages/randomjokes/JokesDataProps';
import './styles.scss';

const TwoPartJoke: React.FunctionComponent<JokesDataProps> = ({
    responseData
     }:JokesDataProps)=> 
 {

 


  
    
   

  

    return (
        <div id="elem-content">
       two part jokes
        </div>
    );
}

export default TwoPartJoke;