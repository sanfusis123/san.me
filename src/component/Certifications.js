import * as React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link, Card, CardContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import LaunchIcon from '@mui/icons-material/Launch';
import SportsIcon from '@mui/icons-material/Sports';
import PsychologyIcon from '@mui/icons-material/Psychology';

const achievements = [
  'Runner-up and 5th position in the campus coding competition in 2022 and 2023.',
  'Volunteering and mentoring campus students\' projects in the field of Data Science since 2023.'
];

const certifications = [
  {
    title: 'GAN Specialization',
    provider: 'Coursera',
    link: 'https://coursera.org/share/b8b324d520efca40f3bc7cdc7f322fe4'
  },
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera (Andrew Ng)',
    link: 'https://coursera.org/share/0f1a8d1c9d07f634cca856553aab307e'
  },
  {
    title: 'AI Intern Certificate',
    provider: 'Samsung Innovation Campus',
    link: 'https://drive.google.com/file/d/1-PfLiDmVaNhMz_4txErjs2NlWz2_r5Er/view'
  }
];

const interests = [
  { category: 'Technical', items: ['Data Science Research', 'Machine & Deep Learning', 'Space'] },
  { category: 'Physical Activities', items: ['Swimming', 'Cycling', 'Walking'] }
];

export default function Certifications() {
  return (
    <>
      <Divider sx={{ mt: 4 }}>
        <h1>Achievements & Certifications</h1>
      </Divider>
      
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', backgroundColor: 'transparent', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEventsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Achievements
                </Typography>
              </Box>
              <List>
                {achievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ pl: 0 }}>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, height: '100%', backgroundColor: 'transparent', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Certifications
                </Typography>
              </Box>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index} sx={{ pl: 0 }}>
                    <ListItemText 
                      primary={
                        <Link href={cert.link} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                          {cert.title} <LaunchIcon fontSize="small" sx={{ ml: 0.5 }} />
                        </Link>
                      } 
                      secondary={cert.provider}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4">Interests</Typography>
        </Divider>

        <Grid container spacing={3}>
          {interests.map((interest, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {interest.category === 'Technical' ? 
                      <PsychologyIcon color="primary" sx={{ mr: 1 }} /> : 
                      <SportsIcon color="primary" sx={{ mr: 1 }} />
                    }
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {interest.category}
                    </Typography>
                  </Box>
                  <List dense>
                    {interest.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ pl: 2 }}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}