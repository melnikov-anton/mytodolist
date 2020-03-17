import React, { Component } from 'react';
import './ListItem.css';
import { FaCheck, FaTrash, FaPen } from 'react-icons/fa';

export default class ListItem extends Component {

  render() {
    const date = new Date(this.props.data.created_at).toLocaleString();
    return(
      <div
        className={this.props.data.is_completed ? 'LIContainer completed':'LIContainer active'}
      >
        <div className="LIHeader">
          <span className="LIHead">{this.props.data.task}</span>
          <span className="LIInfo">
            <span className="LIDate"><p>{date}</p></span>
            <span className="LIControls">
              <span
                className="LIToggle"
                title="Toggle completed"
                onClick={() => {
                  if (typeof this.props.onToggle === 'function') {
                    this.props.onToggle(this.props.data.id, !this.props.data.is_completed);
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
                  if (typeof this.props.onEdit === 'function') {
                    const todoToEdit = {
                      id: this.props.data.id,
                      task: this.props.data.task,
                      description: this.props.data.description
                    }
                    this.props.onEdit(todoToEdit);
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
                  if (typeof this.props.onDelete === 'function') {
                    if (window.confirm(`Are you sure, you want to delete task: ${this.props.data.task}?`)) {
                      this.props.onDelete(this.props.data.id);
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
        {this.props.data.description === '' ? null :
        <div className="LIText">
          <p>{this.props.data.description}</p>
        </div>
        }


      </div>
    );
  }
}
