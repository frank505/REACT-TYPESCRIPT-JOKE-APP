import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterFormProps from "../../../interfaces/pages/filterjokes/FilterFormProps";
import * as flags from '../../../mocks/pages/filterjokes/FilterFlags.json'
import * as categories from '../../../mocks/pages/filterjokes/FilterCategories.json'
import * as languages from '../../../mocks/pages/filterjokes/Languages.json';
import FilterForm from "../../../pages/filterjokes/FilterForm";



function renderFilterForm(props: Partial<FilterFormProps> = {}) {
  const defaultProps: FilterFormProps= {
    flags:{
      flags:flags.flags
    },
   categories:{
       categories: categories.categories,
    },
    language:{
     language:languages
    },
    filterValues:{},
    setFilterValues(){
      
    }
   }
   return render(<FilterForm {...defaultProps} {...props} />);
  }
 


describe("<FilterForm />", () => {

    test("should render component with properties and parent", async () => {
        renderFilterForm();  
       });

  
   

   

  });


