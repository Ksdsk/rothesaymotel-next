/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';


const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url("https://i.imgur.com/vwLiUMw.jpg") no-repeat center',
        backgroundSize: 'cover',
        marginTop: -13,
        paddingTop: 50,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(0deg, rgba(29,22,33,0.7) 0%, rgba(253,29,29,0) 50%, rgba(29,22,33,0.7) 100%)',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              Welcome to Rothesay Motel
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              Comfortable stay year-round.
              <br />
              80 Hampton Road, Rothesay, New Brunswick E2E2P5
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
