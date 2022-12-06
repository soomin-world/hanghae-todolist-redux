import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    content: "",
    isDone: false,
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  const onSubmitHandler = () => {
    setId(id + 1);
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: id,
      title: title,
      body: content,
      isDone: false,
    });
  };

  return (
    <STForm className="input-container" onSubmit={onSubmitHandler}>
      <STInputBox className="input-box">
        <STLabel className="input-title">제목</STLabel>
        <STInput
          type="text"
          name="title"
          className="title-box"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <STLabel className="input-content">내용</STLabel>
        <STInput
          type="text"
          name="content"
          className="content-box"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </STInputBox>
      <STAddBtn className="submit-btn">추가하기</STAddBtn>
    </STForm>
  );
}

const STForm = styled.form`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const STInputBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 20px;
`;

const STLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const STInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;

const STAddBtn = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
`;

export default Form;
