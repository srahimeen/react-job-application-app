import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import Application from "./components/Application"
import Apply from "./components/Apply"
import DisplayText from "./components/DisplayText"

//set style
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


class App extends Component {
  //state.page can be apply or form
  state = {
    test: undefined, //TODO: remove
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
      console.log('Apply clicked!'); //TODO: remove
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

  submitClickHandler = async (e) => {
    e.preventDefault();
    //get values from form
    const firstName = e.target.elements.firstName.value; //TODO: write to api
    try {
      console.log('Submit clicked!' + firstName); //TODO: remove
      this.setState({
        test: firstName
      });
      alert(this.state.test); //TODO: remove
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row top-buffer">
            <Apply 
              currentPage={this.state.currentPage}
              roleName={this.state.roleName}
              roleDescription={this.state.roleDescription}
              roleLocation={this.state.roleLocation}
              applyClickHandler={this.applyClickHandler}
            />
          </div>
            <div className="row top-buffer">
              {this.state.currentPage==="form" && <Application submitClickHandler={this.submitClickHandler} />}
              {this.state.currentPage==="text" && <DisplayText />}
            </div>
          </div>
      </div>
    );
  }

}

export default App;
