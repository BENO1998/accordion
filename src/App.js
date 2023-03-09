import "./styles.css";
import { Container } from "semantic-ui-react";
import AccordionComponent from "./components/AccordionComponent";

export default function App() {

  return (

    <div className="App">
<h1>Nested Component</h1>
      <Container style={{ margin: 100 }}>

        <AccordionComponent />

      </Container>

    </div>
    
  );
}
