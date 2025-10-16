import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { Divider, Chip, Box } from '@mui/material';

export default function CustomizedTimeline() {
  return (
    <>
      <Divider>
        <h1>Work Experience</h1>
      </Divider>
      <Timeline position="alternate">
        <TimelineItem key={1}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            July 2025 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary">
              <WorkIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Prudent Corporations
            </Typography>
            <Typography color="primary">Machine Learning Engineer</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2">● Designed and integrated a multi-agent chatbot system workflow using pure Python, implementing agent switching for coordinated task execution across multiple agents.</Typography>
              <Typography variant="subtitle2">● Implemented Retrieval-Augmented Generation (RAG) to reduce ambiguity in entity recognition (e.g., names and subgroups) when processing natural language queries over SQL database tables.</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem key={2}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            May 2024 - June 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary">
              <SmartToyIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Ocius Technologies
            </Typography>
            <Typography color="primary">Machine Learning Engineer</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2">● Built enterprise-scale Generative AI solutions using GPT, Hugging Face, LangChain, and LangGraph for document understanding and intelligent query handling.</Typography>
              <Typography variant="subtitle2">● Developed agentic workflows using RAG, streaming responses, and multi-agent systems for real-time, context-driven query resolution.</Typography>
              <Typography variant="subtitle2">● Supervised Fine-tuned LLMs (e.g., GPT-4o-mini) using custom supervised datasets on OpenAI platform.</Typography>
              <Typography variant="subtitle2">● Created deep learning models for an AI Yoga Trainer with pose detection and personalized session generation.</Typography>
              <Typography variant="subtitle2">● Deployed hospital churn prediction models using XGBoost, automated with SageMaker and Lambda, and served via a FastAPI backend.</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Divider sx={{ mt: 4 }}>
        <h1>Internships</h1>
      </Divider>
      <Timeline position="alternate">
        <TimelineItem key={3}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Oct 2023 - Apr 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <CodeIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Techasoft Pvt Ltd
            </Typography>
            <Typography color="secondary">Python Intern</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2">● Developed an end-to-end object detection system for identifying defective biscuits using OpenCV, Keras-CV, TensorFlow, and multiprocessing to handle multi-camera input.</Typography>
              <Typography variant="subtitle2">● Built a document-based chatbot using LangChain, Hugging Face Mistral LLM, and MongoDB for intelligent retrieval and question answering over unstructured documents.</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem key={4}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Nov 2022 - Feb 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <SmartToyIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Samsung Innovation Campus India
            </Typography>
            <Typography color="secondary">Artificial Intelligence Trainee</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2">● Enhanced traditional machine learning models by implementing deep learning approaches on unstructured data.</Typography>
              <Typography variant="subtitle2">● Utilized CNNs for image classification and RNNs (LSTM, GRU) for sequence-to-sequence tasks, resulting in improved prediction accuracy and precision.</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Divider sx={{ mt: 4 }}>
        <h1>Education</h1>
      </Divider>
      <Timeline position="alternate">
        <TimelineItem key={5}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Aug 2021 - June 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Master of Computer Application
            </Typography>
            <Typography>University of Lucknow, Lucknow</Typography>
            <Typography variant="subtitle2" color="text.secondary">CGPA: 8.06</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem key={6}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Aug 2017 - Sep 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon fontSize='large' />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Bachelor of Science (Mathematics)
            </Typography>
            <Typography>VBS Purvanchal University, Jaunpur</Typography>
            <Typography variant="subtitle2" color="text.secondary">CGPA: 6.0</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}