import styled from "styled-components";
import GlobalyStyles from "./styles/GlobalStyled";

const H1 = styled.h1`
  font-size: 2 rem;
  color: red;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 599;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;
function App() {
  return (
    <>
      <GlobalyStyles />
      <div>
        <H1> Hello world</H1>
        <Button>Click me</Button>
        <Input type="text" placeholder="Enter your name" />
      </div>
    </>
  );
}
export default App;
