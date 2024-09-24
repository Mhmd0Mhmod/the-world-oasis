import styled from "styled-components";
import GlobalyStyles from "./styles/GlobalStyled";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 2 rem;
  color: white;
`;
const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalyStyles />
      <StyledApp>
        <H1>Styled Components</H1>
        <Button>Click me</Button>
      </StyledApp>
    </>
  );
}
export default App;
