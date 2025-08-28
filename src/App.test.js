import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);    
  
  // 2. Query the rendered DOM to find an element whose text matches "learn react"
  //    The `/learn react/i` is a regex:
  //      - `/.../` → regex pattern
  //      - `i` → case-insensitive search

  expect(linkElement).toBeInTheDocument();
  // 3. Assert that the element was indeed found in the DOM
  
});

test("Testing of text in APP.", () => {
  render(<App />);
  const linkElement = screen.getByText(/save to reload/);
  expect(linkElement).toBeInTheDocument();
})

// test("Snapshot for App component.",() => {
//   const container = render(<App />);
//   expect(container).toMatchSnapshot();
// })