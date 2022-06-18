import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages = false, colorInvert }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    our_rooms: our_rooms,
    gallery: gallery,
    attractions: attractions,
    nearby_us: nearby_us,
    directions: directions,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
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
            mode === 'light' && !colorInvert
              ? 'https://svgshare.com/i/iKj.svg'
              : 'https://svgshare.com/i/iKj.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Our Rooms'}
            id={'our-rooms'}
            items={our_rooms}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <a href="/gallery" style={{textDecoration: 'none'}}>
            <NavItem
              title={'Gallery'}
              id={'gallery'}
              items={gallery}
              colorInvert={colorInvert}
            />
          </a>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Attractions'}
            id={'attractions'}
            items={attractions}
            colorInvert={colorInvert}
          />

        </Box>
        <Box marginLeft={4}>
          <a href="/nearby-us" style={{textDecoration: 'none'}}>
            <NavItem
              title={'Nearby Us'}
              id={'nearby-us'}
              items={nearby_us}
              colorInvert={colorInvert}
            />
          </a>
        </Box>
        <Box marginLeft={4}>
          <a href="/directions" style={{textDecoration: 'none'}}>
            <NavItem
              title={'Directions'}
              id={'directions'}
              items={directions}
              colorInvert={colorInvert}
            />
          </a>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/book"
            size="large"
          >
            Request your Stay
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),

            backgroundColor: '#FFFFFF50'
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
