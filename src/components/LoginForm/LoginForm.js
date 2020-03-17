import React, { Component } from 'react';
import './LoginForm.css';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {

  state = {
    message: this.props.message,
    email: '',
    password: '',
  };


  static defaultProps = {
    message: 'Please enter your credentials.',
  }


  handleClickOnLogin = (e) => {
    e.preventDefault();
    const email=this.state.email;
    const password=this.state.password;

    if (email==='' || password==='') {
      this.props.showLFErrorMessage('Enter all credentials!');
    } else {
      this.setState({
        password: ''
    }, () => {
          this.props.login(email, password);
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.showLFErrorMessage(null);
  }


  render() {
    if (!this.props.display) {
      return null;
    }

    return(
      <div className="LFContainer">
        <div className="loginForm">
          <span
            className="closeBtn"
            onClick={this.props.hideLoginForm}
            >
              &times;
          </span>

          <form>
            <h4 className="loginFormHeader">{this.state.message}</h4>
            {this.props.errorMsg ?
              <h5 className="errorMessage">{this.props.errorMsg}</h5>
              : null
            }
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              value={this.state.login}
              onChange={this.handleInputChange}
              required
              >
            </input>

            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              value={this.state.password}
              onChange={this.handleInputChange}
              required
              >
            </input>

            <button
              className="loginBtn"
              type="submit"
              onClick={this.handleClickOnLogin}
              >
              Login
            </button>
          </form>

        </div>
      </div>
    );
  }
};

LoginForm.propTypes = {
  display: PropTypes.bool,
  errorMsg: PropTypes.string,
  login: PropTypes.func.isRequired,
  hideLoginForm: PropTypes.func.isRequired,
  showLFErrorMessage: PropTypes.func.isRequired
};
