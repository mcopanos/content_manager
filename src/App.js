import React, { Component } from 'react';
import Header from './componets/layout/Header';
import ContactsFun from './componets/contacts/ContactsFun';
import AddContact from './componets/contacts/AddContact';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() { 
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manger"/>
          <div className="container">
            <AddContact />
            <ContactsFun />
            {/* <Contacts /> */}
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
 