import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Genre } from '../../models/genre';
import { Book } from '../../models/book';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Omit<Book, 'id'>>({
    title: '',
    author: '',
    isbn: '',
    publicationYear: new Date().getFullYear(),
    genre: Genre.Fiction,
    copies: 1,
    isAvailable: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'copies' || name === 'publicationYear' ? Number(value) : value,
    }));
  };

  const handleGenreChange = (e: any) => {
    setFormData((prev) => ({ ...prev, genre: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, isAvailable: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Omit<Book, 'id'> = { ...formData };

    try {
      const docRef = await addDoc(collection(db, 'books'), newBook);
      console.log('Document written with ID: ', docRef.id);
      navigate('/books/view');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      maxWidth={500}
      mx="auto"
      p={4}
      gap={2}
    >
      <Typography variant="h5">Create New Book</Typography>

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <TextField
        label="ISBN"
        name="isbn"
        value={formData.isbn}
        onChange={handleChange}
        required
      />

      <TextField
        label="Publication Year"
        name="publicationYear"
        type="number"
        value={formData.publicationYear}
        onChange={handleChange}
        required
      />

      <FormControl fullWidth>
        <InputLabel>Genre</InputLabel>
        <Select value={formData.genre} onChange={handleGenreChange}>
          {Object.values(Genre).map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Copies"
        name="copies"
        type="number"
        value={formData.copies}
        onChange={handleChange}
        required
      />

      <FormControlLabel
        control={
          <Checkbox checked={formData.isAvailable} onChange={handleCheckboxChange} />
        }
        label="Available"
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default BookForm;
