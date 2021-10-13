import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import mockBooks from '../../mockObjects/mockBooks';
import Details from '../../../components/Details';

describe('Test Details Component', () => {
  beforeEach(() => {
    render(
      <Details book={mockBooks[0]} />,
    );
  });
  test('It should display book cover', () => {
    expect(screen.getByAltText('Book Cover')).toBeInTheDocument();
  });
  test('Book title should get rendered', () => {
    expect(screen.getByText(mockBooks[0].title)).toBeInTheDocument();
  });
  test('Book author should get rendered', () => {
    expect(screen.getByText(mockBooks[0].author)).toBeInTheDocument();
  });
  test('Book description should get rendered', () => {
    expect(screen.getByText(mockBooks[0].description)).toBeInTheDocument();
  });
});

describe('Negative test cases for Details', () => {
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
  test('It should not render book', () => {
    expect(screen.getByText('Please do not use direct links.')).toBeInTheDocument();
  });
});
