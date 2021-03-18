import { count } from 'node:console';
import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps,useParams } from 'react-router-dom';
import { getJokesService } from '../../services/jokes/JokesService';

const RandomJokes: React.FunctionComponent = () => 
 {

    const { category } = useParams<{ category: string }>();


     const reOrderUrl = ():any =>
     {
        const urlParams:any = new URLSearchParams(window.location.search); 
     let finalUrl:any = category+"?";
     let countElem = 0;
     let elemCount = window.location.search.split('&').length;
     for(let value of urlParams.keys())
     {
        countElem++;
    if(countElem==elemCount)
    {
        finalUrl += value+"="+urlParams.get(value)+"";
    }else
    {
        finalUrl += value+"="+urlParams.get(value)+"&";
    }
     
     }
    
     return finalUrl;
    
     } 

    useEffect(() => {
     const urlToPassToUrl:string = reOrderUrl();

        getJokesService(urlToPassToUrl).then((data:any)=>{
        console.log(data);
        });

      return () => {
        
      };
    }, [])
    
    const [message, setMessage] = useState<string>('this is the jokes page');

  

    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default RandomJokes;