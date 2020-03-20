import React from 'react';
import './PopUpAlert.css';


const PopUpAlert = (props) => {

  if (props.message === null) return null
  let renderMsg;
  if (typeof props.message === 'object') {
    renderMsg = (
      <div className={`PUAAlert pua-${props.message.type}`}>
        <span className="PUAMessage">
          {props.message.text}
        </span>
      </div>
    );
  }

  return (
    <div className="PUAContainer">
      {renderMsg}
    </div>
  );
}

PopUpAlert.defaultProps = {
  type: 'success',
  message: null
}

export default PopUpAlert;
