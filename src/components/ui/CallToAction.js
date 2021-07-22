import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  Button,
  useMediaQuery,
} from '@material-ui/core';

import Background from '../../assets/background.jpg';
import MobileBackground from '../../assets/mobileBackground.jpg';

import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: '0.7rem',
    height: 35,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      margin: '2em',
    },
  },
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '60em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${MobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.Orange,
    fontWeight: '700',
    marginRight: '5em',
    marginLeft: '2em',
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default function CallToAction({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems='center'
      direction={matchesSM ? 'column' : 'row'}
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software
              <br />
              Revolutionary Results
            </Typography>
            <Typography style={{ fontSize: '1.75em' }} variant='subtitle2'>
              Take advantage of the 21st century.
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button
                component={Link}
                to='/revolution'
                variant='outlined'
                onClick={() => {
                  setValue(2);
                }}
                className={classes.learnButton}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.primary.light}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to='/estimate'
          onClick={() => {
            setValue(5);
          }}
          variant='contained'
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
