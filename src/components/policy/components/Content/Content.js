import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'PERSONAL INFORMATION WE COLLECT',
    description: 
      'When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”\n\n' + 
      'We collect Device Information using the following technologies:\n\n' +
      '    - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.\n' +
      '    - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.\n' + 
      '    - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.\n\n' +
      'When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information, Contact Forms and Request Forms.'
  },
  {
    title: 'HOW DO WE USE YOUR PERSONAL INFORMATION?',
    description:
      'We use the Contact Forms and Request Forms that we collect generally to fulfill any orders placed through the Site. Additionally, we use this Contact Forms and Request Forms to communicate with you.\n\n' +
      'We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).',
  },
  {
    title: 'SHARING YOUR PERSONAL INFORMATION',
    description:
      'We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Google Analytics and Cloudflare to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/.  You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout.\n\n' +
      'Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.',
  },
  {
    title: 'BEHAVIOURAL ADVERTISING',
    description:
      'As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.\n\n' +
      'You can opt out of targeted advertising through:\n' + 
      'GOOGLE - https://www.google.com/settings/ads/anonymous\n\n' +
      'Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  http://optout.aboutads.info/.'
  },
  {
    title: 'DO NOT TRACK',
    description:
      'Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.',
  },
  {
    title: 'DATA RETENTION',
    description:
      'When you send a form through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.',
  },
  {
    title: 'CHANGES',
    description:
      'For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at rothesaymotel@gmail.com or by mail using the details provided below:\n\n' +
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
