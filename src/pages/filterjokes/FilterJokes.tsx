import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps } from 'react-router-dom';
import CustomCards from '../../components/Cards/CustomCard'
import CustomHeader from '../../components/Header/Header';
import './styles.scss'
import FilterForm  from './FilterForm';

const FilterJokes: React.FunctionComponent  = () => {

    const [message, setMessage] = useState<string>('this is the categories page');

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
                  </div>
              }
            actionElements={
                <>
                </>
            }
            />
        </div>
    );
}

export default FilterJokes;

