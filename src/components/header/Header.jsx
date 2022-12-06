import styled from "styled-components";

function Header() {
  return (
    <STHeader className="header">
      <div>My Todo List</div>
      <div>React</div>
    </STHeader>
  );
}
const STHeader = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`;

export default Header;
