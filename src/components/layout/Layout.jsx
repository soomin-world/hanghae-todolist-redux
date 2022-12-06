import styled from "styled-components";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

function Layout() {
  return (
    <div className="layout">
      <STLayout className="container">
        <Header />
        <Form />
        <List />
      </STLayout>
    </div>
  );
}

const STLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`;

export default Layout;
