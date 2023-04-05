import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import  Divider  from '@mui/material/Divider';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyle = makeStyles((theme)=>({
    flex :{
        display: 'flex-box',
        alignItems:'center'
    },
    nodoco:{
        textDecoration: 'none',
        color:'black'
    },
    
}))


const links = [
    {
        icon :LocationOnIcon ,
        link : 'Lucknow , India',
        href : 'https://goo.gl/maps/LAaPefwH9iaAFaHa7'
    },
    {
        icon :MailIcon ,
        link : 'sm318330@gmail.com',
    },
    {
        icon : PhoneAndroidIcon,
        link:'+91 6388435534'
    },
    {
        icon :LinkedInIcon ,
        link : 'http://linkedin.com/in/san-me',
        href: 'http://linkedin.com/in/san-me'
    },
    {
        icon:GitHubIcon,
        link: 'http://github.com/sanfusis123',
        href : 'http://github.com/sanfusis123'
    }
]







export default function NestedList() {
  const classes = useStyle()

  return (
    <>
    <Divider>
            <h1>Contact Details </h1>
    </Divider>
    <List
    
      sx={{ width: '100%',  bgcolor: 'inherit',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    
    }}>
      
      {links.map((item , i)=>(
        <ListItemText flex={1}>  
        <ListItemButton 
        alignItems='center' sx={{width: '100%', minWidth:250}} key={i}>
        <ListItemIcon>
           <a href={item.href ? item.href : ''}>
             {React.createElement(item.icon)}
             </a>
        </ListItemIcon>
        <a href={item.href} className={classes.nodoco}>
        <ListItemText primary={item.link} />
        </a>
      </ListItemButton>
      </ListItemText>
      
      ))}


      </List>
      </>
  );
}