import React from "react";
import { render, fireEvent, waitForElement, waitFor } from "@testing-library/react";
import FilterJokes from "../../../../pages/filterjokes";


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

function renderFilterJokes() {
 
   return render(<FilterJokes />);
  }
 


describe("<FilterForm />", () => {
    let originFetch:any;

    beforeEach(() => {
      originFetch = (global as any).fetch;
    });
    afterEach(() => {
      (global as any).fetch = originFetch;
    });

  

    test("should render component with properties and parent", async () => {
        renderFilterJokes();  
       });

  test('mock api calls for filterjokes component',async()=>{
    const fakeResponse = { apiResponse:  'response data'};
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const { getByTestId } = renderFilterJokes();
     await waitFor(()=>  getByTestId('filter-jokes-test-id'));
    expect(mockedFetch).toBeCalledTimes(3);
    expect(mRes.json).toBeCalledTimes(1);  

  });

        

  test("form is submited test", async()=>{
    const {findByTestId,getAllByTestId} =  renderFilterJokes(); 
    const submitBtn = await findByTestId('custom-button-submit'); 
    const errorElemResponseLoop:any = await getAllByTestId("error-form-message-test-id");
    fireEvent.click(submitBtn);
    let errorCount = 0;
    errorElemResponseLoop.forEach((element:HTMLElement,index:number)=>
    {
      
      let elemInnerHtml = element.innerHTML;
      if(elemInnerHtml!='')
      {
        /**
         * check if there are any error messages
         */
        errorCount++;
      }
      
    });
    /**
     * if there is no error message
     */
    if(errorCount==0)
    {
      expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    }

  });


 

  });


