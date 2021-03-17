import React,{useState as useStateMock} from "react";
import { render, fireEvent,screen, getByLabelText, getByText } from "@testing-library/react";
import FilterCategoriesProps from "../../../interfaces/pages/filterjokes/FilterCategoriesProps";
import FilterCategories from "../../../pages/filterjokes/FilterCategories";
import * as filterCategories from '../../../mocks/pages/filterjokes/FilterCategories.json';
import {shallow} from 'enzyme';




const parseJson:any = filterCategories;

const defaultProps: FilterCategoriesProps= 
  {
    categories:{
        categories: parseJson.categories,
    },

 }; 
 
 


function renderFilterCategories(props:Partial<FilterCategoriesProps>={})
{
    return render(<FilterCategories {...defaultProps} {...props} />);
}

function shallowRenderFilterCategories(props:Partial<FilterCategoriesProps>={})
{
    return shallow(<FilterCategories {...defaultProps} {...props}/>);
}

describe("<FilterCategories />", () => {

 test("render component" , ()=>{
 renderFilterCategories();
 }) ; 
    
 test("radio group has been changed", async()=>{

        const wrapper = shallowRenderFilterCategories();
       expect(wrapper.find('[data-testid="radio-group-controllers"]').prop('value')).toBe('Any');
      
       wrapper.find('[data-testid="radio-group-controllers"]').simulate('change', {
        target: {
            value: 'Custom'
        }
    })
       expect(wrapper.find('[data-testid="radio-group-controllers"]').prop('value')).toBe('Custom');
  
 });
 


  });


