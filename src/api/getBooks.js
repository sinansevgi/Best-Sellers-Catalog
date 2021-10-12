const getBooks = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=${process.env.REACT_APP_ACCESS_TOKEN}`, requestOptions);
  const result = await response.json();
  const { results } = result;
  const books = [];
  results.map((book) => books.push(book.book_details[0]));
  return books;
};

export default getBooks;
