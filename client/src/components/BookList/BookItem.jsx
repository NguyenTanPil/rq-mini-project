import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from 'rebass/styled-components';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeBook } from '../../api';
import { CradleLoader } from 'react-loader-spinner';

const BookItem = ({ author, title, id }) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries('books');
  };

  return (
    <Flex p={3} width="100%" alignItems="center" justifyContent="space-between">
      <Link element={StyledLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </Link>
      <Text>{author}</Text>
      <Button onClick={remove}>
        {isLoading ? (
          <CradleLoader type="ThreeDots" color="#ccc" height={10} />
        ) : (
          'Remove'
        )}
      </Button>
    </Flex>
  );
};

export default BookItem;
