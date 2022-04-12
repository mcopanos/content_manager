import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id, dispatch) => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }

  render() {
      const { id, name, email, phone } = this.props.contact;
      const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3">
              <h4>{name} 
              <i 
                onClick={() => this.setState({showContactInfo: !showContactInfo})}
                className="fas fa-sort-down ms-1"
                style={{ cursor: 'pointer' }}
              />
              <i 
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                className="fas fa-times"
                style={{cursor: 'pointer', float: 'right', color: '#F93154'}}
              />
              </h4>
              {
                showContactInfo &&
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>        
              } 
            </div>
          )
        }}
        
      </Consumer>
    );
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteClick: PropTypes.func,
}

export default Contact