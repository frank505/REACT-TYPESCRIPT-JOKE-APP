import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps } from 'react-router-dom';

const FilterJokes: React.FunctionComponent<RouteComponentProps<any>>  = () => {

    const [message, setMessage] = useState<string>('this is the categories page');

    return (
        <div data-testid="filter-jokes-test-id">
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default FilterJokes;