import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../components/App';

describe('Test App Component', () => {
  beforeEach(() => {
    render(
      <App />,
    );
  });
  test('Navbar should render successfully', () => {
    expect(screen.getByText('The New York Times Best Sellers')).toBeInTheDocument();
  });
  test('Catalog should render successfully', () => {
    expect(screen.getByText('Hardcover Fiction Best Sellers')).toBeInTheDocument();
  });
});
