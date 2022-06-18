import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Story,
  Rooms,
  Application,
} from '../../../components/rooms/components';

const About = () => {
  return (
    <Main colorInvert={false}>
      <Container>
        <Rooms />
      </Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container>
    </Main>
  );
};

export default About;
