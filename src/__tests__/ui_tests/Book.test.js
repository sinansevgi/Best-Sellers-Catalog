import renderer from 'react-test-renderer';
import Book from '../../components/Book';
import mockBooks from '../../__mocks__/mockBooks';

const testBook = mockBooks[0];

describe('The app component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Book title={testBook.title} isbn={testBook.primary_isbn13} />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
