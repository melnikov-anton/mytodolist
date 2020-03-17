import React from 'react';
import ListItem from './ListItem';
import './TodoList.css';
import PropTypes from 'prop-types';


const TodoList = (props) => {

  let filteredTodos = props.data;
  if (props.sorted) {
    filteredTodos.sort((a, b) => {
      if (props.sorted === 'asc') return a.created_at - b.created_at;
      if (props.sorted === 'desc') return b.created_at - a.created_at;
      return null;
    });
  }
  if (props.filtered && props.filtered !== 'all') {
    filteredTodos = filteredTodos.filter((todo) => {
      if (props.filtered === 'completed' && todo.is_completed) return true;
      if (props.filtered === 'active' && !todo.is_completed) return true;
      return false;
    })
  }
  if (props.search && props.search !== '') {
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.task.toLowerCase().search(props.search.toLowerCase()) !== -1
          || todo.description.toLowerCase().search(props.search.toLowerCase()) !== -1;
    });
  }
  const listItems = filteredTodos.map((item) =>
        <ListItem
          key={item.id}
          data={item}
          onToggle={props.toggle}
          onEdit={props.edit}
          onDelete={props.delete}
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

TodoList.defaultProps = {
  sorted: 'desc',
  filtered: 'all',
  search: '',
  toggle: () => {console.warn('Toggle action is not provided')},
  edit: () => {console.warn('Edit action is not provided')},
  delete: () => {console.warn('Delete action is not provided')},
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtered: PropTypes.oneOf(['all', 'completed', 'active']),
  sorted: PropTypes.oneOf(['desc', 'asc']),
  search: PropTypes.string,
  toggle: PropTypes.func,
  edit: PropTypes.func,
  delete: PropTypes.func,
};

export default TodoList;
