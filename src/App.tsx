import React from 'react';
import { Box, Typography } from '@mui/material';
import ViewPage from './pages/view';
import {Book} from './models/book';
import {Genre} from './models/genre';

function App() {
  const exampleBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publicationYear: 1925,
    genre: Genre.Fiction,
    copies: 5,
    isAvailable: true,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publicationYear: 1949,
    genre: Genre.NonFiction,
    copies: 3,
    isAvailable: false,
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780060935467",
    publicationYear: 1960,
    genre: Genre.Science,
    copies: 4,
    isAvailable: true,
  },
  {
    id: "4",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    publicationYear: 1937,
    genre: Genre.History,
    copies: 2,
    isAvailable: true,
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    publicationYear: 1813,
    genre: Genre.Fiction,
    copies: 6,
    isAvailable: false,
  },
];

const bookButtons: string[] = ['Edit','Remove']

  return (
    <div>
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%" // Full height of container
        mt={2}
      >
        <Typography variant="h4" gutterBottom>
          Library Management App
        </Typography>
      </Box>
      <ViewPage title="Books" tableData={exampleBooks} buttons={bookButtons}/>
    </div>
  );
}

export default App;