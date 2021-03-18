import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Languages from "../../../pages/filterjokes/Languages";
import * as language from '../../../mocks/pages/filterjokes/Languages.json'
import LanguageProps from "../../../interfaces/pages/filterjokes/LanguageProps";


 
const filterFunc = jest.fn();

function renderLanguage(props: Partial<LanguageProps> = {}) {
  const defaultProps: LanguageProps= {
    language: language,
   filterValues:{},
   setFilterValues:filterFunc,
   formValidatorProps:{}
  };
  return render(<Languages {...defaultProps} {...props} />);
}

describe("<FilterFlags />", () => {

    test("should render component with properties and parent component with data-testid exist", 
    async () => {
        renderLanguage();  
       });

 test("select option works",async()=>
 {
    const {findByTestId} = renderLanguage();  
    let selectOptionId:HTMLElement = await findByTestId('select-data-test-id');
   let optionData:any = selectOptionId.querySelector('input');
    expect(optionData.value).toEqual("");
    fireEvent.change(optionData);
 })
 

   

  });
  


