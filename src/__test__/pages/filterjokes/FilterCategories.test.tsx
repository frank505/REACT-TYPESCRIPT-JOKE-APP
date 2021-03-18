import React,{useState as useStateMock} from "react";
import { render, fireEvent,screen, getByLabelText, getByText } from "@testing-library/react";
import FilterCategoriesProps from "../../../interfaces/pages/filterjokes/FilterCategoriesProps";
import FilterCategories from "../../../pages/filterjokes/FilterCategories";
import * as filterCategories from '../../../mocks/pages/filterjokes/FilterCategories.json';





const parseJson:any = filterCategories;

const filterFunc = jest.fn();

const defaultProps: FilterCategoriesProps= 
  {
    categories:{
        categories: parseJson.categories,
    },
    filterValues:{
        category:'Any',
        selectedCategory:[],
        language:'',
        jokeType:[],
        flags:[]
    },
    setFilterValues:filterFunc,
    formValidatorProps:{}
 }; 
 
 


function renderFilterCategories(props:Partial<FilterCategoriesProps>={})
{
    return render(<FilterCategories {...defaultProps} {...props} />);
}


describe("<FilterCategories />", () => {

 test("render component" , ()=>{
 renderFilterCategories();
 }) ; 
    
 test("radio group has been changed", async()=>{

    const {getAllByTestId} = renderFilterCategories();
    let customCategories = await getAllByTestId('show-custom-categories');
    customCategories.forEach((elem:any,index:number)=>{
        let currInputElem = elem.querySelector('[aria-disabled="false"]');
        if(!currInputElem.classList.contains('Mui-checked'))
        {
          fireEvent.click(currInputElem);
          expect(currInputElem.classList.contains('Mui-checked')).toBe(true);
        }
    });
 });


 test('check box is checked',async()=>{
  
    const {getAllByTestId} = renderFilterCategories();
    let customCategories = await getAllByTestId('show-custom-categories');
    
     customCategories.forEach((elem:any,index:number)=>{
      let currInputElem = elem.querySelector('[aria-disabled="false"]');
      if(currInputElem.classList.contains('Mui-checked'))
      {
          let radioBtnValue = elem.querySelector('input').value;
          if(radioBtnValue=='Custom')
          {
            
            let allUsers = getAllByTestId("check-user");

            allUsers.forEach((element:any,index:any)=>{
              fireEvent.click(element);
              /**
               * react material ui simply changes the class when checked as they use svg over 
               * default checked values
               */
              expect(element.classList.contains('Mui-checked')).toBe(true);
            });

          }
      }
        
     });
 });
 


  });


