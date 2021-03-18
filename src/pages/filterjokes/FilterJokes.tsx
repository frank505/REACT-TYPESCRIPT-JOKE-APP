import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps, useHistory } from 'react-router-dom';
import CustomCards from '../../components/Cards/CustomCard'
import CustomHeader from '../../components/Header/Header';
import CudtomButton from '../../components/Buttons/Buttons'
import './styles.scss'
import FilterForm  from './FilterForm';
import CustomButton from '../../components/Buttons/Buttons';
import {getCategoriesService, getFlagsService,getLanguagesServices} 
from '../../services/jokes/JokesService'
import { alertNotification } from '../../Utilities/HelperFunc';
import {baseUrl} from '../../services/HttpService'


const FilterJokes: React.FunctionComponent  = () => 
{

  
  const [categories,setCategories] = useState<string|object>('');
  const [flags,setFlags] = useState<any>('');
  const [language,setLanguage] = useState<any>('');
  const history = useHistory();
  const [filterValues,setFilterValues] = useState<any>({
   category:'Any',
   selectedCategory:[],
   language:'',
   jokeType:[],
   flags:[]
  });

  const [formValidatorProps,setFormValidatorProps] = useState('');


  useEffect(() => {

  getCategories();
  getFlags();
  getLanguages();
  
    return () => {
      
    };
  }, [])


  


  const getCategories = ():void =>
  {
    getCategoriesService().then((data:any)=>
    {
        console.log(data);
  
     if(data.error==false)
     {
       setCategories(data); 
     }
 
    })
  }

  const getFlags = ():void =>
  {
    getFlagsService().then((data:any)=>
    {
       if(data.error==false)
       {
         setFlags(data);
       }
    })
  }

  const getLanguages = ():void =>
  {
    console.log('hello world');
    getLanguagesServices().then((data:any)=>
    {
      setLanguage(data);
      
    });
  }


  const validation = () =>
  {
    const errors:any = {};
    errors.category = filterValues.category=='Custom' && filterValues.selectedCategory.length==0?
    'Select a custom category':'';
    errors.language = filterValues.language==''?'Language Type Must be selected':'';
    errors.jokeType =  filterValues.jokeType.length==0?'Please Select at least one joke type':'';
     setFormValidatorProps(errors);
     return errors;
  }

    
   

    const submitQueryData = () =>
    {
      let err = validation();
      if(noErrorsCheck(err)==false)
      {
       return alertNotification('Form Validation','One or more fields have not been entered','error');
      }
       let addedUrl = arrangeUrl(filterValues);
       history.push(`/random-jokes/${addedUrl}`);
    }

   const constructUrlFromLoop = (data:any,lengthElem:number):any =>
   {
    let stringAppendUrl = '';
    data.forEach((data:string,index:number):any=>
    {
      if(lengthElem==(index + 1)){
        stringAppendUrl += data;
      }else{
       stringAppendUrl += data+","; 
      }
     
    });

    return stringAppendUrl;
   }

    const arrangeUrl = (data:any):string =>
    {
      let stringAppendUrl:string = '';

     /**arrange categories  url*/
     if(data.category=='Any')
     {
       stringAppendUrl+='Any';
     }else
     {
       let lengthElem = data.selectedCategory.length;
       stringAppendUrl += constructUrlFromLoop(data.selectedCategory,lengthElem);
     }
   /**arrange language url */
    if(data.language!='en')
    {
      stringAppendUrl+='?lang='+data.language;
    }
   
    /**arrange flags url */
    let flagsLength = data.flags.length;
    if(flagsLength > 0)
    {
      stringAppendUrl+= data.language =='en' ? '?blacklistFlags=':'&blacklistFlags=';
      stringAppendUrl+= constructUrlFromLoop(data.flags,flagsLength);
    }
 /**array joketype url */
   stringAppendUrl += data.language=='en' && flagsLength==0? '?type=':'&type=';
   let jokeTypeLength = data.jokeType.length;
    if(jokeTypeLength > 0)
    {
      stringAppendUrl += constructUrlFromLoop(data.jokeType,jokeTypeLength);
    } 
     
  return stringAppendUrl;

    }


    const noErrorsCheck = (dataObject:any):boolean =>
    {
      for (var objects in dataObject) {
        console.log(objects);
      
        if (dataObject[objects] != '') 
        {
          return false;
        }
      
    }
    return true;
  }

    return (
        <div data-testid="filter-jokes-test-id">

          
               <CustomCards
            className="style-card-elem"
              contentElements={
                  <div>
                 <CustomHeader 
                   headerText="Filter Jokes"
                   variant="h5"
                   className={"custom-styles-filter-jokes-header"}
                  />
                


                 
                 <FilterForm  
                 categories={categories} 
                 filterValues={filterValues}
                 setFilterValues={setFilterValues}
                 formValidatorProps={formValidatorProps}
                 flags={flags}
                 language={language}
                 />
                 
                  <div data-testid="custom-button-submit"
                  onClick={submitQueryData}
                  >
                 <CustomButton 
                color="primary" 
                buttonText="Submit" 
                variant="contained"
                className="pad-btn-jokes-elem"
                />
                </div>
           

          

                  </div>
              }
           
            />

  

        </div>
    );
}

export default FilterJokes;

