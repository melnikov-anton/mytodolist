import AddTodo from '../AddTodo/AddTodo';
import { addTodo, updateTodo, clearTodoToEdit } from '../../redux/actions/todoActions';
import { showAddErrMsg } from '../../redux/actions/appActions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  let additionalProps;
  if (state.todoReducers.todoToEdit) {
    additionalProps = {
      headerTitle: 'Edit ToDo',
      buttonTitle: 'Update ToDo',
      opened: true
    }
  } else additionalProps = null;

  return {
    user: state.userReducers.user,
    errorMessage: state.appReducers.addErrMsg,
    todoToEdit: state.todoReducers.todoToEdit,
    ...additionalProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (data, uid) => dispatch(addTodo(data, uid)),
    showErrorMessage: (message) => dispatch(showAddErrMsg(message)),
    updateTodo: (newTodoData) => dispatch(updateTodo(newTodoData)),
    clearTodoToEdit: () => dispatch(clearTodoToEdit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
