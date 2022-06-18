import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Gallery,
  Story,
  Amenities,
  Description,
  CallToAction
} from '../../../components/rooms/components5';

const MotelUnits = () => {
  return (
    <Main colorInvert={false}>
      {/* <Hero /> */}
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Description />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Amenities />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
            <Gallery />
        </Container>
      </Box>
      <Container>
        <CallToAction />
      </Container>
    </Main>
  );
};

export default MotelUnits;
