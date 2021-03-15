import React from "react";
import { render, fireEvent } from "@testing-library/react";
 import ButtonProps from '../../../components/Buttons/ButtonPropsInterface'
import  HomePageButton from '../../../components/Buttons/Buttons'


function renderCustomButton(props: Partial<ButtonProps> = {}) {
  const defaultProps: ButtonProps= {

    buttonText : 'Click to continue',
    clickEvent(){

    },
    color : "primary",
    variant :"contained",
    customStyles : {}, 
    className:""

  };
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


