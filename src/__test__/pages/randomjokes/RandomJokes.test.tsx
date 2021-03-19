import React from "react";
import { render, fireEvent,waitFor,act, findByTestId,screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import RandomJokes from "../../../pages/randomjokes";
import RandomJokesProps from '../../../interfaces/pages/randomjokes/RandomJokesProps' 
import {Router,Route,BrowserRouter} from 'react-router-dom';
import { createMemoryHistory } from "history";
import * as RandomDataJokes from '../../../mocks/pages/randomjokes/GetJokes.json'
import * as DataService from  '../../../services/jokes/JokesService'



const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


const renderWithRouter = (ui:any, { route = '/random-jokes/Any' } = {}) => 
{
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

const defaultProps:RandomJokesProps = 
{
   category:'twopart',
   dataItem: {}
}
 

describe("<RandomJokes />", () => {
      
    let originFetch:any;

    beforeEach(() => {
      originFetch = (global as any).fetch;
    });
    afterEach(() => {
      (global as any).fetch = originFetch;
    });

    test("should render component with property", async () => {
      renderWithRouter(<RandomJokes {...defaultProps}/>);
       });

       test("mock fetch api requests", async () => {
     
        const mRes = { json: jest.fn().mockResolvedValueOnce(RandomDataJokes ) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
        (global as any).fetch = mockedFetch;
        console.debug(mockedFetch);
          const {findByTestId} = renderWithRouter(<RandomJokes {...defaultProps}/>);
          expect(await mockedFetch).toBeCalledTimes(1);  
          
       });

       test("click button to go back", async()=>
       {
        const mRes = { json: jest.fn().mockResolvedValueOnce(RandomDataJokes ) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
        (global as any).fetch = mockedFetch;
        console.debug(mockedFetch);
          const {findByTestId} = renderWithRouter(<RandomJokes {...defaultProps}/>);
          const elem = await waitFor(()=>findByTestId("go-back-to-home-page"));
          fireEvent.click(elem);
         expect(mockHistoryPush).toHaveBeenCalledTimes(1);
         expect(mockHistoryPush).toHaveBeenLastCalledWith('/');
       });

    
  });


