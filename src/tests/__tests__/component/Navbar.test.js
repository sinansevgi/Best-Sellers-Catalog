import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

describe('Test Navbar', () => {
  beforeEach(() => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
  });
  test('It should have link to home page', () => {
    expect(screen.getByAltText('Back')).toBeInTheDocument();
  });
});
