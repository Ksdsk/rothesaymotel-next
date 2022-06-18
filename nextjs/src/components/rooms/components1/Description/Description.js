/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const WhatsIncluded = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Room 1
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              One Double-sized bed, perfect for a solo-traveller looking to stay for a short period.
              Live in the cabin with 100+ years of history, with fully renovated interior.
              <br/><br/>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={20}
                marginRight={1}
                style={{position: 'relative', top: '4px'}}
              >
                <BedOutlinedIcon/>
              </Box>
              1 Double Bed
              <br/><br/>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={20}
                marginRight={1}
                style={{position: 'relative', top: '4px'}}
              >
                <EmojiPeopleOutlinedIcon/>
              </Box>
              1 Guest
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Room 2
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              One Double-sized bed, perfect for a solo-traveller looking to stay for a short period.
              Live in the cabin with 100+ years of history, with fully renovated interior.
              <br/><br/>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={20}
                marginRight={1}
                style={{position: 'relative', top: '4px'}}
              >
                <BedOutlinedIcon/>
              </Box>
              1 Double Bed
              <br/><br/>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={20}
                marginRight={1}
                style={{position: 'relative', top: '4px'}}
              >
                <EmojiPeopleOutlinedIcon/>
              </Box>
              1 Guest
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatsIncluded;
