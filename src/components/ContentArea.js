import React from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Home from './Home';
import Personal from './Personal';
import Professional from './Professional';
import Projects from './Projects';

const ContentArea = ({ currentSection }) => {
  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'personal':
        return <Personal />;
      case 'professional':
        return <Professional />;
      case 'projects':
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 128px)', // Adjust based on header and footer height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={true} timeout={500}>
        <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
          {renderContent()}
        </Box>
      </Fade>
    </Box>
  );
};

export default ContentArea;
