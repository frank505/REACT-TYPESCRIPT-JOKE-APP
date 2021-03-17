import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterFlagsProps from "../../../interfaces/pages/filterjokes/FilterFlagsProps";
import FilterFlags from "../../../pages/filterjokes/FilterFlags";
import * as flags from '../../../mocks/pages/filterjokes/FilterFlags.json'


console.log(typeof flags);

const parseJson:any = flags;

function renderFilterFlags(props: Partial<FilterFlagsProps> = {}) {
  const defaultProps: FilterFlagsProps= {
   flags:{
       flags: parseJson.flags,
   },
    filterValues:{
        category:'Any',
        selectedCategory:[],
        language:'',
        jokeType:[],
        flags:[]  
        
    },
   setFilterValues: jest.fn()
  };
  return render(<FilterFlags {...defaultProps} {...props} />);
}

describe("<FilterFlags />", () => {

    test("should render component with properties and parent", async () => {
        renderFilterFlags();  
       });

       
       test("checkbox is checked",async() =>
       {
         const {getAllByTestId} = renderFilterFlags();
         let allUsers = await getAllByTestId("filter-flags-checkbox");
   
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


