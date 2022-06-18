import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const mock = [
  {
    title: "Phone",
    subtitle:
      '+1 (506) 643-0436',
  },
  {
    title: "Email",
    subtitle:
      'rothesaymotel@gmail.com',
  },
];

const MapHero = () => {
  const theme = useTheme();

  const LeftSide = () => {
    return (
      <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          WHERE WE ARE LOCATED
        </Typography>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
            80 Hampton Road, Rothesay, N.B. Canada E2E 2P5
          </Typography>
          <Typography color="text.secondary">
            Located in the heart of Rothesay, next to the town hall. 
            Find us on the main road that connects Rothesay to the rest of Canada.

          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} md={6}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary" component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=RothesayMotel&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MapHero;
