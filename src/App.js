import React from 'react';


import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import BackgroundVideo from './components/BackgroundVideo';
import NavBar from './components/NavBar/NavBar.js';
import StickyFooter from './components/StickyFooter/StickyFooter.js';

import Car from './assets/images/car.jpg';
import Car2 from './assets/images/car3.jpg';

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
      <div className={classes.container2}>
        <Typography variant="h2" className={classes.txt}>
          Ajudando a construir o futuro do transporte autônomo.
        </Typography>
        <Typography variant="body1">
          Nós estamos ajudando a melhorar todo o transporte global por meio de dados de trânsito
          oferecidos as empresas que possuem algum desenvolvimento em transporte autônomo ao redor
          do globo.
        </Typography>
      </div>
      <div className={classes.container3}>
        <Typography variant="h2" className={classes.txt}>
          Ajudando a construir o futuro do transporte autônomo.
        </Typography>
        <Typography variant="body1">
          Nós estamos ajudando a melhorar todo o transporte global por meio de dados de trânsito
          oferecidos as empresas que possuem algum desenvolvimento em transporte autônomo ao redor
          do globo.
        </Typography>
      </div>
      <div className={classes.container4}>
        <Typography variant="h2" className={classes.title}>
          Ajudando a construir o futuro do transporte autônomo.
        </Typography>
        <Typography variant="body1">
          Nós estamos ajudando a melhorar todo o transporte global por meio de dados de trânsito
          oferecidos as empresas que possuem algum desenvolvimento em transporte autônomo ao redor
          do globo.
        </Typography>
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
