import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  GET_TODOS,
  CLEAR_TODOS,
  SET_SORT_TODOS,
  SET_FILTER_TODOS,
  SHOW_ADD_ERR_MSG_APP,
  SEARCH_TODOS,
  UPDATE_TODO,
  CLEAR_TODO_TO_EDIT
} from './types';
import { firestore } from '../../components/firebase';


export const addTodo = (data, uid) => {
  const date = Date.now();
  const newTodo = {
    ...data,
    is_completed: false,
    ownerID: uid,
    created_at: date
  }
  return (dispatch) => {
    firestore.collection("todos")
    .add(newTodo)
    .then( (doc) => {
        const docId = doc.id;
        console.log("Document written successfully");
        const res = {
          success: true,
          newTodo: {id: docId, ...newTodo}
        };
        dispatch({
          type: ADD_TODO,
          payload: res
        });

    })
    .catch( (error) => {
        console.error("Error adding document: ", error.message);
        dispatch({
          type: SHOW_ADD_ERR_MSG_APP,
          payload: error.message
        });
    });
  }
}

export const getTodos = (uid=null) => {
  return (dispatch) => {
    let todos = [];
    firestore.collection("todos")
      .where("ownerID", "==", uid)
      //.orderBy("created_at", "desc")
      .get()
      .then((snapshot) => {
        snapshot.forEach( (item) => {
          todos.push({
            id: item.id,
            ...item.data()
          });
        });
        dispatch({
          type: GET_TODOS,
          payload: {
            todos: todos
          }
        });
      });
  }
}

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  }
}

export const searchTodos = (searchWord) => {
    return {
      type: SEARCH_TODOS,
      payload: searchWord
    }
}

export const setSort = (sorted) => {
  return {
    type: SET_SORT_TODOS,
    payload: sorted
  }
}

export const setFilter = (filtered) => {
  return {
    type: SET_FILTER_TODOS,
    payload: filtered
  }
}


export const toggleTodo = (docId, newState) => {
  return (dispatch) => {
    firestore.collection("todos")
    .doc(docId)
    .update({is_completed: newState})
    .then(() => {
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          docId,
          newState
        }
      })
    })
    .catch((err) => { console.log(err.message) })
  }
}

export const deleteTodo = (docId) => {
  return (dispatch) => {
      firestore.collection("todos")
      .doc(docId)
      .delete()
      .then(() => {
        dispatch({
          type: DELETE_TODO,
          payload: docId
        });
      })
      .catch((err) => { console.log(err.message)});
  }

}

export const editTodo = (todoData) => {
  //alert('This feature is under construction');
  return {
    type: EDIT_TODO,
    payload: todoData
  }
}

export const updateTodo = (newTodoData) => {
  return (dispatch) => {
    firestore.collection("todos")
    .doc(newTodoData.id)
    .update({
      task: newTodoData.task,
      description: newTodoData.description
    })
    .then(() => {
      dispatch({
        type: UPDATE_TODO,
        payload: newTodoData
      });
      dispatch(clearTodoToEdit());
    })
    .catch((err) => { console.log(err.message) })
  }
}

export const clearTodoToEdit = () => {
  return {
    type: CLEAR_TODO_TO_EDIT
  }
}
