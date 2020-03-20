import React from 'react';
import './PopUpAlert.css';


const PopUpAlert = (props) => {
  let messages = props.message;
  if (!messages) return null
  let renderMsg;
  if (typeof messages === 'object' && Array.isArray(messages)) {
    // empty
  } else if (typeof messages === 'string') messages = [messages];

  renderMsg = messages.map((message, index) => (
    <div key={index} className={`PUAAlert pua-${props.type}`}>
      <span className="PUAMessage">
        {message}
      </span>
    </div>
  ));

  return (
    <div className="PUAContainer">
      {renderMsg}
    </div>
  );
}

PopUpAlert.defaultProps = {
  showTime: 8,
  type: 'success',
  message: ['Message 1']
}

export default PopUpAlert;
