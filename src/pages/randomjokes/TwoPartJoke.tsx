import React, { useEffect, useState } from 'react';
import JokesDataProps from '../../interfaces/pages/randomjokes/JokesDataProps';
import './styles.scss';

const TwoPartJoke: React.FunctionComponent<JokesDataProps> = ({
    responseData
     }:JokesDataProps)=> 
 {

 


  
    
   

  

    return (
        <div>
        <div className="header-jokes">Joke</div>
         <div className="header-setup-delivery">SetUp</div>
        <div 
    className="element-styles"
    dangerouslySetInnerHTML=
    {{ __html:  responseData.setup }} 
    />
     <div className="header-setup-delivery">Delivery</div>
    <div 
    className="element-styles"
    dangerouslySetInnerHTML=
    {{ __html:  responseData.delivery }} 
    />
    </div>
    );
}

export default TwoPartJoke;