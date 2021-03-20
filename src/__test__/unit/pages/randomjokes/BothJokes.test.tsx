import React from "react";
import { render, fireEvent } from "@testing-library/react";
import JokesDataProps from "../../../../interfaces/pages/randomjokes/JokesDataProps";
import BothJokes from "../../../../pages/randomjokes/BothJokes";



function renderBothJokes(props: Partial<JokesDataProps> = {}) {
  const defaultProps: JokesDataProps= 
   {
    responseData:{}
   }
   return render(<BothJokes {...defaultProps} {...props} />);
  }
 


describe("<FilterForm />", () => {

    test("should render component with properties and parent", async () => 
       {
        renderBothJokes();  
       });

    

  });


