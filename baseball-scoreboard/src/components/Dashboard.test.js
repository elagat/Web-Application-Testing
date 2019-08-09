import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render('<Dashboard />');
  });
  it('strike with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Dashboard strike={click} />);
    const strikeButton = getAllByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
});
