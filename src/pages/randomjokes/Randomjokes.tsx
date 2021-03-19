import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJokesService } from '../../services/jokes/JokesService';
import CustomCards from '../../components/Cards/CustomCard'
import { CircularProgress } from '@material-ui/core';
import './styles.scss';
import SingleJoke from './SingleJoke';
import TwoPartJoke from './TwoPartJoke';
import BothJokes from './BothJokes';
import CustomHeader from '../../components/Header/Header';
 

const RandomJokes: React.FunctionComponent = () => 
 {

    const { category } = useParams<{ category: string }>();
    const [data,setData] = useState<any>('');


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
   
        getJokesService(urlToPassToUrl).then((data:any)=>
        {
            setData(data);
            console.log(data);
        });

      return () => {
        
      };
    }, [])
    
   

  

    return (
        <div id="parent-div-elem-random-jokes">
          {
              <CustomCards
            className="style-card-elem"
              contentElements={
                data=='' || data==null?
                <CircularProgress color="secondary"/>
                :
                data.hasOwnProperty('error') && data.error==false?
                <>
                <div className="custom-response-style-header">
                Category :{""+data.category.toUpperCase()+""}
                </div>
                
                <div className="custom-response-style-header">
                Joke Type :{""+data.type.toUpperCase()+""}
                </div>

                <div className="custom-response-style-header">
                 Language: {`${data.lang}-English`.toUpperCase()}
                </div>
               
                
                 {
                      data.type=='single'?
                      <SingleJoke responseData={data} />
                       : data.type=='twopart'?
                       <TwoPartJoke responseData={data} />
                        :
                    <BothJokes responseData={data} />
                 }
                 </>
                 :
                 <CircularProgress color="secondary"/>
            }
             />
         
            
          }
           

        </div>
    );
}

export default RandomJokes;