import React from "react";
// Components
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
// Styles
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
// Icons
import Favorite from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
// Sounds
import like from "./sounds/state-change_confirm-up.wav";
import open from "./sounds/mercha_tipcha.wav";
import close from "./sounds/ui_unlock.wav";


// import munach from "./sounds/mercha_tipcha.wav";
// import kadma_vazla from "./sounds/mercha_tipcha.wav";
// import zakef_gadol from "./sounds/mercha_tipcha.wav";
// import revii from "./sounds/mercha_tipcha.wav";
// import yetiv from "./sounds/mercha_tipcha.wav";
// import sof_pasuk from "./sounds/mercha_tipcha.wav";
// import psik from "./sounds/mercha_tipcha.wav";
// import munach_zarka_segol from "./sounds/mercha_tipcha.wav";
// import munach_zakef_katon from "./sounds/mercha_tipcha.wav";
// import mercha_tipcha from "./sounds/mercha_tipcha.wav";
// import etnachta from "./sounds/mercha_tipcha.wav";
// import gershayim from "./sounds/mercha_tipcha.wav";
// import mapach_pashta from "./sounds/mercha_tipcha.wav";
// import darga_tvir from "./sounds/mercha_tipcha.wav";

import munach from "./sounds/munach.wav";
import kadma_vazla from "./sounds/kadma_vazla.wav";
import zakef_gadol from "./sounds/zakef_gadol.wav";
import revii from "./sounds/revii.wav";
import yetiv from "./sounds/yetiv.wav";
import sof_pasuk from "./sounds/sof_pasuk.wav";
import psik from "./sounds/psik.wav";
import munach_zarka_segol from "./sounds/munach_zarka_segol.wav";
import munach_zakef_katon from "./sounds/munach_zakef_katon.wav";
import mercha_tipcha from "./sounds/mercha_tipcha.wav";
import etnachta from "./sounds/etnachta.wav";
import gershayim from "./sounds/gershayim.wav";
import mapach_pashta from "./sounds/mapach_pashta.wav";
import darga_tvir from "./sounds/darga_tvir.wav";

import slide from "./sounds/navigation_hover-tap.wav";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a047"
    },
    secondary: {
      main: "#ff5722"
    }
  }
});

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    container: {
      padding: "20px",
      textAlign: "center"
    }
  })
);

export default function MaterialDesignSounds() {

  const mercha_tipcha_audio = new Audio(mercha_tipcha);
  const munach_audio = new Audio(munach);
  const kadma_vazla_audio = new Audio(kadma_vazla);
  const zakef_gadol_audio = new Audio(zakef_gadol);
  const revii_audio = new Audio(revii);
  const yetiv_audio = new Audio(yetiv);
  const sof_pasuk_audio = new Audio(sof_pasuk);
  const psik_audio = new Audio(psik);
  const munach_zarka_segol_audio = new Audio(munach_zarka_segol);
  const munach_zakef_katon_audio = new Audio(munach_zakef_katon);
  const etnachta_audio = new Audio(etnachta);
  const gershayim_audio = new Audio(gershayim);
  const mapach_pashta_audio = new Audio(mapach_pashta);
  const darga_tvir_audio = new Audio(darga_tvir);

  const slideAudio = new Audio(slide);

  const playSound = audioFile => {
    audioFile.play();
  };

  const [state, setState] = React.useState({
    checked: true
  });

  // const toggleSwitch = name => event => {
  //   if (event.target.checked) {
  //     playSound(closeAudio);
  //   } else {
  //     playSound(openAudio);
  //   }
  //   setState({ ...state, [name]: event.target.checked });
  // };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        

        <div className={classes.container}>
          
          <Button
            variant="contained"
            color="secondary"
            onClick={() => playSound(mercha_tipcha_audio)}
          >
            מֵרְכָ֥א טִפְחָ֖א
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_audio)}
          >
            מֻנַּ֣ח
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_zakef_katon_audio)}
          >
         מֻנַּ֣ח זָקֵף קָטָ֔ן

          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(sof_pasuk_audio)}
          >
         סוֹף פָּסֽוּק

          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(etnachta_audio)}
          >
            אֶתְנַחְתָּ֑א 
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(zakef_gadol_audio)}
          >
            זָקֵף גָּד֕וֹל
 
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(revii_audio)}
          >
            רְבִ֗יע
 
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(gershayim_audio)}
          >
            גֵּרְשַׁ֞יִם 
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(mapach_pashta_audio)}
          >
            מַהְפַּ֤ך פַּשְׁטָא֙ 
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(yetiv_audio)}
          >
            יְ֚תִיב 
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_zarka_segol_audio)}
          >
             מֻנַּ֣ח זַרְקָא֮ סֶגּוֹל֒   
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(darga_tvir_audio)}
          >
            דַּרְגָּ֧א תְּבִ֛יר  
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(psik_audio)}
          >
            פָּסֵ֣ק׀
          </Button>
        </div>

{/* 
        <div className={classes.container}>
          <Switch checked={state.checked} onChange={toggleSwitch("checked")} />
        </div> */}

        {/* <div className={classes.container}>
          <Slider
            onChangeCommitted={() => playSound(slideAudio)}
            defaultValue={3}
            step={1}
            marks
            min={1}
            max={10}
          />
        </div> */}
      </div>
    </ThemeProvider>
  );
}
