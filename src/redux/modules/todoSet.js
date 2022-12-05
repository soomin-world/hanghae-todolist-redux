// src/modules/counter.js

import Todo from "../../todo/Todo";


// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const addTodo = () => {
  return {
    type: ADD_TODO,
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
  };
};



// 초기 상태값
const initialState = {
  id: 0,
  title: "",
  content: "",
};

// 리듀서
const todoSet = (state = initialState, action) => {
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
export default todoSet;
