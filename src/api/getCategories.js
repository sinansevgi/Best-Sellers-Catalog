const getCategories = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_ACCESS_TOKEN}`, requestOptions);
  const result = await response.json();
  const { results } = result;
  const categories = [];
  results.map((record) => categories.push({
    value: record.list_name_encoded,
    label: record.display_name,
  }));
  return categories;
};
export default getCategories;
