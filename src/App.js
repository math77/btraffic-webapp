import React from 'react';


import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Parallax } from 'react-parallax';


import BackgroundVideo from './components/BackgroundVideo';
import NavBar from './components/NavBar/NavBar.js';
import StickyFooter from './components/StickyFooter/StickyFooter.js';

import Car from './assets/images/car.jpg';
import Car2 from './assets/images/car3.jpg';

import Navigation from './assets/images/navigation.svg';
import UploadVideo from './assets/images/uploadvideo.svg';
import Money from './assets/images/money.svg';
import Cam from './assets/images/cam.svg';


const useStyles = makeStyles((theme) => ({
  container1: {
    padding: 130,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    backgroundImage: `url(${Car})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  },
  container3: {
    backgroundImage: `url(${Car2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  },
  container4: {
    padding: 90,
    backgroundColor: '#FFFFFF',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& div': {
        display: 'block',
        '& p': {
          color: '#000000',
        }
      }
    }
  },
  container5: {
    padding: 90,
    backgroundColor: '#FBFEF9',
  },
  btns: {
    marginTop: theme.spacing(4),
    '& button': {
      marginRight: theme.spacing(4),
    }
  },
  txt: {
    color: '#FFFFFF',
  },
  title: {
    color: '#000000',
  },
  img: {
    width: '30vh',
    marginRight: theme.spacing(6),
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <BackgroundVideo />
      <div className={classes.container1}>
        <Typography variant="h2">
          Ajudando a construir o futuro do transporte autônomo.
        </Typography>
        <Typography variant="body1">
          Nós estamos ajudando a melhorar todo o transporte global por meio de dados de trânsito
          oferecidos as empresas que possuem algum desenvolvimento em transporte autônomo ao redor
          do globo.
        </Typography>
      </div>
      <div>
      <Parallax bgImage={Car} strength={500}>
        <div style={{ height: 500 }}>
          <Typography variant="h2">
            Ajudando a construir o futuro do transporte autônomo.
          </Typography>
        </div>
      </Parallax>
      </div>
      <div>
      <Parallax bgImage={Car2} strength={500}>
        <div style={{ height: 500 }}>
          <Typography variant="h2">
            Ajudando a construir o futuro do transporte autônomo.
          </Typography>
        </div>
      </Parallax>
      </div>
      <div className={classes.container4}>
        <Typography variant="h2" className={classes.title}>
          Como funciona
        </Typography>
        <div>
          <div>
            <img src={Navigation} alt="Navegação" className={classes.img} />
            <Typography variant="body1">
              Algum texto que deve ser pensando algo kdkdkdkdkkdd
            </Typography>
          </div>
          <div>
            <img src={Cam} alt="Câmera" className={classes.img} />
            <Typography variant="body1">
              Algum texto que deve ser pensando algo kdkdkdkdkkdd
            </Typography>
          </div>
          <div>
            <img src={UploadVideo} alt="Upload video" className={classes.img} />
            <Typography variant="body1">
              Algum texto que deve ser pensando algo kdkdkdkdkkdd
            </Typography>
          </div>
          <div>
            <img src={Money} alt="Dinheiro" className={classes.img} />
            <Typography variant="body1">
              Algum texto que deve ser pensando algo kdkdkdkdkkdd
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.container5}>
        <Typography variant="h2" className={classes.title}>
          Registre-se e faça parte da revolução do trânsito.
        </Typography>
        <div className={classes.btns}>
          <Button variant="outlined">Para usuários</Button>
          <Button variant="outlined">Para empresas</Button>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
