import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Form from "./components/Form"

class App extends Component {

  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={12}>

              <Form />

          </Grid>
        </Grid>
      </div>
    );
  }

}

export default App;
