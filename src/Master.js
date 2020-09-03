import React from 'react'; 
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */


export default function Master ( ) {
    // const [tikkun, setTikkun] = useState(false);

    // function importAll(r) {
    //     return r.keys().map(r);
    // }

    // const lol = importAll(require.context("./Slides3/", true, /00.jpg$/));
    return (
        <div>
            
        <div style={{'color': 'white'}}>
            <h1 >Welcome to Samuel's Ki Tavo Bar Mitzvah Website! </h1>
            <h2 >Explore the Links Above</h2>
        <frontpage>
                  <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  />

        {/* <img src="/Slides3/Melech5.jpg" alt="frontpage" loading="lazy" /> */}

        </frontpage>
        </div>
        
        {/* LOADING THIS GIF and Slide Covers HIDDEN SO IT WILL BE READY IN OTHER PAGE
        <img src="/Slides3/loadin.gif" alt="icon" width='250%' position="absolute" style={{display: 'none'}}/>
        {lol.map(image => {
            return (<img src={image} alt="hiddenCovers" width='50%' style={{display: 'none'}}/>)
        })} */}

       
            
        

         {/* <Tooltip title="Built by external party: Akiva Gordon"  placement="center"> */}
             {/* <iframe src="https://www.tikkun.io" width="80%" height="400" style={{'border': "4px solid blue"}} title="tikkunIO"></iframe> : ''} */}
        {/* </Tooltip>  */}

        {/* <div style={{'position':"absolute"}}> */}
            {/* <img src="/Slides/Shema/02.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img>
            <img src="/Slides/Cov.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img> */}


        </div>
);
}