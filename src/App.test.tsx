import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const { debug, container, getByText } = render(<App />);

test('should title to be in the document', () => {
  const linkElement = getByText('Phone List');
  expect(linkElement).toBeInTheDocument();
});