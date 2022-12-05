import List from "../list/List";
import { useDispatch } from "react-redux";

function Todo(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header">
        <div>{List.props.id}</div>
        <button>이전으로</button>
        <h2 className="title">{List.props.title}</h2>
        <div className="content">{List.props.content}</div>
        <button
          onClick={() => {
            dispatch({ type: "DELETE_TODO" });
          }}
        >삭제</button>
        <butoon onClick={}></butoon>
      </div>
    </div>
  );
}

export default Todo;
