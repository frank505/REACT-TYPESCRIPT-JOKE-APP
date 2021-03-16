import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps } from 'react-router-dom';
import CustomCards from '../../components/Cards/CustomCard'
import CustomHeader from '../../components/Header/Header';
import CudtomButton from '../../components/Buttons/Buttons'
import './styles.scss'
import FilterForm  from './FilterForm';
import CustomButton from '../../components/Buttons/Buttons';
import {getCategoriesService, getFlagsService} from '../../services/jokes/JokesService'

const FilterJokes: React.FunctionComponent  = () => {

  const [categories,setCategories] = useState<string|object>('');
  const [flags,setFlags] = useState<any>('');

  useEffect(() => {

  getCategories();
  getFlags();

    return () => {
      
    };
  }, [])


  const getCategories = ():any =>
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

  const getFlags = ():any =>
  {
    getFlagsService().then((data:any)=>
    {
       if(data.error==false)
       {
         setFlags(data);
       }
    })
  }


    const clearFilterForm = () =>
    {

    }

    const submitQueryData = () =>
    {

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
                 flags={flags}
                 />
                
                 <CustomButton 
                color="primary" 
                buttonText="Submit" 
                clickEvent={submitQueryData}
                variant="contained"
                className="pad-btn-jokes-elem"
                />
                <CustomButton 
                color="secondary" 
                buttonText="Clear" 
                clickEvent={clearFilterForm}
                variant="contained"
                className="pad-btn-jokes-elem"
                />

                  </div>
              }
           
            />
        </div>
    );
}

export default FilterJokes;

