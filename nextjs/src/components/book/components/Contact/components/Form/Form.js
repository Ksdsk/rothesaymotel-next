/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import emailjs from '@emailjs/browser';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const Form = () => {
  const theme = useTheme();
  
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_u2fhcl4", "template_dwdf8fh", form.current,"user_JCtwxPqZmhyqU82Bh6k2q")
    .then((res) => {
      bake_cookie("res",res.status)
      window.location.reload()
    })
  }


  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        <form autoComplete="off" ref={form} onSubmit={sendEmail}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                name="firstName"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Phone"
                type="tel"
                variant="outlined"
                color="primary"
                size="medium"
                name="phone"
                fullWidth
                required
              />
            </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Check-in Date"
                  type="date"
                  defaultValue={new Date().toISOString().slice(0,10)}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="checkIn"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Check-out Date"
                  type="date"
                  defaultValue={new Date().toISOString().slice(0,10)}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="checkOut"
                  fullWidth
                  required
                />
              </Grid>

            
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                type="number"
                label="Adults (18+)"
                variant="outlined"
                color="primary"
                size="medium"
                name="adult"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                type="number"
                label="Children (0-17)"
                variant="outlined"
                color="primary"
                size="medium"
                name="children"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                sx={{ height: 54 }}
                label="Preferred Room"
                variant="outlined"
                color="primary"
                size="medium"
                name="preferredRoom"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href="/policy"
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We will get back to you via email or phone as soon as possible.
        </Typography>
        <Typography color="text.secondary" variant="body2" align={'center'}>
          <strong>Note: This does not guarantee your reservation.</strong>
        </Typography>

      </Box>
    </Box>
  );
};

export default Form;
