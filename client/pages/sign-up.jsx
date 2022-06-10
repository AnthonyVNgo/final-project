import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };

    event.preventDefault();
    fetch('/api/auth/sign-up', init)
      .then(res => {
        res.json();
      })
      .then(users => {
        this.setState({ username: '', password: '' });
      });
  }

  render() {
    return (
      <div className='row jc-center ai-center vh100 m-0'>
        <form className='col-8 col-sm-7 col-m-6 col-lg-5 col-xl-4 col-xxl-3' onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <h1 className='logo'>Nowww</h1>
            <label htmlFor='username' className='form-label'></label>
            <input type="text" className="form-control" id='username' placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/>
            <label htmlFor="" className="form-label"></label>
            <input type="password" className="form-control" id="" placeholder="Password" value={this.state.pw} onChange={this.handlePasswordChange}/>
          </div>
          <button type="submit" className="btn btn-primary sign-up-btn">Register</button>
          <div className='row jc-center'>
            <p className='text-align-center my-2'>Already on Nowww?</p>
            <a href="#login" className='text-deco-none text-align-center'>login</a>
          </div>
        </form>
      </div>
    );
  }
}