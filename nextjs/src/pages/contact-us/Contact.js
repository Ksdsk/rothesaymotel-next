import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Contact
} from '../../components/contact-us/components';

const DirectionsE = () => {
  return (
    <Main  colorInvert={true}>
      <Hero />
      <Container>
        <Contact/>
      </Container>
    </Main>
  );
};

export default DirectionsE;
