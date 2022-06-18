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
    image: 'https://i.imgur.com/OEBQNsH.jpg',
    description:
      'The historic cabins feature an all-new renovated interior, while keeping the historic feel outside.',
    title: 'Historic Cabins',
    ref: '/rooms/historic-cabin'
  },
  {
    image: 'https://i.imgur.com/cQb5FVZ.jpg',
    description: 'Our newly built motel units are comfortable and quiet, so you can relax uninterrupted. ',
    title: 'Motel Units',
    ref: '/rooms/motel-units'
  },
  {
    image: 'https://i.imgur.com/Ff83Omv.jpg',
    description:
      'The apartments are fully equipped for a family, with kitchenwares available for a homemade meal.',
    title: 'Apartments',
    ref: '/rooms/apartments'
  },
  {
    image: 'https://i.imgur.com/z8WdWhl.jpg',
    description:
      'Our Cottage is our newest renovation and addition to our list. A two-story unit with features a full kitchen, furnitures, and more.',
    title: 'Cottage',
    ref: '/rooms/cottage'
  },
  {
    image: 'https://i.imgur.com/8KQOQQl.jpg',
    description:
      'An entire 2,000+ sq.ft fully-furnished home for you and your loved ones.',
    title: 'Deluxe Family House',
    ref: '/rooms/deluxe-family-house'
  },
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
              Our rooms
            </Typography>
            <Typography color={'text.secondary'}>
              We are delighted to welcome you. Click on the cards below to learn more about
              each rooms.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {roomList.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
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
                      <Typography variant={'h6'} gutterBottom>
                        {item.title}
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
