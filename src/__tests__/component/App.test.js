import { render, screen } from '@testing-library/react';
import App from '../../components/App';

describe('Test App Component', () => {
  beforeEach(() => {
    render(
      <App />,
    );
  });
  test('Navbar should render successfully', () => {
    expect(screen.getByText('The New York Times Best Sellers'));
  });
  test('Catalog should render successfully', () => {
    expect(screen.getByText('Hardcover Fiction Best Sellers'));
  });
});
