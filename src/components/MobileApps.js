import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  makeStyles,
  Hidden,
  useTheme,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';

import BackArrow from '../assets/backArrow.svg';
import ForwardArrow from '../assets/forwardArrow.svg';
import Swiss from '../assets/swissKnife.svg';
import Access from '../assets/extendAccess.svg';
import Engagement from '../assets/increaseEngagement.svg';

import IntegrationAnimation from '../animations/integrationAnimation/data.json';
import CallToAction from '../components/ui/CallToAction';

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
export default function MobileApps({ setSelectedIndex,setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: IntegrationAnimation,
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
              to='/customsoftware'
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <img src={BackArrow} alt='Go back to Custom Software Page' />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>iOS/Android App Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              {' '}
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant='body1' paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>

            <Typography variant='body1' paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/websites'
              onClick={() => {
                setSelectedIndex(3);
              }}
            >
              <img
                src={ForwardArrow}
                alt='Forward to Website Development Page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '15em', marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction='column'
          md
          style={{ textAlign: matchesSM ? 'center' : 'inherit' }}
        >
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: '20em',
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          style={{ textAlign: matchesSM ? 'center' : 'right' }}
        >
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ textAlign: 'center', marginBottom: '15em' }}
      >
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Extended Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={Swiss} alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
          md
        >
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Extended Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={Access}
              alt='tear-one=off sign'
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={Engagement} alt='app icon with notification' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
