import React, { useEffect, useState } from 'react';
import JokesDataProps from '../../interfaces/pages/randomjokes/JokesDataProps';
import './styles.scss';



const SingleJoke: React.FunctionComponent<JokesDataProps> = ({
    responseData
     }:JokesDataProps) => 
 {




  
    
   
 
  

    return ( 
        <div>
            <div className="header-jokes">Joke</div>
        <div 
        className="element-styles"
        data-testid="single-joke-inner-elem-div"
        dangerouslySetInnerHTML=
        {{ __html:  responseData.joke }} 
        />
        </div>
       
           
      
    );
}

export default SingleJoke;