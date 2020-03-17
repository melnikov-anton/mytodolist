import TodoList from '../TodoList/TodoList';
import { connect } from 'react-redux';
import {
  toggleTodo,
  editTodo,
  deleteTodo
} from '../../redux/actions/todoActions';


const mapStateToProps = (state) => {
  return {
    data: state.todoReducers.todos,
    filtered: state.todoReducers.filterByStatus,
    sorted: state.todoReducers.sortByDate,
    search: state.todoReducers.searchTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (docId, newState) => dispatch(toggleTodo(docId, newState)),
    edit: (todoData) => dispatch(editTodo(todoData)),
    delete: (docId) => dispatch(deleteTodo(docId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
