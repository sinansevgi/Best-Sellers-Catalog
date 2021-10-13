import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

describe('The app component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<BrowserRouter><Navbar /></BrowserRouter>)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
