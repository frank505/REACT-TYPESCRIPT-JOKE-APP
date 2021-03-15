import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Card,CardContent,CardActions } from '@material-ui/core';
import CardsProps from './CardsPropInterface'
import './styles.scss';

const CustomCards: React.FunctionComponent<CardsProps> = 
     ({customStyles,className,contentElements,actionsElement}:any) => {

    return (
       <Card className={`custom-card-styles ${className}`}
        data-testid="card-test-id"
        style={customStyles}
        >
           <CardContent>
           {contentElements}
           </CardContent>
        
         
           <CardActions>
              {actionsElement}
           </CardActions>

       </Card>
    );
}

export default CustomCards;