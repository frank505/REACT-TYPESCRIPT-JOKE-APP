import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from '../../App';

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/test']} initialIndex={0}>
   <App />
    </MemoryRouter>
 
  ); 
});
 