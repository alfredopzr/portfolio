import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Web3App from './Web3App';

const Header = ({ currentSection, setCurrentSection }) => {
  const sections = ['home', 'personal', 'professional', 'projects'];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {sections.map((section) => (
            <Button
              key={section}
              color={currentSection === section ? 'primary' : 'inherit'}
              onClick={() => setCurrentSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </Box>
        {/* <Web3App /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
