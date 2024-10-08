import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Work, School } from '@mui/icons-material';

const Professional = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Professional Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary"><Work /></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                Software Engineer
              </Typography>
              <Typography>Fractional</Typography>
              <Typography variant="body2" color="text.secondary">
                Oct 2022 - Present
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                • Developed features using React, Node.js, GraphQL, and TypeScript
                <br />
                • Engaged in full-stack development in a startup environment
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary"><Work /></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                Software Development Intern
              </Typography>
              <Typography>Monto</Typography>
              <Typography variant="body2" color="text.secondary">
                Summer 2021
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                • Developed a PoC integrating OpenBanking API
                <br />
                • Collaborated on Payment-as-a-Service feature integration
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary"><Work /></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                Front-End Developer
              </Typography>
              <Typography>Unbent</Typography>
              <Typography variant="body2" color="text.secondary">
                Spring 2021
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                • Led complete redesign of Unbent website
                <br />
                • Used JavaScript, HTML/CSS, Bootstrap, and Figma
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary"><School /></TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                Texas Christian University
              </Typography>
              <Typography>Bachelor of Science in Computer Science</Typography>
              <Typography variant="body2" color="text.secondary">
                Fall 2018 - May 2022
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Professional;

