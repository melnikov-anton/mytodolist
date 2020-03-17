import React from 'react';
import './ListItem.css';
import { FaCheck, FaTrash, FaPen } from 'react-icons/fa';
import PropTypes from 'prop-types';


const ListItem = (props) => {

  const date = new Date(props.data.created_at).toLocaleString();
  return(
    <div
      className={props.data.is_completed ? 'LIContainer completed':'LIContainer active'}
    >
      <div className="LIHeader">
        <span className="LIHead">{props.data.task}</span>
        <span className="LIInfo">
          <span className="LIDate"><p>{date}</p></span>
          <span className="LIControls">
            <span
              className="LIToggle"
              title="Toggle completed"
              onClick={() => {
                if (typeof props.onToggle === 'function') {
                  props.onToggle(this.props.data.id, !props.data.is_completed);
                } else {
                  alert('Action is not provided!');
                }
              }}
            >
              <FaCheck size={22} />
            </span>
            <span
              className="LIEdit"
              title="Edit"
              onClick={() => {
                if (typeof props.onEdit === 'function') {
                  const todoToEdit = {
                    id: props.data.id,
                    task: props.data.task,
                    description: props.data.description
                  }
                  props.onEdit(todoToEdit);
                } else {
                  alert('Action is not provided!');
                }
              }}
            >
              <FaPen size={22} />
            </span>
            <span
              className="LIDelete"
              title="Delete"
              onClick={() => {
                if (typeof props.onDelete === 'function') {
                  if (window.confirm(`Are you sure, you want to delete task: ${props.data.task}?`)) {
                    props.onDelete(props.data.id);
                  }
                } else {
                  alert('Action is not provided!');
                }
              }}
            >
              <FaTrash size={22} />
            </span>
          </span>
        </span>
      </div>
      {props.data.description === '' ? null :
      <div className="LIText">
        <p>{props.data.description}</p>
      </div>
      }
    </div>
  );
}

ListItem.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.number.isRequired,
    is_completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default ListItem;
