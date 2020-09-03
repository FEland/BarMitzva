import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import Ropes from './Ropes_8';
// import Shema from './Shema_4';
import Master from './Master';
// import MainScreen from './MainScreen'
// import Slideshow from './Slideshow3';
import Practiced from './Practiced';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import master_tikkun from './tikkun-master4.png'; // Tell webpack this JS file uses this image
import Player from './Player_dos'
import Docus from './Docus'

import { Link, Route, Switch, HashRouter } from "react-router-dom";

// import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */

import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8eacbb',
      main: '#607d8b',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ChromeSite(props) {
  
  const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>

      <HashRouter>
      <div className={classes.root}>
      {/* <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  /> */}
      
        <Route
          path="/"
          render={({ location }) => (
            <Fragment variant="dense" >
                <div>
                <Grid container spacing={3}> 
                  <Grid item xs={2} >
                    <div class="topleft">
                    <Link to="/Practice">
                        <img src="./images/barmit.png" alt="icon" loading="lazy" width="50" height='auto'/>
                    </Link>
                    </div>
                  </Grid>
                <Grid item xs={8} >
                  <Tabs value={location.pathname} textColor="primary" variant="fullWidth" centered > 
                    <Tooltip title="Practice Torah Reading" arrow placement="left">
                      <Tab label="Tikkun" component={Link} to="/Tikkun" />
                    </Tooltip>
                    
                    <Tab label="Torah & Haftora Blessings Slides" component={Link} to="/Haftora" />

                    <Tooltip title="Quiz yourself on the Tropes" arrow placement="right">
                      <Tab label="Tropes" component={Link} to="/Tropes" />
                    </Tooltip>
                  </Tabs>
                </Grid>

                <Grid item xs={2} >
                <div class="topright">
                  <Link to="/">
                    <img src="/Slides3/Year13.png" alt="icon" loading="lazy" width="50" height='auto' position="absolute" />
                  
                  </Link>
                </div>
                </Grid>
    
              </Grid>


                </div>


              <Switch>
                

                {/* <Route path="/Tikkun" render={() => <div> <Tikkun/> </div>} /> */}
                <Route path="/Tikkun" render={() => <div>
                  <Player />

                  <div class= "master_tikkun">
                    <img src={master_tikkun} alt="master_tikkun" loading="lazy" width="2000" height="1000"/>
                  </div>
                  </div>} 
                />
                <Route path="/Haftora" render={() => 
                <div> <Docus/> </div>
                

                } />
                <Route path="/Tropes" render={() => <div> <Ropes/>  </div>} />
                <Route path="/Practice" render={() => <div> <Practiced/>  </div>} />
              {/* <iframe class= "minor_tikkun" src="https://www.tikkun.io" width="100%"   title="tikkunIO"></iframe> */}

                <Route path="/" render={() => <div> <Master/> </div>} />

              </Switch>
            </Fragment>
          )}
        />
        <br/>
            <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
      </div>
      
    </HashRouter>
    </ThemeProvider>
    

    );
}
