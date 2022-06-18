import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Direction
} from '../../components/directions/components';

const DirectionsE = () => {
  return (
    <Main  colorInvert={true}>
      <Hero />
      <Container>
        <Direction/>
      </Container>
    </Main>
  );
};

export default DirectionsE;
