import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
  const [id, setId] = useState(4);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;
    setId(id + 1);
    dispatch(
      addTodo({
        id: id,
        title: title,
        content: content,
        isDone: false,
      }),
      setContent(""),
      setTitle("")
    );
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
}

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;

export default Form;
