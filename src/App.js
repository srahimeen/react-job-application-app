import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ApplyForm from "./components/ApplyForm"
import ApplyHeader from "./components/ApplyHeader"
import JobInfo from "./components/JobInfo"



class App extends Component {
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

  render() {
    return (
      <div>
        <div className="container">
          <div className="row top-buffer">
            <ApplyHeader 
              currentPage={this.state.currentPage}
              roleName={this.state.roleName}
              roleDescription={this.state.roleDescription}
              roleLocation={this.state.roleLocation}
              applyClickHandler={this.applyClickHandler}
            />
          </div>
            <div className="row top-buffer">
              {this.state.currentPage==="form" && <ApplyForm />}
              {this.state.currentPage==="text" && <JobInfo />}
            </div>
          </div>
      </div>
    );
  }

}

export default App;
