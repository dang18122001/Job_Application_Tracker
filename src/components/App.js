import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddApplication from "./AddApplication";
import EditApplication from "./EditApplication";
import MainPage from "./MainPage";
import Navbar from "./NavBar";
import axios from 'axios';
import { connect } from "react-redux";
import { setApplications, tasksError } from "../actions";

class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/dang18122001/IS322_FinalProjectDB/applications')
      .then(response => {
        this.props.setApplications(response.data);
      }).catch(error => {
        this.props.tasksError();
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Your Job Applications:</h1>
        <ToastContainer />
        <Navbar />
        <Route exact path="/" component={() => <MainPage />} />
        <Route exact path="/add" component={() => <AddApplication />} />
        <Route exact path="/edit/:id" component={() => <EditApplication />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: 'Unable to connect!'
  };
}

export default connect(mapStateToProps, { setApplications, tasksError })(App);