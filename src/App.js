import React, { useEffect, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div className={classes.appWrapper}>
      {/* Main Content */}
      <div className={classes.content}>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </div>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="body2" align="center">
          Made with ❤️ by <strong>Harsh Mishra</strong>
        </Typography>
      </footer>
    </div>
  );
};

export default App;
