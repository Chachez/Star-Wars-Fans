import { render, screen } from '@testing-library/react';
import { SearchHistoryFooter } from '../../SearchHistoryFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfSearchResults }) => {
  return (
    <BrowserRouter>
      <SearchHistoryFooter numberOfSearchResults={numberOfSearchResults} />
    </BrowserRouter>
  );
};

describe('FilmFooter', () => {
  it('should render the correct amount of searched results', () => {
    render(<MockTodoFooter numberOfSearchResults={2} />);
    const pElement = screen.getByText(/2 results searched/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "result" when the number of searched result is one', () => {
    render(<MockTodoFooter numberOfSearchResults={1} />);
    const pElement = screen.getByText(/1 result searched/i);
    expect(pElement).toBeInTheDocument();
  });
});

// it('p element should be truthy when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeTruthy();
// });

// it('"task" should be visible when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeVisible();
// });

// it('should contain p tag with correct text', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toContainHTML('p');
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toHaveTextContent("1 task left");
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).not.toBeFalsy();
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter
//         numberOfSearchResults={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement.textContent).toBe("1 task left");
// });
