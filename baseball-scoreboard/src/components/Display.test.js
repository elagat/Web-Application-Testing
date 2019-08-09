import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display>', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('props work', () => {
    const display = render(<Display strikes={2} balls={3} />);
    display.getAllByText(/Strike/);
    display.getAllByText(/Ball/)
  })
})
