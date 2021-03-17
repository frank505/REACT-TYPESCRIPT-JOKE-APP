import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTypes from "../../../pages/filterjokes/FilterTypes";





function renderFilterTypes() {

  return render(<FilterTypes />);
}

describe("<FilterTypes />", () => {

    test("should render component with property", async () => {
        renderFilterTypes();  
         
       });
  
    test("should ensure root element is present",async() =>
    {
        const {findByTestId} = renderFilterTypes();  
        await findByTestId("filter-types-element");  
    })

   

  });


