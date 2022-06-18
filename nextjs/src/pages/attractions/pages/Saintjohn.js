import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Attractions
} from '../../../components/attractions/components2';

const RothesayE = () => {
  return (
    <Main  colorInvert={true}>
      <Hero />
      <Container>
        <Attractions />
      </Container>
      {/* <Container>
        <SeeRooms/>
      </Container> */}
    </Main>
  );
};

export default RothesayE;
