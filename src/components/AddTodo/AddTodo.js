import React, { Component } from 'react';
import './AddTodo.css';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';


export default class AddTodo extends Component {

  state = {
    task: '',
    description: '',
    opened: this.props.opened
  }

  static defaultProps = {
    headerTitle: 'Add ToDo',
    buttonTitle: 'Add ToDo',
    errorMessage: null,
    opened: false
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.showErrorMessage(null);
  }

  toggleForm = () => {
    this.setState({
      opened: !this.state.opened
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const task = this.state.task;
    const description = this.state.description;
    if (task === '') {
      this.props.showErrorMessage('Task is required!');
      return
    }
    if (this.props.todoToEdit) {
      this.props.updateTodo({
        task,
        description,
        id: this.props.todoToEdit.id
      });
    } else {
      this.props.addTodo({task, description}, this.props.user.uid);
    }

    setTimeout(() => {
      if (!this.props.errorMessage) {
        this.setState({
          task: '',
          description: '',
          opened: false
        });
      }
    }, 1000);
  }

  onClear = (e) => {
    e.preventDefault();
    this.props.clearTodoToEdit();
    this.setState({
      task: '',
      description: ''
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.todoToEdit) {
      if (state.task === '') {
        return {
          ...state,
          opened: props.opened,
          task: props.todoToEdit.task,
          description: props.todoToEdit.description
        };
      }

    }
    return state;
  }

  render(){
    return(
      <div className="ATDContainer">
        <span className="ATDHeader">
          <span className="ATDFormHeader">{this.props.headerTitle}</span>
          <span
            className="ATDIcon"
            title={this.state.opened ? 'Hide form' : 'Show form'}
            onClick={this.toggleForm}
          >
            {this.state.opened ? <FaCaretUp size={22}/> : <FaCaretDown size={22}/>}
          </span>
        </span>
        { this.state.opened ?
          <form>
            {
              this.props.errorMessage ?
              <h4 className="ATDError">{this.props.errorMessage}</h4>
              :
              null
            }
            <input
              type="text"
              name="task"
              placeholder="Enter task..."
              onChange={this.handleInputChange}
              value={this.state.task}
            />

            <textarea
              type="text"
              name="description"
              placeholder="Enter description..."
              onChange={this.handleInputChange}
              value={this.state.description}
            >
            </textarea>
            <span className="buttonBlock">
              <button
                className="addBtn"
                type="submit"
                onClick={this.onSubmit}
              >
                {this.props.buttonTitle}
              </button>
              <button
                className="clearBtn"
                onClick={this.onClear}
              >
                Clear
              </button>
            </span>
          </form>
          : null
        }
      </div>
    );
  }
}
