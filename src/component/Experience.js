import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';




export default function CustomizedTimeline() {
  return (
    <>
   <Divider>
      <h1>Experience</h1>
    </Divider>
     <Timeline position="alternate">
      <TimelineItem key={1}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        > Nov 2022 -
          March 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary">
            <PsychologyIcon fontSize='large'  />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Samsung Innovation Campus
          </Typography>
          <Typography>( Artficial Intelligence Trainee )</Typography>
          <Typography variant="subtitle1">●  Has specific learning objectives such as Numpy, Pandas, Matplotlib, Scikit-Learn, and Tensorflow.
          </Typography>
          <Typography variant='subtitle1'>● Building classification models for structured and unstructured data.
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem key={2}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
           Aug 2022 - Oct 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="primary">
            <LaptopMacIcon  fontSize='large' />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Training & Placement Cell, University of Lucknow
          </Typography>
          <Typography>( Full Stack Web Development Trainee )</Typography>
          <Typography variant="subtitle1">● Has specific learning objectives such as Linux machine, SSH and Web Development (MERN) .
          </Typography>
          <Typography variant='subtitle1'>
          ● Deployment of the web application to the server.</Typography>
          </TimelineContent>
      </TimelineItem>
      
    </Timeline>

    <Divider>
      <h1>Education</h1>
    </Divider>
    <Timeline position="alternate">
      <TimelineItem key={3}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        > Nov 2021 -
          Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary">
            <SchoolIcon fontSize='large' />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Master of Computer Applications
          </Typography>
          <Typography>( University of Lucknow, Lucknow )</Typography>
          <Typography variant="subtitle1">●  Has specific learning objectives such as 
               C Programming , OOPs , OS, Machine Learning , Data Structure.
          </Typography>
          <Typography variant='subtitle1'>● Database Managment System , JAVA , Web Technologies.
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem key={4}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
           Aug 2017 - Oct 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="primary">
            <WorkspacePremiumIcon fontSize='large'  />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Bachelor of Science
          </Typography>
          <Typography>( VBS Purvanchal University , Jaunpur )</Typography>
          <Typography variant="subtitle1">●  Mathematics  
          </Typography>
          <Typography variant='subtitle1'>
          ● Physics .</Typography>
          </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </>
  );
}