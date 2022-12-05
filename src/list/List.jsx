function List(props) {
  return (
    <div className="listStyle">
      <span className="showReview">상세보기</span>
      <h2 className="title">{props.todo.title}</h2>
      <br></br>
      <div className="content">{props.todo.content}</div>
      <div className="buttons">
        <button
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          삭제하기
        </button>
        <button onClick={() => props.handleDone(props.todo.id)}>
          {props.todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
export default List;
