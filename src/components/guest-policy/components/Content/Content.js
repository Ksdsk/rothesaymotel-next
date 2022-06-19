import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'GENERAL POLICY',
    description: 
      'Here at Rothesay Motel, smoking, using e-cigarettes or any of its kinds, and tobacco products in the room is strictly prohibited. Please smoke outdoors and safely dispose the used smokes.\n\n' +
      'Pets are not allowed within rooms and property.\n\n' +
      'Any broken piece of the property must be reported to the front desk.\n\n' + 
      'Guests failing to comply with our general policy will result in a $200 penalty x [Number of nights booked], plus applicable charges.'
  },
  {
    title: 'CANCELLATION POLICY',
    description:
      'Guests may cancel or modify your reservations five days before arrival and receive a full refund.\n\n' +
      'In the case where the guests do not cancel or modify their booking within five days before arrival, the guests will be fully charged for their promised booking periods. We recommend guests to contact us right away.'
  },
  {
    title: 'PARKING',
    description:
      'Rothesay Motel offers free parking for the duration of all the guests. As there are no lines breaking the parking zones, please park appropriately so other guests will not feel discomfort getting in and out of the facility.'
  },
  {
    title: 'OTHERS',
    description:
      'Guests are entitled to our free Wi-Fi access for their booking duration. Illegal activities on the Wi-Fi is strictly forbidden, and will be traced back to the user for any legal dispute. Deluxe Family Suite guests are entitled to both the private and public Wi-Fi access.\n\n' +
      'Guests may leave their keys inside their rooms when checking out.\n\n' +
      'Guests are entitled to our complimentary BBQ grills available at designated sites in the property. Please use them respectfully for the other guests.'
  },
  {
    title: 'CHANGES',
    description:
      'For more information about our guest policy, if you have questions, or if you would like to make a complaint, please contact us by e-mail at rothesaymotel@gmail.com or by mail using the details provided below:\n\n' +
      '80 Hampton Road, Rothesay, NB, E2E2P5, Canada'
  }
];

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography style={{whiteSpace: 'pre-line'}} component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
