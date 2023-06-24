import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BasicCard = ({ user }) => {
  return (
    <>
      <Card raised sx={{ maxWidth: 345, margin: '1rem' }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='250'
            style={{
              width: '300px',
              maxHeight: '300px',
            }}
            image={user.avatar}
            alt='profile_img'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {user.first_name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {user.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default BasicCard;
