import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchedFilmDetails } from '../../SearchedFilmDetails';

const MockFilmsList = () => {
  return (
    <BrowserRouter>
      <SearchedFilmDetails />
    </BrowserRouter>
  );
};

describe('FilmsList', () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.mock('../../../__mocks__/axios');
  });

  // beforeAll(() => {
  //     console.log("RUNS ONCE BEFORE ALL TESTS")
  // })

  // afterEach(() => {
  //     console.log("RUNS AFTER EACH TEST")
  // })

  // afterAll(() => {
  //     console.log("RUNS ONCE AFTER ALL TESTS")
  // })

  it('should fetch and render input element', async () => {
    render(<MockFilmsList />);
    const filmDivElement = await screen.findByTestId(`film-item-0`);
    expect(filmDivElement).toBeInTheDocument();
  });

  it('should fetch and render input element', async () => {
    render(<MockFilmsList />);

    const filmDivElement = await screen.findByTestId(`film-item-0`);
    expect(filmDivElement).toBeInTheDocument();
  });
});
