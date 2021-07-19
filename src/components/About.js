import React from 'react';
import {
  Grid,
  Hidden,
  IconButton,
  useMediaQuery,
  makeStyles,
  useTheme,
  Typography,
  Avatar,
} from '@material-ui/core';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: '25em',
    width: '25em',
  },
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingRight: '5em',
    paddingLeft: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant='h2'>About Us</Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justify='center'>
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify='space-around'
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            style={{ maxWidth: '35em' }}
            lg
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontStyle: 'italic', fontWeight: 700 }}
              >
                We're the new kid on the block.
              </Typography>
              <Typography variant='body1' paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant='body1' paragraph>
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant='body1' paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant='body1' paragraph>
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' lg>
            <img
              src={history}
              alt='quill pen sitting on top of book'
              style={{ maxHeight: '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='column'
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant='h4' align='center' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' align='center'>
            Dedan Msafari, Founder
          </Typography>
          <Typography variant='body1' align='center'>
            It always starts with a dream,then a vision.Pioneering technology
            has never been an easy task.But together we can achieve great things
            and reach the Horizons
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt='founder' src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction='column'>
            <Grid item>
              <img src={yearbook} alt='yearbook page about founder' />
            </Grid>

            <Grid item>
              <Typography variant='caption'>
                A page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
