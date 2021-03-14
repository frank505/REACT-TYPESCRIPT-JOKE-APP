import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const RandomJokes: React.FunctionComponent<RouteComponentProps<any>> = () => {
    
    const [message, setMessage] = useState<string>('this is the jokes page');

  

    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default withRouter(RandomJokes);