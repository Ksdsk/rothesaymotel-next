import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Search = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'left'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Our Little History
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'left'}
          data-aos={'fade-up'}
        >
        <strong>Rothesay Motel formerly Ye Comfy Cabins</strong>, began in 1920 with the construction of the cabins by the Breen family who ran the business until 1971. At the time, the Hampton Highway was the main road to Moncton. 
        <br/><br/>
        It was later taken over by the Gordon family, who relocated from Saint John, until 1996 when Bob and Erin Black became the owners of Ye Comfy Cabins until 2004. The McGuires ran the cabins for six years and then demolished all but three to build the nine unit motel. The property reserved two cabins and the two-unit old barn which serve as a reminder of the business's rich history. 
        <br/><br/>
        Current owners, Kevin (K.K.) Kang and Sunmi Jung took the motel and made huge modern changes. The rooms were freshly renovated to give a taste of modernness and comfort while preserving its past exterior.
        </Typography>
      </Box>
    </Box>
  );
};

export default Search;
