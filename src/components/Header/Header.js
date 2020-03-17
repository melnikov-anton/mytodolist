import React, { Component, Fragment } from 'react';
import { FaTasks, FaRegUserCircle } from 'react-icons/fa';
import './Header.css';


export default class Header extends Component {


  render() {
    return(
      <header className="HContainer">

        <div className="HLogo">
          <span className="HIcon"><FaTasks size={26}/></span>
          <span className="HTitle">My ToDo List</span>
        </div>

        <div className="HNav">
          {this.props.user ?
            <button className="HBtn"
            onClick={() => {
              this.props.logout()
            }}>Logout</button>
            :
            <Fragment>
              <button className="HBtn"
                onClick={()=> {
                  this.props.showLoginForm();
                }}
              >Login</button>
              <button className="HBtn"
                onClick={() => {
                  alert('This feature is under construction');
                }}
              >Register</button>
            </Fragment>
          }


        </div>

        <div className="HUserSection">
          <span className="HUserIcon"><FaRegUserCircle size={20} /></span>
          <span className="HUser">User:</span>
          <span
            className="HUserName"
            title={this.props.user ? this.props.user.email : null}
          >
            {this.props.user ? 'AuthUser' : 'Anonymous'}
          </span>
        </div>

      </header>
    );
  }
}
