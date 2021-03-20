import React from "react";
import { render, fireEvent } from "@testing-library/react";
 import HeaderProps from '../../../../interfaces/components/Header/HeaderPropsInterface'
import CustomHeader from '../../../../components/Header/Header'


function renderCustomHeader(props: Partial<HeaderProps> = {}) {
  const defaultProps: HeaderProps = {

    headerText : 'Welcome to AppName',
    variant :"h1",
    customStyles : {}, 
    className:""

  };
  return render(<CustomHeader {...defaultProps} {...props} />);
}

describe("<CustomHeader />", () => {

    test("should display a Custom Header", async () => {
     renderCustomHeader();      
    });


  });


