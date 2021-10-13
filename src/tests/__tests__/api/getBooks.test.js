import getBooks from '../../../api/getBooks';

describe('GET / ', () => {
  test('It should respond with an array', async () => {
    const response = await getBooks();
    expect(response).toBeInstanceOf(Array);
  });
  test('Array should not be empty', async () => {
    const response = await getBooks();
    expect(response.length > 1).toBe(true);
  });
});
