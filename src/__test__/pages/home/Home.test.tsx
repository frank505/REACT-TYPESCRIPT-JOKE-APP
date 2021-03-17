import React, { useState as useStateMock } from 'react';
import { render, fireEvent,screen } from "@testing-library/react";
import  Home from '../../../pages/home/Home'
import { createMemoryHistory } from 'history'
import { BrowserRouter,Router } from 'react-router-dom'


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


function renderHomePage() {

  return render(
  
    <Home  />

  )

}



describe("<Home />", () => {
   
  
  const history = createMemoryHistory()
    test("should display a Custom Button", async () => {

       renderHomePage();      
    });

    test("Custom Header Element and HomePage Element Should Exist",async()=>{
        const { findByTestId } = renderHomePage();
         await findByTestId("custom-header-elem");
        await findByTestId("custom-button");
    });

    test("should have been clicked", async()=>{

    const { findByTestId } = renderHomePage();
    const customBtnElem = await findByTestId("custom-button");
    fireEvent.click(customBtnElem);
    expect(mockHistoryPush).toHaveBeenCalledWith('/filter-jokes');

    });

  });


