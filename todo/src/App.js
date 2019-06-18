import React from "react";
import styled from "styled-components";
import Todos from "./components/Todos";
import GlobalStyle from "./components/styled/GlobalStyle";
import ReduxToastr from 'react-redux-toastr'

const Container = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  background: black;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Toast = styled(ReduxToastr)`
  >* {
    font-size: 1.6rem;
  }
`
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Toast
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          fontSize='2rem'
          progressBar
          closeOnToastrClick
        />
        <Todos />
      </Container>
    </React.Fragment>
  );
}

export default App;
