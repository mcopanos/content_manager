import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const {name, email, phone} = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..." 
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..." 
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Phone">Phone</label>
              <input 
                type="Phone"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..." 
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input 
              type="submit" 
              value="Add Contact"
              className="btn btn-lg btn-block btn-light form-control form-contol-lg my-3" 
            />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;