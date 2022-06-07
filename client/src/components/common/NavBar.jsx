import { Link } from 'react-router-dom';
import { Box, Flex, Link as StyledLink } from 'rebass/styled-components';
import Container from './Container';

const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <Container>
        <Flex px={2} width="100%" alignItems="center">
          <Link element={StyledLink} to="/" variant="nav">
            React Query CRUD
          </Link>
          <Box mx="auto" />
          <Link element={StyledLink} to="/create-book" variant="nav">
            + Add new book
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;
