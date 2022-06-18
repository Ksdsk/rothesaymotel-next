import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

const mock = [
  {
    media: 'https://i.imgur.com/OEBQNsH.jpg',
    title: 'Historic Cabin',
    price: '$70 ~ $95 / night',
    beds: '1 Double Bed',
    description: '1 Guest'
  },
  {
    media: 'https://i.imgur.com/cQb5FVZ.jpg',
    title: 'Motel Units / 1 Bed',
    price: '$95 - $130 / night',
    beds: '1 King Bed',
    description: '1-2 Guests + 1 Child'
  },
  {
    media: 'https://i.imgur.com/NtZtO97.jpg',
    title: 'Motel Units / 2 Beds',
    price: '$95 ~ $136 / night',
    beds: '2 Double Beds OR 2 Queen Beds',
    description: '2-4 Guests'
  },
  {
    media: 'https://i.imgur.com/tLqYptR.jpg',
    title: 'Apartments',
    price: '$130 ~ $189 / night',
    beds: 'Options from 2 Double Beds to 2 Queen Beds',
    description: '2-4 Guests'
  },
  {
    media: 'https://i.imgur.com/OlASSxP.jpg',
    title: 'Cottage',
    price: '$169 ~ $199 / night',
    beds: '2 Queen Beds + One Futon Bed',
    description: '2~5 Guests'
  },
  {
    media: 'https://i.imgur.com/8KQOQQl.jpg',
    title: 'Deluxe Family House',
    price: '$240 ~ $289 / night',
    beds: '3 Queen Beds + One Single Bed',
    description: '4-6 Guests'
  },
];

const FeaturedProperties = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Our Rooms
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Choose your comfort
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Check out our rooms, from small yet historic cabins to our huge 
          <br />
          two-story family house with a full kitchen!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    position={'absolute'}
                    bottom={0}
                    padding={2}
                    width={1}
                  >
                    <Box
                      padding={1}
                      bgcolor={'background.paper'}
                      boxShadow={1}
                      borderRadius={2}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <BedOutlinedIcon/>
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.beds}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <EmojiPeopleOutlinedIcon/>
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </Box>
                      }
                    >
                      See more
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            justifyContent={'center'}
            marginTop={2}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Request your stay
            </Button>
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              fullWidth={isMd ? false : true}
            >
              Explore more
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedProperties;
