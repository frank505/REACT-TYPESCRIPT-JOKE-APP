import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps } from 'react-router-dom';
import CustomCards from '../../components/Cards/CustomCard'
import CustomHeader from '../../components/Header/Header';
import CudtomButton from '../../components/Buttons/Buttons'
import './styles.scss'
import FilterForm  from './FilterForm';
import CustomButton from '../../components/Buttons/Buttons';

const FilterJokes: React.FunctionComponent  = () => {

    const [message, setMessage] = useState<string>('this is the categories page');

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
                 <FilterForm />
                
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

