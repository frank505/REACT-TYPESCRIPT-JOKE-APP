import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Languages from "../../../pages/filterjokes/Languages";
import * as language from '../../../mocks/pages/filterjokes/Languages.json'
import LanguageProps from "../../../interfaces/pages/filterjokes/LanguageProps";





function renderLanguage(props: Partial<LanguageProps> = {}) {
  const defaultProps: LanguageProps= {
   language:{
       language: language
   }
  };
  return render(<Languages {...defaultProps} {...props} />);
}

describe("<FilterFlags />", () => {

    test("should render component with properties and parent component with data-testid exist", 
    async () => {
        renderLanguage();  
       });

 test("root element exist",async()=>
 {
    const {findByTestId} = renderLanguage();  
    await findByTestId("filter-language-test-root-elem");
 })
 

   

  });
  


