import "./App.css";
import StyledButton, { FancyButton } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>StyledButton</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">StyledButton</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>Fancy Button</FancyButton>

      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy Button with polymorphic tag</FancyButton>
    </div>
  );
}

export default App;
