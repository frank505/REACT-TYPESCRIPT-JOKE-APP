import React from "react";
import { render, fireEvent, waitForElement, waitFor } from "@testing-library/react";
import FilterJokes from "../../../pages/filterjokes";



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

  test('mock number of api calls',async()=>{
    const fakeResponse = { apiResponse:  'response data'};
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const { getByTestId } = renderFilterJokes();
    const div = await waitFor(()=>  getByTestId('filter-jokes-test-id'));
    expect(mockedFetch).toBeCalledTimes(3);
    expect(mRes.json).toBeCalledTimes(1);  

  });

  });


