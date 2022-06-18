import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

import Container from 'components/Container';

const SeeRooms = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Want to see our rooms?
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Click on this button to see the pictures of the various
              <br />
              styles of rooms we offer.
            </Typography>
          </Box>
          <Box>
            <Button variant={'contained'} size={'large'} href={"/rooms"}>
              See the Rooms
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://i.imgur.com/NtZtO97.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SeeRooms;
