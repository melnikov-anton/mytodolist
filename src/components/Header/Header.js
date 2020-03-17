import React, { Fragment } from 'react';
import { FaTasks, FaRegUserCircle } from 'react-icons/fa';
import './Header.css';
import PropTypes from 'prop-types';


const Header = (props) => {

  return(
    <header className="HContainer">

      <div className="HLogo">
        <span className="HIcon"><FaTasks size={26}/></span>
        <span className="HTitle">My ToDo List</span>
      </div>

      <div className="HNav">
        { props.user ?
          <button className="HBtn"
          onClick={() => {
            props.logout()
          }}>Logout</button>
          :
          <Fragment>
            <button className="HBtn"
              onClick={()=> {
                props.showLoginForm();
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
          title={props.user ? props.user.email : null}
        >
          {props.user ? 'AuthUser' : 'Anonymous'}
        </span>
      </div>

    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  showLoginForm: PropTypes.func
};

export default Header;
