import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School, EmojiEvents, LocationOn, Phone, Email } from '@mui/icons-material';

const Personal = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" paragraph>
          I'm Alfredo Perez, a Software Engineer with a passion for full-stack development and emerging technologies. Based in Mission, TX, I bring a blend of technical expertise and entrepreneurial spirit to every project I undertake.
        </Typography>
        <Typography variant="body1">
          My journey in technology has been marked by a constant drive to learn and innovate, from founding the Emerging Technologies Organization at TCU to developing cutting-edge solutions in my professional roles.
        </Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Education & Achievements
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon><School /></ListItemIcon>
          <ListItemText 
            primary="Texas Christian University" 
            secondary="Bachelor of Science in Computer Science, May 2022" 
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><EmojiEvents /></ListItemIcon>
          <ListItemText 
            primary="TCU EISP Scholarship Recipient" 
            secondary="2020, 2021" 
          />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Contact Information
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText primary="1103 Red River St Mission TX 78572" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Phone /></ListItemIcon>
          <ListItemText primary="(956) 432-4381" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Email /></ListItemIcon>
          <ListItemText primary="alfredopzr1@gmail.com" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Personal;
