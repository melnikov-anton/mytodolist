import React, { Component } from 'react';
import ListItem from './ListItem';
import './TodoList.css';


export default class TodoList extends Component {

  static defaultProps = {
    sorted: 'desc',
    filtered: 'all',
    search: ''
  }

  render() {
    let filteredTodos = this.props.data;
    if (this.props.sorted) {
      filteredTodos.sort((a, b) => {
        if (this.props.sorted === 'asc') return a.created_at - b.created_at;
        if (this.props.sorted === 'desc') return b.created_at - a.created_at;
        return null;
      });
    }
    if (this.props.filtered && this.props.filtered !== 'all') {
      filteredTodos = filteredTodos.filter((todo) => {
        if (this.props.filtered === 'completed' && todo.is_completed) return true;
        if (this.props.filtered === 'active' && !todo.is_completed) return true;
        return false;
      })
    }
    if (this.props.search && this.props.search !== '') {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.task.toLowerCase().search(this.props.search.toLowerCase()) !== -1
            || todo.description.toLowerCase().search(this.props.search.toLowerCase()) !== -1;
      });
    }
    const listItems = filteredTodos.map((item) =>
          <ListItem
            key={item.id}
            data={item}
            onToggle={this.props.toggle}
            onEdit={this.props.edit}
            onDelete={this.props.delete}
          />
    );

    return(
      <div className="TDLContainer">
        <span className="TDLHeader">
          <span className="TDLTitle">
            Todo List
          </span>
          <span className="TDLLegend">
              <span className="square active"></span>
              <span className="descText"> - active</span>
              <span className="square completed"></span>
              <span className="descText"> - completed</span>
          </span>

        </span>

          {listItems}
      </div>
    );
  }
}
