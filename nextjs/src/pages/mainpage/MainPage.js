import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  FeaturedProperties,
  Hero,
  Places,
  Reviews,
  Search,
} from '../../components/mainpage/components';

const Index = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedProperties />
        </Container>
      </Box>
      <Box>
        <Container>
          <Search />
        </Container>
      </Box>

      <Box bgcolor={'alternate.main'}>
        <Container>
          <Places />
        </Container>
      </Box>
      <Box>
        <Container>
          <Reviews />
        </Container>
      </Box>
    </Main>
  );
};

export default Index;
