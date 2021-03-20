import React from "react";
import { render, fireEvent } from "@testing-library/react";
import JokesDataProps from "../../../../interfaces/pages/randomjokes/JokesDataProps";
import TwoPartJoke from "../../../../pages/randomjokes/TwoPartJoke";



function renderTwoPartJoke(props: Partial<JokesDataProps> = {}) {
  const defaultProps: JokesDataProps= 
   {
    responseData:{}
   }
   return render(<TwoPartJoke {...defaultProps} {...props} />);
  }
 


describe("<FilterForm />", () => {

    test("should render component with properties and parent", async () => 
       {
        renderTwoPartJoke();  
       });

    

  });


