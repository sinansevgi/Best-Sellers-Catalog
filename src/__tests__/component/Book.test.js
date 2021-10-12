import { render, screen } from '@testing-library/react';
import Book from '../../components/Book';
import mockBooks from '../../__mocks__/mockBooks';

describe('Test Book Component', () => {
  beforeEach(() => {
    render(
      <Book title={mockBooks[0].title} isbn={mockBooks[0].primary_isbn13} />,
    );
  });
  test('It should display book cover', () => {
    expect(screen.getByAltText('Book Cover'));
  });
  test('Book title should get rendered', () => {
    expect(screen.getByText(mockBooks[0].title));
  });
});
