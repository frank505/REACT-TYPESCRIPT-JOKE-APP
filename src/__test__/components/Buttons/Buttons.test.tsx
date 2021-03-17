import React from "react";
import { render, fireEvent } from "@testing-library/react";
 import ButtonProps from '../../../interfaces/components/Buttons/ButtonPropsInterface'
import  HomePageButton from '../../../components/Buttons/Buttons'


const defaultProps: ButtonProps= {

  buttonText : 'Click to continue',
  clickEvent(){

  },
  color : "primary",
  variant :"contained",
  customStyles : {}, 
  className:""

};

function renderCustomButton(props: Partial<ButtonProps> = {}) {
  
  return render(<HomePageButton {...defaultProps} {...props} />);
}

describe("<HomePageButton />", () => {

    test("should display a Custom Button", async () => {
     renderCustomButton();      
    });

    test("should have been clicked", async()=>{
     const clickEvent = jest.fn();
     const { findByTestId } = renderCustomButton({ clickEvent });
     const customBtnElem = await findByTestId("custom-button");
     fireEvent.click(customBtnElem);
    });


  });


