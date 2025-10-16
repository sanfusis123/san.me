import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Divider, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';
import SanPort from '../images/sanport.png';
import '../css/font.css';

const useStyle = makeStyles((theme)=>({
  pic :{
      position: 'relative',
      width: 500,
      minWidth:300,
      borderRadius:'10% 30% 50% 70%',
      filter: 'drop-shadow(0 0 30px rgba(102, 126, 234, 0.5))',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)'
      }
  },
}))

export default function CenteredElementGrid() {
  const classes = useStyle();

  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid key={1} display="flex" justifyContent="center" alignItems="center" padding={3}>
        <img className={classes.pic}
        src={SanPort}
         alt={'Photo'}
          />
        </Grid>
        <Grid key={2} xs display="block" justifyContent="center" alignItems="center">
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography variant='h2' component='h1' sx={{ 
                fontWeight: 'bold', 
                background: 'linear-gradient(45deg, #667eea 0%, #764ba2 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2
              }}>
                SANDEEP MAURYA
              </Typography>
              <Typography variant='h4' sx={{ color: '#a78bfa', fontWeight: '300' }}>
                🤖 Machine Learning Engineer
              </Typography>
            </Box>
             <Box sx={{ mt: 3, mb: 2, p: 2, borderRadius: 2, background: 'rgba(102, 126, 234, 0.1)', border: '1px solid rgba(102, 126, 234, 0.3)' }}>
                <Typography variant='h6' sx={{ color: '#818cf8', mb: 1, fontWeight: 'bold' }}>💡 Professional Summary</Typography>
             <Typography variant='body1' gutterBottom sx={{ textAlign: 'justify', lineHeight: 1.8, color: '#e0e0e0' }}>
                An applied learner and a result-oriented Machine Learning Engineer with 2+ years of experience in translating business requirements into Data Science solutions and building creative end-to-end solutions to drive business objectives and provide decision intelligence for guided decision-making.
              </Typography>
             </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
                <a href="https://github.com/sanfusis123" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" startIcon={<GitHubIcon />} sx={{ background: 'linear-gradient(45deg, #333 0%, #555 100%)' }}>GitHub</Button>
                </a>
                <a href="http://linkedin.com/in/san-me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" startIcon={<LinkedInIcon />} sx={{ background: 'linear-gradient(45deg, #0077B5 0%, #00A0DC 100%)' }}>LinkedIn</Button>
                </a>
              </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}