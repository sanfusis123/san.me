import * as React from 'react';
import {  styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minWidth:300,
  height:500,
 alignItems:'center',
 marginBottom:30
}));


const allpros =  [
  {
    name: 'E-commerce Web Application',
    tech: '(Web Deveplopment Project)',
    points: ["● I built a MERN stack ecommerce single page web application and deployed it to the netlify server.",
      "● Users could sign up, sign in, search for products, buy products, and filter by category in this application, while administrators could add products, add categories, modify products, and delete products."   ],
    projectlink: 'https://sanecommerce.netlify.app/',
    website: 'https://sanecommerce.netlify.app/'           
  },
  {
    name: 'Recommendation of coupons in vehicles',
    tech: '(Machine Learning Project)',
    points: [ "● I trained our dataset with all classification methods including Logistic Regression,KNN,SVM and Random Forest.",
    "● SVM machine learning model that predicts coupons in vehicles with an accuracy of 75.6%.",
    "● This model used support vector machine radial basis function algorithms, and to increase accuracy, we used the GridSearchCV hyperparameter.",

                ],
    projectlink: 'https://github.com/sanfusis123/recommendation-of-coupons/blob/main/In-Vehicle-Coupon.ipynb',
    website: 'https://sanfusis123.github.io/recommendation-of-coupons/'           
  },
  {
    name: 'By Drug Review Condition & Sentiment Analysis',
    tech: '(Machine Learning NLP project)',
    points: ["● I train a  deep learning Keras model to condition prediction with tha accuracy 87%. ",
      "● A Keras sequential deep neural network model to alalysis of sentiments with accuracy 87.7",
      "● We could alos predict the rating by the review." ],
    projectlink: 'https://sanfusis123.github.io/SIC-Project/',
    website: 'https://sanfusis123.github.io/SIC-Project/'           
  }
]



export default function RowAndColumnSpacing() {

  return (
   <>
    <Divider>
      <h1>Proejcts</h1>
    </Divider>
    {allpros.map((proj , i)=>(
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs>
          <Item >
            <Typography variant='h4' gutterBottom paddingTop={10}>
            {proj.name}
            </Typography>
            <Typography variant='h6' gutterBottom>
            {proj.tech}
            </Typography>
            {
                proj.points.map((itme,i)=>(
                                    
                                <Typography variant='subtitle1' key={i} gutterBottom>
                                    {itme}
                                </Typography>
                                ))
            }
            <Typography variant='subtitle1' key={1}>
           </Typography>
           <Typography variant='subtitle1' key={10}>
           "● Project Link - <a href={proj.projectlink}>
            {proj.projectlink}
           </a>     
           </Typography>
           <Typography variant='h6' paddingTop={10}>
            Preview    <ArrowForwardIcon/>
           </Typography>
           </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <iframe src={proj.website}
             width={'100%'}
             height={'500'}
             frameborder={"0"} border={"0"}
             title={proj.name}
             >
            
            </iframe>
          </Item>
        </Grid>
      </Grid>
    </Box>


    ))}
    
    </>
  );
}