import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CreateTable from '../components/createTable';
import Button from '@mui/material/Button';

type ViewPageProps = {
  title: string;
  tableData: Array<{ [key: string]: any }>;
  buttons: Array<string>;

};

const ViewPage = ({ title, tableData, buttons }: ViewPageProps) => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Typography variant="h4" gutterBottom>
          View {title}
        </Typography>        
        <Button variant="contained">Add New</Button>       
        <CreateTable data={tableData} buttons={buttons}/>
      </Box>
    </Container>
  );
};

export default ViewPage;