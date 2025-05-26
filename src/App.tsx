import { Box, Typography, Button, ButtonGroup, Container } from '@mui/material';
import ViewPage from './pages/books/view';
import BookForm from './pages/books/create';
import EditBook from './pages/books/edit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Container>
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={4}
          mb={4}
        >
          <Typography variant="h4" gutterBottom>
            Library Management App
          </Typography>
          <ButtonGroup variant="contained" aria-label="navigation">
            <Button component={Link} to="/books/view">Books</Button>
            <Button>Orders</Button>
            <Button>Loans</Button>
          </ButtonGroup>
        </Box>
        <Routes>
          <Route path="/books/view" element={<ViewPage title="Books" buttons={['Edit', 'Remove']} />} />
          <Route path="/books/create" element={<BookForm />}/>
          <Route path="/books/edit" element={<EditBook />}/>
        </Routes>      
      </Container>      
    </Router>
  );
}

export default App;