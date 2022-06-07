import { CradleLoader } from 'react-loader-spinner';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Flex, Heading } from 'rebass';
import { getBook, updateBook } from '../../api';
import BookForm from '../common/BookForm';
import Container from '../common/Container';
import { useQueryClient } from 'react-query';

const UpdateBook = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const queryClient = useQueryClient();

  const { data, error, isLoading, isError } = useQuery(
    ['books', { id }],
    getBook,
    {
      initialData: () => {
        const listBooks = queryClient.getQueryData('books');
        const result = listBooks?.find((book) => book.id === id);
        return result;
      },
    }
  );

  const update = useMutation(updateBook, {
    onMutate: (data) => {
      queryClient.setQueryData('books', (prevData) => {
        const listBooks = prevData?.map((book) =>
          book.id === data.id ? data : book
        );

        return listBooks;
      });
    },
  });

  const onFormSubmit = (data) => {
    update.mutate({ ...data, id });

    navigation('/');
  };

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <CradleLoader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={update.isLoading}
        />
      </Box>
    </Container>
  );
};

export default UpdateBook;
