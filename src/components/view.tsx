import { Container, Box, Typography } from '@mui/material';
import CreateTable from './createTable';

type ViewPageProps = {
  title: string;
  tableData: Array<{ [key: string]: any }>;
  buttons: Array<string>;
};

const ViewPage = ({ title, tableData, buttons }: ViewPageProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
        <CreateTable data={tableData} buttons={buttons}/>
      </Box>
    </Container>
  );
};

export default ViewPage;