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
    image: 'https://www.worldatlas.com/r/w1200/upload/21/9a/4a/shutterstock-374979274.jpg',
    title: 'Reversing Falls',
    ref: 'https://www.google.com/maps/place/Reversing+Falls/@45.2647221,-66.105587,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x0:0xe5dcb561af5f4bf1!8m2!3d45.2647221!4d-66.0880775?hl=en-CA'
  },
  {
    image: 'https://tourismnewbrunswick.ca/sites/default/files/styles/content/public/2021-06/6_IrvingNaturePark.jpg',
    title: "Irving Nature Park",
    ref: "https://www.google.com/maps/place/Irving+Nature+Park/@45.2481672,-66.1307354,14z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7b55d4c9b918b:0x9b41fc875a63bc92!8m2!3d45.2237791!4d-66.1275676?hl=en-CA"
  },
  {
    image: 'http://canadianheritagematters.weebly.com/uploads/6/9/2/2/69226667/published/img-20190804-091808.jpg?1575304175',
    title: "King's Square",
    ref: "https://www.google.com/maps/place/King's+Square/@45.2674684,-66.0653558,15.5z/data=!4m13!1m7!3m6!1s0x4ca655205ee5e6bb:0x9f05b85fccdbf51d!2sGondola+Point+Beach!3b1!8m2!3d45.4530113!4d-65.9793323!3m4!1s0x4ca7b37c3d54b5d3:0x759fef414b9d9b6a!8m2!3d45.2736351!4d-66.0580822?hl=en-CA"
  },
  {
    image: 'https://res.cloudinary.com/explore150/image/upload/w_635,h_345,c_fill/v1511894365/sites/52401.jpg',
    title: "Market Square",
    ref: "https://www.google.com/maps/place/Market+Square/@45.2728715,-66.0643016,17.75z/data=!3m1!5s0x4ca7b37cf3d97fab:0x7ab909c8690cdd56!4m13!1m7!3m6!1s0x4ca7b37d17b7eb9d:0x634dfb1cb5235c75!2sMarket+Square,+Saint+John,+NB!3b1!8m2!3d45.2728383!4d-66.0629192!3m4!1s0x4ca7b37d19fc7e73:0x2a83a50283a80cc7!8m2!3d45.2726895!4d-66.0651941?hl=en-CA"
  },
  {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2f/e8/f2/photo4jpg.jpg?w=600&h=300&s=1',
    title: "Rockwood Park",
    ref: "https://www.google.com/maps/place/Rockwood+Park/@45.3146011,-66.0973886,14.25z/data=!4m13!1m7!3m6!1s0x4ca7b37d17b7eb9d:0x634dfb1cb5235c75!2sMarket+Square,+Saint+John,+NB!3b1!8m2!3d45.2728383!4d-66.0629192!3m4!1s0x4ca7b3216f795ec3:0x5753dabe3a8c940b!8m2!3d45.3039657!4d-66.059464?hl=en-CA"
  },
  {
    image: 'https://www.discoversaintjohn.com/sites/default/files/styles/member_header_image/public/2019-03/Imperial%20header.jpg?h=c4fda2fe',
    title: "Imperial Theatre",
    ref: "https://www.google.com/maps/place/Imperial+Theatre/@45.2729256,-66.062336,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b37e9d6d5919:0x8db11ddbd5e12244!8m2!3d45.2729345!4d-66.0578543?hl=en-CA"
  },
  {
    image: 'https://bayoffundytourism.com/wp-content/uploads/2016/04/1026_NB-Museum2.jpg',
    title: "New Brunswick Museum",
    ref: "https://www.google.com/maps/place/New+Brunswick+Museum/@45.2731324,-66.0670957,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b498faa76665:0xb9833daafe978be8!8m2!3d45.2731324!4d-66.064907?hl=en-CA"
  },
  {
    image: 'https://media-cdn.sygictraveldata.com/media/1200x630/612664395a40232133447d33247d383537393833323630',
    title: "TD Station",
    ref: "https://www.google.com/maps/place/TD+Station/@45.2761448,-66.063877,17z/data=!4m5!3m4!1s0x4ca7b37d219fdd97:0x9da5e1c2fe729bdf!8m2!3d45.2765138!4d-66.0641569?hl=en-CA"
  },
  {
    image: 'https://i.imgur.com/of39oyv.jpg',
    title: "City Market",
    ref: "https://www.google.com/maps/place/Saint+John+City+Market/@45.2740862,-66.061499,17z/data=!3m2!4b1!5s0x4ca7b37c5d6a42d3:0xefdf74bfd36ab62f!4m5!3m4!1s0x4ca7b37c690aa159:0xf6cf8291cbd9d04f!8m2!3d45.2740862!4d-66.0593103?hl=en-CA"
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
