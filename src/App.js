import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Form from "./components/Form"

class App extends Component {
  //state.page can be apply or form
  state = {
    page: "form"
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={12}>
              {this.state.page==="form" && <Form />}
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default App;
