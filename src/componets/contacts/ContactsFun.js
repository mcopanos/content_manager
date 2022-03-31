import React from 'react'
import Contact from './Contact';
import { Consumer } from '../../context';
// import { render } from '@testing-library/react';

export default function ContactsFun() {
 
  return (
    <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              {
                contacts.map(contact => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                  />
                ))
              }
            </>
          ) 
        }}
      </Consumer>
  )
  
}
