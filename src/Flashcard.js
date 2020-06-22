import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './styles.css'



const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    backgroundColor: 'brown',
  },
  details: {
    display: 'flex',
    // color: 'white',
    flexDirection: 'row',
    

  },
  content: {
    flex: '1 0 auto',
    color: 'white',

  },
  cover: {
    width: '30%',
    position: 'right',
    display: 'flex',
  },
  controls: {
    color: 'white',
    backgroundColor: 'yellow',
    position: 'right',
    display: 'flex',
  },
  playIcon: {
    color: 'green',
    backgroundColor: 'yellow',

    display: 'flex',
    height: 38,
    width: 38,
  },
}));

export default function Flashcard( {flashcard}) {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const playSound = audioFile => {
    audioFile.play();
  };
  
  const song =  new Audio(flashcard.sound)


  return (
    <fll>
    <Card className={classes.root} >
      
      <div className={classes.details} onClick = {() => {setFlip(!flip)} }>
        <CardContent className={classes.content} onClick={() => {playSound(song)} }>
          
        <fl>

        <Typography variant="h9"> 
          {flip ? flashcard.eng : flashcard.heb}

         {/* {setFlip(!flip)} */}

        </Typography>
      </fl>

        </CardContent>
        <CardMedia
        component="img"
        className={classes.cover}
        image={flashcard.image } 
        onClick={() => {playSound(song) }}
        onMouseOver={() => {setFlip(!flip)}}
        resize='both'
      />
      </div>
    
    </Card>
    </fll>
  );
}