import List from "./list/List";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { addTodo, deleteTodo } from "./redux/modules/todoSet";

const App = () => {
  const addTodoStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.addTodo.id);
  console.log(id);
  return (
    <div>
      {/* <div className="layOut">
        <div className="navBar">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <div className="addForm">
          <div className="inputGroup">
            <label className="formLabel">제목</label>
            <input
              className="inputBox"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label className="formLabel">내용</label>
            <input
              className="inputBox"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
          </div> */}
      <button
        onClick={() => {
          dispatch(addTodo);
        }}
      >
        추가하기
      </button>
      {/* </div>
        <div className="listContainer">
          <h2 className="listTitle">Working..💥</h2>
          <div className="listWrapper">
            {todos.map((todo) =>
              todo.isDone === false ? (
                <List
                  handleDelete={deleteTodoHandler}
                  handleDone={doneHandler}
                  todo={todo}
                  key={todo.id}
                ></List>
              ) : null
            )}
          </div>
          <h2 className="listTitle">Done..!🎉</h2>
          <div className="listWrapper">
            {todos.map((todo) =>
              todo.isDone === true ? (
                <List
                  handleDelete={deleteTodoHandler}
                  handleDone={doneHandler}
                  todo={todo}
                  key={todo.id}
                ></List>
              ) : null
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;

// src/App.js
