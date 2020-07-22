import React from 'react'; 
import FlashcardList from "./FlashcardList";
import {Samples} from './Tropes'
import Quiz from "./Quiz";

import {
    makeStyles,
    createStyles,
  } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    container: {
      padding: "20px",
      textAlign: "center"
    }
  })
);


export default function Ropes ( ) {

    const classes = useStyles();

    
    return (
        <div className={classes.root}>
        <Quiz flashcards = {Samples} />

        <p>
        {/* --------------------------------------------------------------- <br></br> */}
        Press any trope below to hear the recording and view transliteration <br></br>
        {/* Pay special attention to the shapes of the tropes! <br></br> */}
        {/* --------------------------------------------------------------- */}
        </p>
        <FlashcardList flashcards = {Samples} />
        </div>
    );
}