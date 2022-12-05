// src/modules/counter.js

import Todo from "../../todo/Todo";

// 초기 상태값
const initialState = {
  id: 0,
  title: "",
  content: "",
};

// 리듀서
const addTodo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos[...state.tods, action.payload] };
    case "DELETE_TODO":
      return {};
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default addTodo;
