import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Register from './Register';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import Member from './Member';
import Lapangan from './Lapangan';
import Transaksi from './Transaksi';
import { getUser } from './Utils/Common';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: null,
      isAdmin: null,
    }
  }

  render() {
    const dataUser = getUser();
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
              <h5 className="my-0 mr-md-auto font-weight-normal">SM Futsal</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <NavLink exact activeclassname="" className="p-2 text-dark" to="/">Home</NavLink>
                <NavLink activeclassname="" className="p-2 text-dark" to="/dashboard">Profil</NavLink>
                <NavLink activeClassName="" className="p-2 text-dark" to="/member">Member</NavLink>
                <NavLink activeClassName="" className="p-2 text-dark" to="/lapangan">Lapangan</NavLink>
                <NavLink activeClassName="" className="p-2 text-dark" to="/transaksi">Transaksi</NavLink>
              </nav>
              <NavLink activeclassname="" className="btn btn-outline-primary" to="/login">Masuk</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/register" component={Register} />
                { dataUser !== null && dataUser.role === "admin" && <>
                  <PrivateRoute path="/dashboard" component={ Dashboard }/>
                  <PrivateRoute path="/member" component={ Member } />
                  <PrivateRoute path="/lapangan" component={ Lapangan } />
                  <PrivateRoute path="/transaksi" component={ Transaksi } />
                </>
                }
              </Switch>
            </div>

          </div>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
