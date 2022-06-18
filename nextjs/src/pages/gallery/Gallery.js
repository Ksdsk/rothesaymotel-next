import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Gallery,
  Hero,
  SeeRooms
} from '../../components/gallery/components';

const GalleryE = () => {
  return (
    <Main  colorInvert={true}>
      <Hero />
      <Container>
        <Gallery />
      </Container>
      <Container>
        <SeeRooms/>
      </Container>
    </Main>
  );
};

export default GalleryE;
