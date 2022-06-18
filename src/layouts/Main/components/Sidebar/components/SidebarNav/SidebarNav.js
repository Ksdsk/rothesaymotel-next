import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    our_rooms: our_rooms,
    attractions: attractions,
    gallery: gallery,
    nearby_us: nearby_us,
    directions: directions,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="rmLogo"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://svgshare.com/i/iKj.svg'
                : 'https://svgshare.com/i/iKj.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Our Rooms'} items={our_rooms} />
        </Box>
        <Box>
          <a href="/gallery" style={{textDecoration: 'none'}}>
            <NavItem title={'Gallery'} items={gallery} />
          </a>
        </Box>
        <Box>
          <NavItem title={'Attractions'} items={attractions} />
        </Box>
        <Box>
          <a href="/nearby-us" style={{textDecoration: 'none'}} >
            <NavItem title={'Nearby Us'} items={nearby_us} />
          </a>
        </Box>
        <Box>
          <a href="/directions" style={{textDecoration: 'none'}}>
            <NavItem title={'Directions'} items={directions} />
          </a>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="/book"
          >
            Request your Stay
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
