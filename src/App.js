import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Form from "./components/Form"
import Apply from "./components/Apply"
import DisplayText from "./components/DisplayText"

class App extends Component {
  //state.page can be apply or form
  state = {
    companyName: "MyTechCompany",
    roleName: "Software Engineer",
    roleDescription: "Research & Development",
    roleLocation: "Denver, Colorado",
    currentPage: "text",
    error: undefined
  }

  applyClickHandler = async (e) => {
    e.preventDefault();
    try {
      if(this.state.currentPage==="text"){
        this.setState({
          currentPage: "form"
        });
      } else if (this.state.currentPage==="form"){
        this.setState({
          currentPage: "text"
        });
      }
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }

  render() {
    return (
      <div>
        <Grid container>
        <Grid item md={6}>
          <Apply 
            currentPage={this.state.currentPage}
            roleName={this.state.roleName}
            roleDescription={this.state.roleDescription}
            roleLocation={this.state.roleLocation}
            applyClickHandler={this.applyClickHandler}
          />
        </Grid>
          <Grid item md={12}>
            {this.state.currentPage==="form" && <Form />}
            {this.state.currentPage==="text" && <DisplayText />}
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default App;
