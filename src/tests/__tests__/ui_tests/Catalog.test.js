import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import mockBooks from '../../mockObjects/mockBooks';
import Catalog from '../../../containers/Catalog';

describe('The catalog component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<BrowserRouter><Catalog books={mockBooks} /></BrowserRouter>)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
