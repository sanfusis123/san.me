import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles((theme)=>({
   listflex:{
    display:'flex',
    width:'100%'
   },
   listblock:{
    display:'block',
    width:'100%'
   } ,
   

}))


const Listing = ({heading , qualities})=>{
  const classes = useStyle();
  
  return(
  <ListItem>
  <List  alignItems='center'  className={classes.listflex}
  
  
  > 
   <ListItem alignItems='right'>
    <Typography variant='h4'>
     {heading} : 
    </Typography>
   </ListItem>
   <ListItem  className={classes.listblock}>
 

      <List
      sx={{ width: '50%', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      listStyleType: 'disc',
      padding:3,
      pl: 2,
      
    }}>
      {  qualities.map((val,i)=>(
         <ListItem
         key={i}
         sx = {{
         display: 'list-item',
         }}>
          <Typography variant='h6'>
           {val}
           </Typography>
         </ListItem>
      ))
      }
        
        
      </List>


   </ListItem>

  </List>
</ListItem>


)
    }



const property = [
  {
    head: 'Programming Languages',
    quality: ['C/C++' , 'Java','Python', 'JavaScript'] 
  },
  {
    head: 'Web Development',
    quality: ['HTML/CSS','NodeJS','ReactJs','MongoDB'] 
  },
  {
    head: 'Machine Learning',
    quality: ['Numpy' , 'Pandas','Matplotlib', 'Scikit-Learn'] 
  },
  {
    head: 'Algorithms',
    quality: ['Data Structure' , 'Algorithms design','Algorithms Analysis'] 
  }
]



export default function AlignItemsList() {
  
  return (
    <>
    <Divider>
      <h1>Skills</h1>
    </Divider>
    
    <List sx={{ width: '100%' }}
    >
        {property.map((p,i)=>(
          <>
          <Listing key={i} qualities={p.quality} heading={p.head} />
          <Divider variant="inset" component="li" />
          </>
           ))
        }
 
      
    </List>
    </>
  );
}