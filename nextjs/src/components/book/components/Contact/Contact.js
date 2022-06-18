import React from 'react';
import Grid from '@mui/material/Grid';
import { Map, Form } from './components';

import Container from 'components/Container';
import Alert from '@mui/material/Alert';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const StatusMessage = () => {

  const [msg, setMsg] = React.useState("")
  React.useEffect(() => {
    if (read_cookie("res").length != 0) {
      setMsg(read_cookie("res"));
    } 
    delete_cookie("res")
  })


  if (msg == "") {
    return (<div></div>)
  } else if (msg == 200) {
    return (            
      <Alert severity="success" sx={{p:2, mt:3, mb:3}}>Your request was sent out successfully!</Alert>
    )
  } else {
    return (            
      <Alert severity="warning" sx={{p:2, mt:3, mb:3}}>Error {msg}. Your request could not be delivered. Please directly email us instead.</Alert>
    )
  }

}

const Contact = () => {
  return (
    <Container>
      <StatusMessage/>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={5}>
          <Map />
        </Grid>
        <Grid item container xs={12} md={7} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
