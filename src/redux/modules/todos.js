// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
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

export const toggleTodo = (payload) => {
  return {
    typel: TOGGLE_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      id: 0,
      title: "",
      content: "",
      isDone: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  },
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
