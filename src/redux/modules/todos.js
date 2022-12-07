// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = [
  {
    id: 1,
    title: "리액트를 공부하자",
    content: "제발 공부하자",
    isDone: false,
  },
  {
    id: 2,
    title: "리덕트",
    content: "제발 공부하자",
    isDone: false,
  },
  {
    id: 3,
    title: "공부하자",
    content: "제발 공부하자",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    // {...state, 바꿀속성: 문장}
    case DELETE_TODO: {
      const copy = state.filter((todo) => todo.id !== action.payload);
      return copy;
    }
    case TOGGLE_STATUS_TODO: {
      const ddd = state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      console.log(ddd);
      return ddd;
    }
    /* case GET_TODO_BY_ID:
      const copy = state.find((todo) => {
        return todo.id === action.payload;
      });
      console.log(copy);
      return copy;*/

    default:
      return state;
  }
};

export default todos;
