import { CradleLoader } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Flex } from 'rebass';
import { getAllBooks } from '../../api';
import Container from '../common/Container';
import BookItem from './BookItem';

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);

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
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        {data.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </Flex>
    </Container>
  );
};

export default BookList;
