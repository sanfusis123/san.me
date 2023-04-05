import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {  Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SanPort from '../images/sanport.png';
import '../css/font.css';
const useStyle = makeStyles((theme)=>({
  pic :{
      width: 500,
      minWidth:300,
      borderRadius:'10% 30% 50% 70%'
      
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
            <Divider textAlign='left'>
            <h1>
              Introduction :
            </h1>
            </Divider>
             <br></br>
             <Typography variant='h5' align='center'>
                 I'm Sandeep Maurya.
             </Typography>
             <Typography variant='h6' gutterBottom align='center'>
                  (Web & Machine Learning developer)
                 </Typography>
             <Typography variant='subtitle1' gutterBottom>
             I am building and maintaining web applications and APIs using technologies such as Node.js, React.js, Express, and
              MongoDB, and machine learning models and data analysis pipelines using Python and popular libraries such as
              scikit-learn and Pandas. Skilled in developing and optimising machine learning models and web applications. 
              </Typography>
             <Typography variant='subtitle1' gutterBottom>
                I don't know the anwser of many questions but i could find the answer.
                Most of the time we learn many things and after some time we forget some concepts but we know about that
                how to implement such things.
                I'm a good learner and many things i learned in short time.
              </Typography> 
              <Typography variant='subtitle1' gutterBottom>
                I'm inspired from the meme for coding then started learning web development.
                After that i take the admission in the MCA at University of Lucknow to build the professional career.
              </Typography>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}