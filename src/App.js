import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componets/layout/Header';
import ContactsFun from './componets/contacts/ContactsFun';
import About from './componets/pages/About';
import AddContact from './componets/contacts/AddContact';

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
            <Routes>
              <Route exact path='/'element={<ContactsFun />} />
              <Route exact path='/about'element={<About />} />
              <Route exact path='/add-contact'element={<AddContact />} />
            </Routes>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
 