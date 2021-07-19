import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';

import roots from '../assets/root.svg';
import {
  Grid,
  Hidden,
  Typography,
  makeStyles,
  useTheme,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';

import BackArrow from '../assets/backArrow.svg';
import ForwardArrow from '../assets/forwardArrow.svg';

import lightBulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    width: '40em',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingRight: '5em',
    paddingLeft: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  itemContainer: {
    maxWidth: '40em',
  },
}));

export default function CustomSoftware({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/services'
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <img src={BackArrow} alt='Go back to Services Page' />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              {' '}
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/mobileapps'
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <img
                src={ForwardArrow}
                alt='Forward to iOS/Android App Development Page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '20em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'> Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt='light bulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'> Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'> Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-around'
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          //justify={matchesSM ? 'center' : undefined} can work instead of direction='column
          direction={matchesSM ? 'column' : 'row'}
          md
          style={{
            marginBottom: matchesMD ? '15em' : 0,
          }}
        >
          <Grid
            item
            md
            container
            direction='column'
            style={{ textAlign: matchesSM ? 'center' : 'left' }}
          >
            <Grid item>
              <Typography variant='h4'>Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant='body1' paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant='body1' paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '3em' : 0 }}>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          // justify={matchesSM ? 'center' : undefined}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item md style={{ marginBottom: matchesSM ? '3em' : 0 }}>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 270, maxWidth: 310 }}
            />
          </Grid>
          <Grid
            item
            md
            container
            direction='column'
            style={{ textAlign: matchesSM ? 'center' : 'right' }}
          >
            <Grid item>
              <Typography variant='h4'>Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        direction='row'
        style={{ marginTop: '20em', marginBottom: '20em' }}
      >
        <Grid item container alignItems='center' direction='column'>
          <Grid item>
            <img
              src={roots}
              alt='tree with roots'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid
            item
            className={classes.itemContainer}
            style={{ textAlign: 'center' }}
          >
            <Typography variant='h4' gutterBottom>
              {' '}
              Root-cause Analysis
            </Typography>
            <Typography variant='body1' paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-around'
        style={{
          marginBottom: '10em',
        }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
          // justify={matchesSM ? 'center' : undefined}
          style={{
            marginBottom: matchesMD ? '15em' : 0,
            textAlign: matchesSM ? 'center' : 'inherit',
          }}
        >
          <Grid item md container direction='column'>
            <Grid item>
              <Typography variant='h4'>Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant='body1' paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated
              </Typography>
              <Typography variant='body1' paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '3em' : 0 }}>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
          // justify={matchesSM ? 'center' : undefined}
        >
          <Grid item md style={{ marginBottom: matchesSM ? '3em' : 0 }}>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid
            item
            md
            container
            direction='column'
            style={{ textAlign: matchesSM ? 'center' : 'right' }}
          >
            <Grid item>
              <Typography variant='h4'>User Experience Design</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography variant='body1' paragraph>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography variant='body1' paragraph>
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
