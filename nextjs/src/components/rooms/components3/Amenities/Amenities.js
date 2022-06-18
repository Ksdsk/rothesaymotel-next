import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const roomFeatures = [
  {
    name: 'High-Speed Internet',
  },
  {
    name: '60" TV Service',
  },
  {
    name: 'Parking',
  },
  {
    name: 'Hair Dryer',
  },
  {
    name: 'Microwave',
  },
  {
    name: 'Full-size Fridge and Freezer',
  },
  {
    name: 'Kitchen',
  },
  {
    name: 'Induction Stovetops',
  },
  {
    name: 'Toaster',
  },
  {
    name: 'Dishes and Utensils',
  },
  {
    name: 'Dining Table',
  },
  {
    name: 'Coffee Maker',
  },
  {
    name: 'Air Conditioning / Heating',
  },
  {
    name: 'Access to BBQ Grills',
  },
  {
    name: 'Free Bottled Water',
  },
  {
    name: 'Desk space',
  },
  {
    name: 'Shower',
  },
  {
    name: 'Plenty of Towels',
  },
];

const Amenities = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          What's included
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          We value your comfort
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          Here's a list of everything that comes with our Cottage.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {roomFeatures.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemText
                    align={'center'}
                    sx={{ margin: 0 }}
                    primary={item.name}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
