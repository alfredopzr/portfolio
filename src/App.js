import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentArea from './components/ContentArea';
// ... other imports

const theme = createTheme({
  // Define your custom theme here
});

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const sections = ['home', 'personal', 'professional', 'projects'];
  const currentIndex = sections.indexOf(currentSection);

  const navigateSection = useCallback((direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    } else if (direction === 'right' && currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
    // ... existing navigation logic
  }, [currentSection]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <ContentArea 
        currentSection={currentSection} 
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
