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
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description:
      'Start off your best morning with these cafés close by us.',
    title: 'Cafés',
    ref: 'https://www.google.com/search?q=cafes%20in%20Rothesay%20nb&oq=cafes+in+Rothesay+nb&aqs=edge..69i57j0i22i30l5j69i64.5927j0j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsb3wwfYWKRxfhVK0zCzTmoeo2-e-A:1655431742497&rflfq=1&num=10&rldimm=8095553232640113126&lqi=ChRjYWZlcyBpbiBSb3RoZXNheSBuYkiv6-_28a6AgAhaJBAAGAAYAhgDIhRjYWZlcyBpbiByb3RoZXNheSBuYioECAMQAJIBBGNhZmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTk5lVnBYWVZWbkVBRaoBGAoJL20vMDIwZmIyEAEqCSIFY2FmZXMoAA&phdesc=C5399Hmv63U&ved=2ahUKEwjvjdjns7P4AhUmAzQIHddGAz4QvS56BAgSEAE&sa=X&rlst=f#rlfi=hd:;si:8095553232640113126,l,ChRjYWZlcyBpbiBSb3RoZXNheSBuYkiv6-_28a6AgAhaJBAAGAAYAhgDIhRjYWZlcyBpbiByb3RoZXNheSBuYioECAMQAJIBBGNhZmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTk5lVnBYWVZWbkVBRaoBGAoJL20vMDIwZmIyEAEqCSIFY2FmZXMoAA,y,C5399Hmv63U;mv:[[45.4240431,-65.9380764],[45.3106602,-66.0307037]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e1!2m1!1e3,lf:1',
  },
  {
    image: 'https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Enjoy amazing food at the local restaurants. Bon Appétit!',
    title: 'Restaurants',
    ref: 'https://www.google.com/search?q=restaurants+rothesay&tbm=lcl&sxsrf=ALiCzsbzTmySOrn4AsT9jDXp7CSCrDyYSg%3A1655432050318&ei=cuOrYs33EvSuptQP0ba7yA8&oq=restaurants&gs_l=psy-ab.3.0.0i273k1j0i457i67k1j0i402k1l2j0i273k1j0i433i67k1j0i67k1l4.643467.645030.0.645725.11.4.0.7.7.0.161.455.2j2.4.0....0...1c.1.64.psy-ab..0.11.473...35i39k1j0i512i433i131k1j0i433i131k1j0i512i263i433i131i20k1.0.4r8tNlNgtQc#rlfi=hd:;si:;mv:[[45.4046677,-65.9277166],[45.373880899999996,-66.0001503]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3italian_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3,lf:1',
  },
  {
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description:
      'Feel like new every day with fresh clothes.',
    title: 'Laundry',
    ref: 'https://www.google.com/search?q=laundry+in+rothesay&tbm=lcl&sxsrf=ALiCzsbgcjdfcPS-g1x3iS_qaexlVUpUzw%3A1655432697077&ei=-eWrYpq7BO6lptQPgd2ZgAM&oq=laundry+in+rothesay&gs_l=psy-ab.3..0i30i22k1.14040.18557.0.18740.21.18.1.2.3.0.183.1863.10j7.17.0....0...1c.1.64.psy-ab..2.19.1733...35i39k1j0i273k1j0i67k1j0i512k1j0i433i131i457i67k1j0i402k1j0i433i131i67k1j0i512i263i20k1j0i512i433i131k1j0i512i433k1j0i433k1j0i433i457i67k1j0i30i15i22k1.0.-uYPilTqzFU#rlfi=hd:;si:;mv:[[45.4011814,-65.9754568],[45.3951329,-65.9860289]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1',
  },
  {
    image: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description:
      'Because nothing beats your home-cooked food recipes!',
    title: 'Grocery',
    ref: 'https://www.google.com/search?q=grocery+store+in+rothesay&tbm=lcl&sxsrf=ALiCzsZxpvsbUUzupNn-m8FgjJ3PCqF0ZA%3A1655432716768&ei=DOarYqnBLuHNptQPltavyAU&oq=grocery+store+in+rothesay&gs_l=psy-ab.3..0i30i22k1.20140.23941.0.24124.26.20.0.4.4.0.175.1782.11j6.18.0....0...1c.1.64.psy-ab..4.22.1902.10..35i362i39k1j35i39k1j0i273k1j0i433i131i273k1j0i512i433i131k1j0i512k1j0i67k1j0i457i67k1j0i402k1j0i512i263i433i20k1j0i433i457i67k1j0i433i273k1j0i433i131i67k1j0i433i67k1j0i512i433k1j0i433k1j0i433i457i273k1j0i512i10k1j0i30i15i22k1.114.QMkf5g6cc9E#rlfi=hd:;si:;mv:[[45.4275186,-65.9152232],[45.2800605,-66.0523893]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3,lf:1',
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
              Nearby Us
            </Typography>
            <Typography color={'text.secondary'}>
              Walkable cafés, restaurants, and more. All nearby us. 
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
