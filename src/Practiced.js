import React from 'react'; 
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default function Practiced ( ) {

    const useStyles = makeStyles((theme) => ({
        root: {
        //   display: 'flex',
        backgroundColor: 'brown',
        animationDuration: '2s',
        animationName: 'slidein',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        //   display: 'center',
        // display: 'inline-block',
        // height: '',
        border: '8px solid brown',
        width: '90%',
        height: '700px', 
        // width: '700px',
        padding: '15px 32px', 
        position: 'center',

        // width: '150%',
        // maxWidth: '150%',
        // padding: '10px 10px',
        /* width: '80%', */

        },
        grid: {
          width: 500,
          height: 450,
          direction: "row",
          justify: "center",
          alignItems: "center",
    
        },
        // demo: {
        //   width: 100,
        // }
      }));

      const classes = useStyles();

    return (
        
        <div >
                <br/>
            {/* <Grid container  justify="center" alignItems="center">  */}
            <Grid item  justify="center"> 
            <iframe className={classes.root} src="https://www.tikkun.io" width="100%"  style={{'border': "4px solid brown"}} title="tikkunIO"></iframe> 
            <img style={{backgroundColor: 'brown', display: 'block'}} src="/Slides3/Year13.png" width='100%' alt="jo" loading="lazy" />
            
            </Grid>
            <br/>
        </div>
);
}