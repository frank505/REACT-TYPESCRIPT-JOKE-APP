import React from "react";
import { render, fireEvent } from "@testing-library/react";
import JokesDataProps from "../../../../interfaces/pages/randomjokes/JokesDataProps";
import SingleJoke from "../../../../pages/randomjokes/SingleJoke";



function renderSingleJoke(props: Partial<JokesDataProps> = {}) {
  const defaultProps: JokesDataProps= 
   {
    responseData:{}
   }
   return render(<SingleJoke {...defaultProps} {...props} />);
  }
 


describe("<FilterForm />", () => {

    test("should render component with properties and parent", async () => 
       {
        renderSingleJoke();  
       });

    

  });


