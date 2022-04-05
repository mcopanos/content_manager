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
              <h1 className='display-4 mb-2'>
                <span className='text-danger'>Contact</span> List
              </h1>
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
