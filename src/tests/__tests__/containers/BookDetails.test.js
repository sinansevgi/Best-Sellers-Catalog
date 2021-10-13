import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import mockBooks from '../../mockObjects/mockBooks';
import BookDetails from '../../../containers/BookDetails';
import Details from '../../../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    isbn: '9781982168438',
  }),
  useRouteMatch: () => ({ url: '/details/:isbn' }),
}));

describe('Test Book Details Component', () => {
  beforeEach(() => {
    render(
      <BookDetails books={mockBooks} />,
    );
  });
  test('It should render book component', () => {
    expect(screen.getByText('CLOUD CUCKOO LAND')).toBeInTheDocument();
  });
  test('Book Details should be included', () => {
    expect(screen.getByText('Anthony Doerr')).toBeInTheDocument();
  });
});

describe('Negative test cases for Book Details', () => {
  beforeEach(() => {
    // This is not an console output.
    // This statement silences the prop type errors to test negative cases
    const originalError = console.error;
    console.error = jest.fn();
    render(
      <BrowserRouter><Details book={null} /></BrowserRouter>,

    );
    console.error = originalError;
  });
  test('It should not render book component', () => {
    expect(screen.getByText('Please do not use direct links.')).toBeInTheDocument();
  });
});
