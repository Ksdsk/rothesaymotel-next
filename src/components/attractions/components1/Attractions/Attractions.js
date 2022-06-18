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
    image: 'https://i.imgur.com/auxsdM8.png',
    title: 'Gondola Point Beach',
    ref: 'https://www.google.com/maps/place/Gondola+Point+Beach/@45.4526463,-65.9790534,19z/data=!3m1!4b1!4m5!3m4!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!8m2!3d45.4530113!4d-65.9793323?hl=en-CA'
  },
  {
    image: 'https://i.imgur.com/8E6eUFJ.png',
    title: "Meenan's Cove",
    ref: "https://www.google.com/maps/place/Meenan's+Cove+Beach/@45.4585,-65.946041,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7aac90ff016bd:0xa1111d2f94989235!8m2!3d45.4585!4d-65.9356298?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/0CQ7P1M.jpg',
    title: "Quispamsis Arts and Culture Park",
    ref: "https://www.google.com/maps/place/Town+of+Quispamsis+Arts+%26+Culture+Park/@45.4089351,-65.9843364,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7aca0a7ba5787:0x6db21b69bd246c56!8m2!3d45.4089351!4d-65.9668269?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/H9gxcbb.jpg',
    title: "QPlex",
    ref: "https://www.google.com/maps/place/QPlex/@45.4410452,-65.9898576,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca654d03bdb0e51:0xaaa2feb8ab902e76!8m2!3d45.4410452!4d-65.975134?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/WOe4xOV.jpg',
    title: "Steele Kennedy Park",
    ref: "https://www.google.com/maps/place/Steele+Kennedy+Park/@45.3884627,-65.9950885,15z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x0:0x7a48dddf0394844f!8m2!3d45.3884627!4d-65.9877267?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/helhqkP.jpg',
    title: "Hillside Trail",
    ref: "https://www.google.com/maps/place/Hillside+Trail/@45.3794113,-65.9856387,15z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x0:0x60c75c97ed2f123e!8m2!3d45.3794113!4d-65.9794482?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/VcI7nEc.jpg',
    title: "Rothesay Netherwood School",
    ref: "https://www.google.com/maps/place/Rothesay+Netherwood+School/@45.3796364,-65.9951908,15z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7acdc04ee706d:0x68bbeb1c4e850cc9!8m2!3d45.3796364!4d-65.9899852?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/WP3Stq5.jpg',
    title: "Riverside Country Club",
    ref: "https://www.google.com/maps/place/Riverside+Country+Club/@45.3824345,-66.0056886,15z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7ad24f10d9937:0xe436b0d7fffe4b6f!8m2!3d45.3709272!4d-66.0079569?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/BZpAZsr.jpg',
    title: "Renforth Lighthouse",
    ref: "https://www.google.com/maps/place/Renforth+Lighthouse/@45.3576563,-66.0268685,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7ad472367bf69:0xf4f68afcfb2a3599!8m2!3d45.3576563!4d-66.0144874?hl=en-CA"
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
              Attractions
            </Typography>
            <Typography color={'text.secondary'}>
              Click on the cards for more pictures and details.
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
                      <Typography variant={'h6'}>
                        {item.title} 
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
