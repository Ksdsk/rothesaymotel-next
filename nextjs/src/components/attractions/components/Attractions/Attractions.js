import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const roomList = [
  {
    image: 'https://images.unsplash.com/photo-1621777226200-e0f080c1e5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    description:
      'Explore Rothesay, a small and friendly suburb with gravelly shores, walk in the park, star-watching on the hills, and more.',
    title: 'Rothesay',
    ref: '/attractions/rothesay',
    distance: 'You are here'
  },
  {
    image: 'https://i.imgur.com/W3bRO4I.jpg',
    description: 'Explore Saint John, the waterfront city with one of the longest history in Canada.',
    title: 'Saint John',
    ref: '/attractions/saint-john',
    distance: '15km'
  }
];

const Rooms = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={4}
        >
          <Box>
            <Typography fontWeight={700} variant={'h4'} gutterBottom>
              Attractions
            </Typography>
            <Typography color={'text.secondary'}>
              Explore New Brunswick to your fullest.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {roomList.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                component={'a'}
                href={item.ref}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={0}
                  sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
                >
                  <CardMedia
                    image={item.image}
                    title={item.title}
                    sx={{
                      height: { xs: 300, md: 360 },
                      position: 'relative',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                  <Box
                    width={'90%'}
                    margin={'0 auto'}
                    display={'flex'}
                    flexDirection={'column'}
                    boxShadow={3}
                    bgcolor={'background.paper'}
                    position={'relative'}
                    zIndex={3}
                    sx={{ transform: 'translateY(-30px)' }}
                  >
                    <Box component={CardContent} position={'relative'} padding={4}>
                      <Typography display='inline' variant={'h6'}>
                        {item.title} 
                      </Typography>
                      <Typography sx={{pl:1}} display='inline' variant={'body2'} gutterBottom>
                        ({item.distance})
                      </Typography>
                      <Box padding={2} display={'flex'} flexDirection={'column'}>
                        <Box>
                          <Divider />
                        </Box>
                      </Box>
                      <Typography color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Rooms;
