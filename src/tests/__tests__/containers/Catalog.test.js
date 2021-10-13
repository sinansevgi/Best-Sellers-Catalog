import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Catalog from '../../../components/Catalog';
import mockBooks from '../../mockObjects/mockBooks';

describe('Test Catalog', () => {
  beforeEach(() => {
    render(<BrowserRouter><Catalog books={mockBooks} /></BrowserRouter>);
  });
  test('It should render all books', () => {
    mockBooks.map((book) => expect(screen.getByText(book.title)).toBeInTheDocument());
  });
  test('It should filter books', () => {
    userEvent.type(screen.getByPlaceholderText('Filter books by name'), 'LE');
    expect(screen.getAllByAltText('arrow').length).toEqual(2);
  });
});
