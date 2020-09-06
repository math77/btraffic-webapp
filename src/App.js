import React from 'react';


import { makeStyles } from '@material-ui/core/styles';

import BackgroundVideo from './components/BackgroundVideo';
import NavBar from './components/NavBar/NavBar.js';
import Typography from '@material-ui/core/Typography';

import Car from './assets/images/car.jpg';
import Car2 from './assets/images/car3.jpg';

const useStyles = makeStyles((theme) => ({
  container1: {
    padding: 130,
    marginTop: theme.spacing(2),
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
  txt: {
    color: '#FFFFFF',
  },
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
    </div>
  );
}

export default App;
