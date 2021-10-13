import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import mockBooks from '../../mockObjects/mockBooks';
import BookDetails from '../../../containers/BookDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    isbn: '9781982168438',
  }),
  useRouteMatch: () => ({ url: '/details/:isbn' }),
}));

describe('The book details component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<BrowserRouter><BookDetails books={mockBooks} /></BrowserRouter>)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
