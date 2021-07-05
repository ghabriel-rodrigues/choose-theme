import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should render one post when user searches for preact', () => {
  render(<App />);

  let themes = screen.getAllByRole('listitem');
  expect(themes.length).toEqual(4);

  const searchBar = screen.getByRole('textbox');
  userEvent.type(searchBar, 'preact');

  themes = screen.getAllByRole('listitem');
  expect(themes.length).toEqual(1);
});
