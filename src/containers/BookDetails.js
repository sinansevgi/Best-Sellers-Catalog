import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const BookDetails = () => {
  const { isbn } = useParams();
  return (
    <Details isbn={isbn} />
  );
};

export default BookDetails;
