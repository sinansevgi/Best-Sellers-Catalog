import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockBooks from '../../__mocks__/mockBooks';
import Details from '../../components/Details';

describe('Test Details Component', () => {
  beforeEach(() => {
    render(
      <Details book={mockBooks[0]} />,
    );
  });
  test('It should display book cover', () => {
    expect(screen.getByAltText('Book Cover'));
  });
  test('Book title should get rendered', () => {
    expect(screen.getByText(mockBooks[0].title));
  });
  test('Book author should get rendered', () => {
    expect(screen.getByText(mockBooks[0].author));
  });
  test('Book description should get rendered', () => {
    expect(screen.getByText(mockBooks[0].description));
  });
});

describe('Negative test cases for Details', () => {
  beforeEach(() => {
    const originalError = console.error;
    console.error = jest.fn();
    render(
      <BrowserRouter><Details book={null} /></BrowserRouter>,

    );
    console.error = originalError;
  });
  test('It should not render book', () => {
    expect(screen.getByText('Please do not use direct links.'));
  });
});
