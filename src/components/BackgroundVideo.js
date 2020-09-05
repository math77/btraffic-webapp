import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './BackgroundVideo.css';

import video from '../assets/videos/video2.mp4';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: 90,
  },
}));

function BackgroundVideo() {
  const classes = useStyles();

  return (
    <div className="Container">
      <video autoPlay={true} loop={true} className="Video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="Content">
        <div className="SubContent" >
          <Typography variant="h2" className={classes.title}>
            Algum texto que eu ainda preciso pensar sobre ele.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
