import * as React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Box, Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import LaunchIcon from '@mui/icons-material/Launch';

const projectIcons = {
  'Fundz Bot': '💰',
  'Policy Agent': '📋',
  'AI-Yoga Trainer': '🧘'
};

const projects = [
  {
    name: 'Fundz Bot',
    company: 'At Prudent',
    description: [
      'Developed a multi-agent system to handle FAQs, scheme-related queries, general investment assistance, and strategic fund recommendations. Implemented in pure Python using a tree-based delegation strategy.',
      'Optimized latency and delegation efficiency by transitioning to a LangGraph-based agentic workflow with strategic agent switching.',
      'Utilized vector stores to resolve entity name ambiguity and enhance fund search capabilities through vector-based recommendations.'
    ],
    technologies: ['ChatGPT', 'Groq', 'ChromaDB', 'LangGraph', 'Redis'],
  },
  {
    name: 'Policy Agent',
    company: 'Client At Ocius',
    description: [
      'Built a Policy Agent system that processed over 40,000+ healthcare insurance documents to resolve user queries using generative AI, with automatic context retrieval and multi-agent reasoning.',
      'Implemented RAG-based QA system with features like document search, automatic context selection, and document comparison using LangChain, Hugging Face embeddings, ChromaDB.',
      'Created intelligent workflows with LangGraph to determine retrieval strategies (e.g., synopsis-based search), and used GPT-based LLMs to generate accurate, streaming responses across multiple agents.'
    ],
    technologies: ['LangChain', 'Hugging Face', 'ChromaDB', 'LangGraph', 'GPT-4'],
  },
  {
    name: 'AI-Yoga Trainer',
    company: 'Client At Ocius',
    description: [
      'Developed an AI-powered personal yoga trainer to help users assess whether they are performing exercises correctly, providing exercise counts and a percentage of correctness for each movement.',
      'Based on body focus, age group, fitness level, objective, and duration, users can generate yoga classes to their preferences.',
      'Implemented a freestyle mode where users follow yoga videos and receive real-time feedback with a correctness score, while the system automatically detects and identifies the exercises being performed.',
      'AI-Trainer utilizes Mediapipe pose detection to capture landmarks and employs deep learning models to predict whether the exercises are being performed correctly.'
    ],
    technologies: ['MediaPipe', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Python'],
  }
];

export default function Projects() {
  return (
    <>
      <Divider sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #764ba2, #667eea)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          🚀 ML Projects
        </Typography>
      </Divider>
      
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span style={{ fontSize: '1.5rem' }}>{projectIcons[project.name]}</span>
                    {project.name}
                  </Typography>
                  <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                    {project.company}
                  </Typography>
                  {project.description.map((desc, i) => (
                    <Typography variant="body2" paragraph key={i}>
                      • {desc}
                    </Typography>
                  ))}
                  <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.map((tech, idx) => (
                      <Chip 
                        key={idx} 
                        label={tech} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
                {project.link && (
                  <CardActions>
                    <Button 
                      size="small" 
                      href={project.link} 
                      target="_blank"
                      endIcon={<LaunchIcon />}
                    >
                      View Project
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}