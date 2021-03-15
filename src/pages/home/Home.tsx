import React, { useEffect, useState } from 'react';
import { Link, withRouter,RouteComponentProps } from 'react-router-dom';
import HomePageButton from '../../components/Buttons/Buttons';
import CustomHeader from '../../components/Header/Header';
import './Home.scss';
import {useHistory} from 'react-router-dom';


const Home: React.FunctionComponent  = () => {
 
    
    const history:any = useHistory();

   const goToCategoriesPage = ():void =>
   {
     history.push("/filter-jokes");
   }

    return (
        <div className="home-page-parent-div">
            <CustomHeader
             headerText="Welcome to Jokes App Click the button Below to Continue"
             variant="h5"
             className="space-elements"     
            />
          
            <HomePageButton 
            color="primary" 
            buttonText="Continue" 
            clickEvent={goToCategoriesPage}
            variant="contained"
            />
        </div>
    );
}

export default Home;

