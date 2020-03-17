import {
  GET_TODOS,
  CLEAR_TODOS,
  SEARCH_TODOS,
  SET_SORT_TODOS,
  SET_FILTER_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  CLEAR_TODO_TO_EDIT
} from '../actions/types';



export default function todoReducers(state=[], action) {
  switch (action.type) {
    case ADD_TODO:
      if (action.payload.success) {
        return {
          ...state,
          todos: [action.payload.newTodo, ...state.todos]
        };
      } else {
        return {
          ...state
        }
      }

    case GET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,

      };

      case CLEAR_TODOS:
        return {
          ...state,
          todos: [],
          //filteredTodos: []
        };

      case DELETE_TODO:
        let todos = state.todos.filter((todo) => {
          return todo.id !== action.payload;
        })
        return {
          ...state,
          todos: todos
        };

      case TOGGLE_TODO:
        let newTodos = state.todos.map((todo) => {
          if (todo.id === action.payload.docId) {
            todo.is_completed = action.payload.newState;
          }
          return todo;
        })
        return {
          ...state,
          todos: newTodos
        };

      case EDIT_TODO:
        return {
          ...state,
          todoToEdit: action.payload
        };

      case SEARCH_TODOS:
        return {
          ...state,
          searchTask: action.payload
        };

      case SET_SORT_TODOS:
        return {
          ...state,
          sortByDate: action.payload
        };

      case SET_FILTER_TODOS:
        return {
          ...state,
          filterByStatus: action.payload
        };

      case CLEAR_TODO_TO_EDIT:
        return {
          ...state,
          todoToEdit: null
        };

      case UPDATE_TODO:
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.task = action.payload.task;
            todo.description = action.payload.description;
          }
          return todo;
        })
        return {
          ...state,
          todos: updatedTodos
        }

      default:
        return state;
  }
}
