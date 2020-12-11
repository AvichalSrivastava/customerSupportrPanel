import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './layouts/Login';
import './vibe/scss/styles.scss';

class App extends React.Component 
{
  renderLogin()
  {
    if(true)
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
export default App;
