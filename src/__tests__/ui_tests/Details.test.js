import renderer from 'react-test-renderer';
import mockBooks from '../../__mocks__/mockBooks';
import Details from '../../components/Details';

const testBook = mockBooks[0];

describe('The app component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Details book={testBook} />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
