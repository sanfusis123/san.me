import { Container, Box } from '@mui/material';
import About from './component/About';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Project from './component/Project';
import Certifications from './component/Certifications';
import Contact from './component/Contact';
function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <About/>
        <Skills/>
        <Experience/>
        <Project/>
        <Certifications/>
        <Contact/>
      </Box>
    </Container>
  );
}

export default App;
