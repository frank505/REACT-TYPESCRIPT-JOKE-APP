import React, { 
  useEffect, 
  useState,
  useRef
  } from 'react';
import { 

  RouteComponentProps,
  useParams,
   withRouter 
  } from 'react-router-dom';
import { getJokesService } from '../../services/jokes/JokesService';
import CustomCards from '../../components/Cards/CustomCard'
import { CircularProgress } from '@material-ui/core';
import './styles.scss';
import SingleJoke from './SingleJoke';
import TwoPartJoke from './TwoPartJoke';
import BothJokes from './BothJokes';
import RandomJokesProps from '../../interfaces/pages/randomjokes/RandomJokesProps';
import { alertNotification } from '../../Utilities/HelperFunc';
import {useHistory,useLocation} from 'react-router-dom';
import CustomButton from '../../components/Buttons/Buttons';

 

const RandomJokes: React.FunctionComponent<RandomJokesProps & RouteComponentProps> = 
({dataItem}:any) => 
 {

  const history:any = useHistory();

   const goBackToHomePage = ():void =>
   {
     history.push("/");
   }

    const params:any = useParams();
    const [data,setData] = useState<any>(dataItem);
    const location:any = useLocation();

     const reOrderUrl = ():any =>
     {
        const urlParams:any = new URLSearchParams(window.location.search); 
     let finalUrl:any = params?.category+"?";
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

      getJokeData();

      return () => {
       
      };
    }, [])
    

    const getJokeData = ():any =>{
      const urlToPassToUrl:string = reOrderUrl();
   
      getJokesService(urlToPassToUrl).then((data:any)=>
      {
        if(data.error==false)
        {
          setData(data); 
          console.log(data);

        }else if(data.error==true)
        {
          alertNotification(`${data.code} error`,`${data.message}\n ${data.causedBy}\n ${data.causedBy[0]} `,
         "error");
        }
         
      });
    }


    const goBackToJokesFilterPage = ():any =>
    {
      history.push("/filter-jokes");
    }
   

  

    return (
        <div id="parent-div-elem-random-jokes" data-testid="parent-elem-jokes-display">
          {
              <CustomCards
            className="style-card-elem"
              contentElements={
                data=='' || data==null?
                <CircularProgress color="secondary" data-testid="loader-circular-elem"/>
                :
                data.hasOwnProperty('error') && data.error==false?
                <div data-testid="random-jokes-data" >
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
                 
                 <div  className="go-back-to-home"
                  data-testid="go-back-to-home-page" onClick={goBackToHomePage}>
                 <CustomButton
            color="primary" 
            buttonText="Go Back To Home Page" 
            variant="contained"
            className="full-width-btn"
            />
                 </div>

                 <div  className="go-back-to-home"
                  data-testid="go-back-to-filter-page" onClick={goBackToJokesFilterPage}>
                 <CustomButton
            color="primary" 
            buttonText="Go Back To Jokes Filter Page" 
            variant="contained"
            className="full-width-btn"
            />
                 </div>
               

                 </div>
                 :
                 <CircularProgress color="secondary" data-testid="loader-circular-elem"/>
            }
             />
         
            
          }
            

        </div>
    );
}

export default   withRouter(RandomJokes);