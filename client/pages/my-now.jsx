import React from 'react';
// import NowwwEntry from '../components/nowww-entry';
// import { createPopper } from '@popperjs/core';

export default class MyNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit() {
  //   event.preventDefault();
  //   console.log('bang')
  // }
  componentDidMount() {
    // console.log('user prop:', this.props.user)
    const user = this.props.user;
    fetch(`/api/my-now/${user}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));
    // console.log('fetch response, user:', user)
    // console.log('this.state.user:', this.state)
  }

  render() {
    if (!this.state.user) return null;
    const {
      username, profilePicture, tagline, whatContent, whyContent, link, location
    } = this.state.user;
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="container">
        <div className="row jc-center flex card shadow-sm p-3">
          <div className="col-12 col-md-12 col-lg-12 row ">
            <div className="col-12 col-md-6">
                <div className='position-relative'>
                  <img src={profilePicture} className="card-img-top" />
                  <div className="position-absolute bottom-0">
                    <div className="row"></div>
                    {/* <div className="w-fit-content">
                      <div class="dropup">
                        <button class="btn btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Update Photo
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><input type="text" />INPUT</li>
                        </ul>
                      </div>
                    </div> */}
                </div>

            </div>

            </div>
            <div className="col-12 col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2 className="card-title">{username}</h2>
                </li>
                <li className="list-group-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                  {/* <input type="text" /> */}
                  <span><a href="#" className="card-link">{link}</a></span>
                  {/* <span><a href="#" className="card-link">link goes hurr</a></span> */}
                </li>
                <li className="list-group-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>{location}</span>
                  {/* <input type="text" /> */}
                </li>
                <li className="list-group-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                    <span>{tagline}</span>
                    {/* <input type="text" /> */}
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h3>What do you do?</h3>
                  <p>{whatContent}</p>
                </li>
                <li className="list-group-item">
                  <h3>Why?</h3>
                  <p>{whyContent}</p>
                </li>
              </ul>
              {/* <NowwwEntry /> */}
            </div>
          </div>
          {/* <div className="row jc-center">
              <button type="submit" className="btn btn-primary sign-up-btn w-fit-content">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </span>
              Add Nowww
            </button>
          </div> */}
        </div>
      </div>
      </form>
    );
  }
}