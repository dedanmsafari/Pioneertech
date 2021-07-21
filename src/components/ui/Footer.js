import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Hidden, makeStyles } from '@material-ui/core';

import LocalizeFooter from '../../assets/Footerlocal.png';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.DarkGreen,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  footerImage: {
    width: '25rem',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    fontFamily: 'Cabin',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  gridItem: {
    margin: '2rem',
  },
  Icons: {
    height: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      height: '1.5rem',
    },
  },
  socialcontainer: {
    position: 'absolute',
    marginTop: '-4rem',
    right: '1rem',
    [theme.breakpoints.down('xs')]: {
      right: '0.6rem',
    },
  },
}));
export default function Footer({
  setValue,
  setSelectedIndex,
}) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/'
                onClick={() => setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Develpment
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(4)}
                to='/contact'
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='Localize Footer'
        src={LocalizeFooter}
        className={classes.footerImage}
      />
      <Grid
        container
        justify='flex-end'
        className={classes.socialcontainer}
        spacing={2}
      >
        <Grid
          item
          component={'a'}
          href='https://www.facebook.com'
          rel='noopener noreferrer '
          target='_blank'
        >
          <img alt='Facebook Icon' src={Facebook} className={classes.Icons} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.twitter.com'
          rel=' noopener noreferrer '
          target='_blank'
        >
          <img alt='Twitter Icon' src={Twitter} className={classes.Icons} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.instagram.com'
          rel='noopener noreferrer '
          target='_blank'
        >
          <img alt='Instagram Icon' src={Instagram} className={classes.Icons} />
        </Grid>
      </Grid>
    </footer>
  );
}
