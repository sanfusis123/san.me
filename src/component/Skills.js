import * as React from 'react';
import { Box, Chip, Typography, Paper, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

const skillCategories = [
  {
    title: '💻 Programming Languages',
    skills: ['🐍 Python', '🗃️ SQL', '⚡ JavaScript', '🔤 C'],
    color: '#6366f1'
  },
  {
    title: '🧬 Data Science',
    skills: ['📊 Statistics', '🤖 Machine Learning', '🧠 Deep Learning', '👁️ Computer Vision', '💬 Natural Language Processing'],
    color: '#8b5cf6'
  },
  {
    title: '🚀 Generative AI (LLMs)',
    skills: ['🗨️ LLM', '🔍 Custom Chatbot with RAG', '🤝 Agents Frameworks', '🎯 Attention & Transformers', '📚 VectorDB', '🔢 Embeddings', '🔗 MCP', '🔄 A2A'],
    color: '#ec4899'
  },
  {
    title: '📦 Libraries/Packages',
    skills: ['🔢 Numpy', '🐼 Pandas', '📈 Matplotlib', '⚙️ Scikit-Learn', '🔥 TensorFlow', '⚡ PyTorch', '🔗 LangChain', '📊 LangGraph', '📷 OpenCV', '🕺 MediaPipe', '🏗️ Keras'],
    color: '#10b981'
  },
  {
    title: '🛠️ Additional Skills',
    skills: ['☁️ AWS (SageMaker, Lambda, S3)', '🔀 Git', '💾 MySQL', '⚡ FastAPI', '🎯 DRF'],
    color: '#f59e0b'
  }
];

export default function Skills() {
  return (
    <>
      <Divider sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #6366f1, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Technical Skills
        </Typography>
      </Divider>
      
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  background: `rgba(20, 20, 20, 0.6)`,
                  border: '1px solid', 
                  borderColor: `${category.color}40`,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 30px ${category.color}20`
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: category.color }}>
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      variant="outlined"
                      sx={{ 
                        fontSize: '0.95rem',
                        borderColor: `${category.color}40`,
                        color: '#e0e0e0',
                        fontWeight: 500,
                        background: 'rgba(40, 40, 40, 0.5)',
                        '&:hover': {
                          backgroundColor: category.color,
                          color: 'white',
                          borderColor: category.color,
                          transform: 'scale(1.05)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}