import React from 'react';
import CustomButton from '../../components/Buttons/Buttons';
import CustomHeader from '../../components/Header/Header';
import './styles.scss';
import {useHistory} from 'react-router-dom';


const Home: React.FunctionComponent  = () => {
 
    
    const history:any = useHistory();

   const goToCategoriesPage = ():void =>
   {
     history.push("/filter-jokes");
   }

    return (
        <div id="parent-div-home">
        <div className="home-page-parent-div" >
            <CustomHeader
             headerText="Welcome to Jokes App Click the button Below to Continue"
             variant="h5"
             className="space-elements"     
            />
          
            <CustomButton
            color="primary" 
            buttonText="Continue" 
            clickEvent={goToCategoriesPage}
            variant="contained"
            />
        </div>
        </div>
    );
}

export default Home;

