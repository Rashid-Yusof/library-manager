import { useEffect, useState } from 'react';
import ViewBooks from '../../components/view';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; 
import { Book } from '../../models/book';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type ViewPageProps = {
  title: string;
  buttons: string[];
};

const ViewPage = ({ title, buttons }: ViewPageProps) => {
  const [tableData, setTableData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const result = await getDocs(collection(db, 'books'));
        const booksData = result.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Book[];
        setTableData(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div>      
      <ViewBooks title={title} tableData={tableData} buttons={buttons} />   
      <Button variant="contained" sx={{mb:5}} component={Link} to="/books/create">Add New</Button>      
    </div>
  );
};

export default ViewPage;