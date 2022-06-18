/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Request your stay
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
            Thank you for considering us. Please fill out the form and we will get back to you as quick as possible.
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <Typography component="p" variant="body1" align="left">
          Please read our {' '}
          <Box
            component="a"
            href="/guest-policy"
            color={theme.palette.text.primary}
            fontWeight={'700'}
          >
            guest policy
          </Box>
          {' '}prior to filling out the form.
        </Typography>
      </Box>
    </Box>
  );
};

export default Map;
