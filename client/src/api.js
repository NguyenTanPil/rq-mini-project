export const getAllBooks = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

  if (!res.ok) {
    throw new Error("Can't get all books");
  }

  return res.json();
};

export const removeBook = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error("Can't remove book");
  }

  return true;
};

export const getBook = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`);

  if (!res.ok) {
    throw new Error("Can't get this book");
  }

  return res.json();
};

export const updateBook = async ({ id, ...data }) => {
  const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Can't get this book");
  }

  return res.json();
};

export const createBook = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Can't create book");
  }

  return res.json();
};
