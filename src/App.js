import React, { Component } from 'react';
// import Contacts from './componets/Contacts';
import ContactsFun from './componets/ContactsFun';
import Header from './componets/Header';

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
            <ContactsFun />
            {/* <Contacts /> */}
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
 