import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function Authentication() {

  const [username, setUsername] = React.useState() ;
  const [passowrd, setPassowrd] = React.useState() 
  const [name, setName] = React.useState() ;
  const [error, setError] = React.useState() ;
  const [messages, setMessages] = React.useState() ;



  const [formState, setFormState] = React.useState(0) ;
  const [open, setOpen] = React.useState(false) ;

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* <SitemarkIcon /> */}
      </Box>
      
   
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
       Welcome! Let's get started
      </Typography>
      <Button> 
        Sign in
      </Button> <Button> 
        Sign Up
      </Button>
      <Box
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            
            id="username"
            type="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            
          />
            <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            
            id="name"
            type="name"
            name="name"
            placeholder="name"
            autoComplete="name"
            autoFocus
            required
            fullWidth
            variant="outlined"
            
          />

           <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            
            id="password"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
      
        <Button type="button" fullWidth variant="contained" >
          Sign in
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <Link
              href="/material-ui/getting-started/templates/sign-in/"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
      
    </Card>
  );
}