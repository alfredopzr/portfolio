import React, { Suspense } from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';
import { Code, Language } from '@mui/icons-material';
import { Canvas } from '@react-three/fiber';
import Avatar3D from './Avatar3D';
import Web3App from './Web3App';

const Home = () => {
  const skills = ['React', 'Node.js', 'GraphQL', 'TypeScript', 'Python', 'Java', 'Ruby', 'C/C++'];

  return (
    <Box sx={{ textAlign: 'center', maxWidth: 800, margin: 'auto', position: 'relative' }}>
      <Box sx={{ height: 300, width: '100%', position: 'relative', zIndex: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-5, 5, -5]} intensity={0.5} />
            <Avatar3D />
          </Canvas>
        </Suspense>
      </Box>
      <Box sx={{ position: 'relative', zIndex: 2, mt: -4 }}>
        <Typography variant="h2" gutterBottom>
          Alfredo Perez
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, color: 'text.secondary' }}>
          Software Engineer
        </Typography>
        <Box sx={{ my: 3 }}>
          <Chip icon={<Code />} label="Full Stack Developer" sx={{ mr: 1 }} />
          <Chip icon={<Language />} label="Bilingual (English, Spanish)" />
        </Box>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Passionate about building scalable web applications and leveraging emerging technologies to solve real-world problems..
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
