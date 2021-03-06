import React,{useState as useStateMock} from "react";
import { render, fireEvent,screen,
   getByLabelText, getByText,EventType} from "@testing-library/react";
import FilterCategoriesProps from "../../../../interfaces/pages/filterjokes/FilterCategoriesProps";
import FilterCategories from "../../../../pages/filterjokes/FilterCategories";
import * as filterCategories from '../../../../mocks/pages/filterjokes/FilterCategories.json';
import userEvent from '@testing-library/user-event'





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
    let customCategories = await getAllByTestId('radio-elem-control');
    customCategories.forEach( (currInputElem:any,index:number)=>
     {
      let radioBtnValue = currInputElem.querySelector('[aria-disabled="false"]').querySelector('input');
      let spanIsCheckedElem = currInputElem.querySelector('[aria-disabled="false"]');
      console.debug(radioBtnValue.value);
      
      if(radioBtnValue.value=='Custom')
      { 
        /**
         * instead of using the default properties react material ui 
         * toggles the MUI-CHecked class for checking and unchecking radio buttons and checkboxes
         */
        expect(spanIsCheckedElem.classList.contains('Mui-checked')).toBe(false);
        fireEvent.click(radioBtnValue); 
        expect(spanIsCheckedElem.classList.contains('Mui-checked')).toBe(true);
      }else if(radioBtnValue.value=="Any")
      {
        expect(spanIsCheckedElem.classList.contains('Mui-checked')).toBe(true);
      }
        
    }); 
 });

  
 test('check box is checked',async()=>{
  
    const {getAllByTestId} = renderFilterCategories();
    let customCategories = await getAllByTestId('show-custom-categories');
    
     customCategories.forEach((elem:any,index:number)=>{
      let currInputElem = elem.querySelector('[aria-disabled="false"]');
      /**
         * instead of using the default properties react material ui 
         * toggles the MUI-CHecked class for checking and unchecking radio buttons and checkboxes
         */
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


