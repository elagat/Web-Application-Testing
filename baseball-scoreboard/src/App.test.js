import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('One Big Test', () => {
    const { getByText } = render(<App />);
    const strike = getByText(/^strikes$/i);
  });
});
