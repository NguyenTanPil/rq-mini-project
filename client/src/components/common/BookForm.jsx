import { Box, Button } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import { CradleLoader } from 'react-loader-spinner';

const BookForm = ({
  defaultValues = {
    title: '',
    author: '',
  },
  onFormSubmit,
  isLoading,
}) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title">Title</Label>
        <Input name="title" id="title" {...register('title')} />
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author">Author</Label>
        <Input name="author" id="author" {...register('author')} />
      </Box>

      <Button>
        {isLoading ? (
          <CradleLoader type="ThreeDots" color="#ccc" height={10} />
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
};

export default BookForm;
