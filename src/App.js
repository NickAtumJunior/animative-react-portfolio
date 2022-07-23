import './App.css';
import Grid from '@mui/material/Grid';
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';

function App() {
  return (
     <Grid container md={12} sx={12} sm={12} xs={12}>
          
      <AppBar position="static"  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           hello
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
         <Grid 
         container md={12} sx={12} sm={12} xs={12} height="100vh" direction='column' style={{
            backgroundImage:'url(./assets/bg.png)',
            backgroundPosition:'center',
            backgroundSize:"cover",
         }}>
             <Grid item md={12} sx={12} sm={12} xs={12}
              style={{
                  backgroundColor:'hsla(358, 43%, 0%, 0.5)',
              }}
             >
             <Stack spacing={1} sx={{
                paddingTop:'16%'
             }}>
               <center>

               <p  className='animate__animated animate__backInLeft'
               style={{
                 fontSize:'4em',
                 margin:0,
                 color:'#fce410',
                 fontWeight:'lighter'
               }}>I'm Freelancer</p>

                <h1 className='animate__animated animate__backInRight'
                 style={{
                    fontSize:'5.5em',
                    marginTop:'2%',
                    color:'white',
                    fontWeight:'bolder'
                }}>
                    <span style={{
                         color:'#fce410'
                    }}>D</span>esigner & <span style={{
                        color:'#fce410'
                    }}>D</span>eveloper
                </h1>
                <button className='outlined-home-btn'>
                    Hire me
                </button>
                <button className='contained-home-btn'>
                    Download Resume
                </button>
               </center>
              </Stack>
             </Grid>
         </Grid>
         <Grid
          container
          md={12} sx={12} sm={12} xs={12}
          height="100vh" direction='column'
          >
             
         </Grid>
         <Grid container md={12} sx={12} sm={12} xs={12} >
             portfolio
         </Grid>
         <Grid container md={12} sx={12} sm={12} xs={12} >
               about us
         </Grid>
     </Grid>
  );
}

export default App;
