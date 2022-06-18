/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    feedback:
      'The rooms were very clean and well appointed. The owner and staff were very friendly and helpful. The location was perfect for our needs! I would highly recommend the Rothesay Motel.',
    name: 'Exceptional',
    title: 'Janice, from Canada',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      'We recently stayed at the Rothesay Motel while in town for a wedding, and we thoroughly enjoyed our stay. The small cabin was quaint with its 100 year old charm, exceptionally clean and the bed was very comfortable. Kevin provided top notch hospitality and was pleasant to deal with throughout our stay. We hope to be back again some day!',
    name: 'Bethany, from Canada',
    title: 'Bethany, from Canada',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'Courteous, helpful, staff, clean, comfortable rooms with great amenities, and situated close to shops and restaurants. We very much enjoyed our stay.',
    name: '10/10',
    title: 'Kendrick, from United Arab Emirates',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
  {
    feedback:
      'This is a great place to stay. Very clean, quiet and affordable. Owner/operator takes pride in his facility, and it shows. Restaurants, laundry facilities and drug store just minutes away in a car. Will be back next year for an even longer stay. Oustanding!!!',
    name: 'Excellent!',
    title: 'John, from Canada',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
  {
    feedback:
      ' Appartement sympa, très calme, bien équipé, avec 2 chambres. [Nice apartment, very quiet, well equipped, with 2 bedrooms.]',
    name: 'Studio sympa, calme et confortable',
    title: 'Thierry, from France',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  },
  {
    feedback:
      'Location is great - not far off the highway and close to local amenities and a bar that is open late. :-) This time we stayed in one of the original 100-year-old cabins that have been renovated. They are very very tiny inside, so I recommend those for folks travelling alone, and the regular rooms for people travelling with 1+ guests. The cabin we stayed in was adorable but did not have a microwave or stuff for coffee - there was a small fridge, however. But the regular rooms have it all. And it is a fun experience to stay in those tiny stand-alone rooms.',
    name: 'Our go-to place on trips!',
    title: 'Kirstie, from United States',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
  },
];

const ReviewsWithBorderedGridLayout = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box display={'flex'} justifyContent={'center'}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box key={item} color={theme.palette.secondary.main}>
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Box>
            ))}
          </Box>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Reviews from our valued guests
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            Not sure yet? Here are our recent reviews from trusted acommodation websites!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{
                border: 0,
                [theme.breakpoints.up('md')]: {
                  borderRight: `1px solid ${theme.palette.alternate.dark}`,
                  '&:nth-of-type(2n)': {
                    borderRight: `1px solid ${theme.palette.alternate.dark}`,
                  },
                  '&:nth-of-type(-n+4)': {
                    borderBottom: 0,
                  },
                  '&:nth-of-type(3n)': {
                    borderRight: 0,
                  },
                  '&:nth-of-type(-n+3)': {
                    borderBottom: `1px solid ${theme.palette.alternate.dark}`,
                  },
                },
              }}
            >
              <Box p={2}>
                <Box marginBottom={2}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </Box>
                <Typography color="text.secondary">{item.feedback}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewsWithBorderedGridLayout;
