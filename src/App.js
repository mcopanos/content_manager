import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './componets/layout/Header';
import ContactsFun from './componets/contacts/ContactsFun';
import About from './componets/pages/About';
import AddContact from './componets/contacts/AddContact';
import EditContact from './componets/contacts/EditContact';
import NotFound from './componets/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() { 
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manger"/>
          <div className="container">
            <Switch>
              <Route exact path='/'component={ContactsFun} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path='/contact/edit/:id' component={EditContact} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
 