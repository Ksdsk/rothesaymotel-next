import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Nearby
} from '../../components/nearby-us/components';

const GalleryE = () => {
  return (
    <Main  colorInvert={true}>
      <Hero />
      <Container>
        <Nearby/>
      </Container>
    </Main>
  );
};

export default GalleryE;
