import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Box, Heading } from 'rebass';
import { createBook } from '../../api';
import BookForm from '../common/BookForm';
import Container from '../common/Container';

const CreateBook = () => {
  const navigation = useNavigate();

  const create = useMutation(createBook);

  const onFormSubmit = (data) => {
    create.mutate({ id: Math.random(), ...data });
    // navigation('/');
  };

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={create.isLoading} />
      </Box>
    </Container>
  );
};

export default CreateBook;
