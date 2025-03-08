import React from 'react';
import { Box, Typography } from '@mui/material'; // Importe os componentes do MUI
import Header from '../../components/Header';
import { homeStyles } from './styles';

const Home: React.FC = () => {
  return (
    <Box sx={homeStyles.container}>
      <Header />
      <Typography variant="h1" sx={homeStyles.title}>
        kaio max
      </Typography>
    </Box>
  );
};

export default Home;