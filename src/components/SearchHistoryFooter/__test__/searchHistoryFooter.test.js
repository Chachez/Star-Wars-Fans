import { render, screen } from '@testing-library/react';
import { SearchHistoryFooter } from '../../SearchHistoryFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfSearchedFilms }) => {
  return (
    <BrowserRouter>
      <SearchHistoryFooter numberOfSearchedFilms={numberOfSearchedFilms} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of searched films', () => {
    render(<MockTodoFooter numberOfSearchedFilms={5} />);
    const pElement = screen.getByText(/5 films searched/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "film" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfSearchedFilms={1} />);
    const pElement = screen.getByText(/1 film searched/i);
    expect(pElement).toBeInTheDocument();
  });
});
