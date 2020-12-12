import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './layouts/Login';
import './vibe/scss/styles.scss';
import {connect} from 'react-redux';

class App extends React.Component 
{

  renderLogin()
  {
    if(!this.props.Mode.loginData.login)
    {
      return(
        <Route component={Login} />
      );
    }
    else
    {
      return(
        <Route component={DashboardLayout} />
      );
    }
  }

  render()
  {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {this.renderLogin()}
          </Switch>
        </BrowserRouter>
      </div>);
  }
}

const mapStateToProps = state =>
{
    console.log(state);
    const {Mode} = state;
    return ({Mode});
};

export default connect(mapStateToProps) (App);
