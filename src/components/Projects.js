import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';

const Projects = () => {
  const projectList = [
    { 
      id: 1, 
      title: 'Search Engine with Typesense',
      description: 'A fast and typo-tolerant search engine implementation using Typesense.',
      image: 'https://i.ibb.co/f10Y000/image.png',
      tags: ['React', 'Typesense', 'Node.js'],
      githubLink: 'https://github.com/yourusername/search-engine-project',
      liveLink: 'https://your-search-engine-demo.com'
    },
    {
      id: 2,
      title: 'Gas Station Management System',
      description: 'An advanced system for managing gas stations, including inventory control, sales tracking, and customer management.',
      image: 'https://i.ibb.co/f10Y000/image.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/gas-station-project',
      liveLink: 'https://your-gas-station-demo.com'
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'A real-time chat application built with React and Socket.io, allowing users to chat in real-time.',
      image: 'https://i.ibb.co/f10Y000/image.png',
      tags: ['React', 'Socket.io', 'Node.js'],
      githubLink: 'https://github.com/yourusername/chat-app',
      liveLink: 'https://your-chat-app-demo.com'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with product listings, shopping cart, and secure payment processing.',
      image: 'https://i.ibb.co/f10Y000/image.png',
      tags: ['React', 'Node.js', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce-project',
      liveLink: 'https://your-ecommerce-demo.com'
    },

    // ... other projects
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2, mb: 1 }}>
                  {project.tags.map((tag, index) => (
                    <Chip 
                      key={index} 
                      label={tag} 
                      size="small" 
                      sx={{ mr: 0.5, mb: 0.5 }} 
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button 
                  variant="outlined"
                  startIcon={<GitHub />} 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button 
                  variant="contained"
                  startIcon={<Language />} 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
