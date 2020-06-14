import React, { useState } from 'react'; 
// Components
import Button from "@material-ui/core/Button";

import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
// Styles
import {
  makeStyles,
  withStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Sounds

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
import pazer from "./sounds/pazer.wav";
import sof_aliya from "./sounds/sof_aliya.wav";
import tlisha_gdola from "./sounds/tlisha_gdola.wav";
import tlisha_ktana from "./sounds/tlisha_ktana.wav";
import kadma from "./sounds/kadma.wav";

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
    root: {
        flexGrow: 1,
    },
    container: {
      padding: "20px",
      textAlign: "center"
    }
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   },
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
  const pazer_audio = new Audio(pazer);
  const sof_aliya_audio = new Audio(sof_aliya);
  const tlisha_gdola_audio = new Audio(tlisha_gdola);
  const tlisha_ktana_audio = new Audio(tlisha_ktana);
  const kadma_audio = new Audio(kadma);

  const playSound = audioFile => {
    audioFile.play();
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>

      <h2> Welcome Samuel to the Torah Trope Website!
          Today is {new Date().toLocaleDateString()}.
      </h2>
        
        Select any trope to hear the recording and transliteration.
        Pay special attention to the shapes of the tropes!

 
        <div className={classes.container}>
        <ro
          color="primary"
          fontSize="large" 
          onClick={() => playSound(mercha_tipcha_audio)}
        >
            <span class="mercha_tipcha_e">Mercha Tipcha</span>
            <span class="mercha_tipcha_h">מֵרְכָ֥א טִפְחָ֖א</span>
        </ro>
      </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_audio)}
          >
            <span class="munach_e">Munach</span>
            <span class="munach_h">מֻנַּ֣ח</span>
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zakef_katon_audio)}
          >
        <span class="munach_zakef_katon_e">Munach Zakef Katon</span>
        <span class="munach_zakef_katon_h"> מֻנַּ֣ח זָקֵף קָטָ֔ן</span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(kadma_vazla_audio)}
          >
        <span class="kadma_vazla_e">Kadma V'azala</span>
        <span class="kadma_vazla_h"> קַדְמָ֨א וְאַזְלָא֜ </span>
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(tlisha_ktana_audio)}
          >
        <span class="tlisha_ktana_e">Telisha Ketana</span>
        <span class="tlisha_ktana_h"> תְּלִישָא קְטַנָּה֩ </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(tlisha_gdola_audio)}
          >
        <span class="tlisha_gdola_e">Telisha Gedola</span>
        <span class="tlisha_gdola_h">תְּ֠לִישָא גְדוֹלָה </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(kadma_audio)}
          >
        <span class="kadma_e"> Kadma</span>
        <span class="kadma_h"> קַדְמָ֨א </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(sof_pasuk_audio)}
          >
        <span class="sof_pasuk_e"> Sof Pasuk</span>
        <span class="sof_pasuk_h"> סוֹף פָּסֽוּק </span>
         
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            fontSize="large" 
            onClick={() => playSound(etnachta_audio)}
          >
           <span class="etnachta_h">  אֶתְנַחְתָּ֑א </span>
           <span class="etnachta_e">  Etnachta </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(zakef_gadol_audio)}
          >
           <span class="zakef_gadol_h">  זָקֵף גָּד֕וֹל </span>
           <span class="zakef_gadol_e">  Zakef Gadol </span>
            
            
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(revii_audio)}
          >
            <span class="reviyi_h">  רְבִ֗יע  </span>
           <span class="reviyi_e">  Reviyi </span>
        
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(gershayim_audio)}
          >
                 <span class="gershayim_h">  גֵּרְשַׁ֞יִם   </span>
           <span class="gershayim_e">  Gershayim </span>
         
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(mapach_pashta_audio)}
          >
         <span class="mapach_pashta_h">   מַהְפַּ֤ך פַּשְׁטָא֙    </span>
           <span class="mapach_pashta_e">  Mapach Pashta </span>
         
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(yetiv_audio)}
          >
            <span class="yetiv_h">  יְ֚תִיב   </span>
           <span class="yetiv_e">  Yetiv </span>
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zarka_segol_audio)}
          >
            <span class="munach_zarka_segol_h">  מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒    </span>
           <span class="munach_zarka_segol_e">  Munach Zarka Munach Segol </span>
               
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(darga_tvir_audio)}
          >
         <span class="darga_tvir_h">   דַּרְגָּ֧א תְּבִ֛יר   </span>
           <span class="darga_tvir_e">  Darga Tvir </span>
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(psik_audio)}
          >
            <span class="psik_h"> פָּסֵ֣ק׀   </span>
           <span class="psik_e">  Pasek </span>
           </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(pazer_audio)}
          >
            <span class="pazer_h"> פָּזֵ֡ר   </span>
           <span class="pazer_e">  Pazer </span>
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(sof_aliya_audio)}
          >
            Sof Aliyah
          </ro>
        </div>

        </Grid>

        <div>
            -- Work In Progress -- from EFFIE

        </div>
        <ro>
        קַדְמָ֨א מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒ מֻנַּ֣ח ׀ מֻנַּ֣ח רְבִ֗יע מַהְפַּ֤ך פַּשְׁטָא֙ זָקֵף־קָטָ֔ן זָקֵף־גָּד֕וֹל מֵרְכָ֥א טִפְּחָ֖א מֻנַּ֣ח אֶתְנַחְתָּ֑א פָּזֵ֡ר תְּלִישָא־קְטַנָּה֩ תְּ֠לִישָא גְדוֹלָה קַדְמָ֨א וְאַזְלָ֜א אַזְלָא־גֵּ֜רֵשׁ גֵּרְשַׁ֞יִם דַּרְגָּ֧א תְּבִ֛יר יְ֚תִיב פְּסִיק׀ מֵרְכָ֥א טִפְּחָ֖א מֵרְכָ֥א סוֹף פָּסֽוּק׃ שַׁלְשֶׁ֓לֶת מֵרְכָא כְּפוּלָ֦ה יֵרֶח בֶּן יוֹמ֪וֹ קַרְנֵי פָרָ֟ה׃
        </ro>

      </div>
    </ThemeProvider>
  );
}
