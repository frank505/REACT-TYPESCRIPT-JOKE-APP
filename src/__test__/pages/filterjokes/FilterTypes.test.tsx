import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterTypes from "../../../pages/filterjokes/FilterTypes";
import FilterTypesProps from '../../../interfaces/pages/filterjokes/FilterTypesProps';





function renderFilterTypes(props: Partial<FilterTypesProps> = {}) 
{

  const defaultProps: FilterTypesProps = 
  {
    filterValues:{
        category:'Any',
        selectedCategory:[],
        language:'',
        jokeType:[],
        flags:[] 

    },
    setFilterValues:jest.fn(),
    formValidatorProps:{}
 }; 

  return render(<FilterTypes {...defaultProps} {...props}/>);
}

describe("<FilterTypes />", () => {

    test("should render component with property", async () => {
        renderFilterTypes();  
         
       });
  
    test("checkbox is checked",async() =>
    {
      const {getAllByTestId} = renderFilterTypes();
      let allUsers = await getAllByTestId("filter-types-checkbox");

      allUsers.forEach((element:any,index:any)=>{
        expect(element.classList.contains('Mui-checked')).toBe(false);
        fireEvent.click(element);
        /**
         * react material ui simply changes the class when checked as they use svg over 
         * default checked values
         */     
        expect(element.classList.contains('Mui-checked')).toBe(true);
      });
    })

   

  });


