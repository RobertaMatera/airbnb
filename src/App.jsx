import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style/myStyle.css";
import "./Style/myNav.css";
import "./Style/mySmallNavStyle.css";
import "./Style/mySearchStyle.css";
import "react-dates/lib/css/_datepicker.css";
import "./Style/reactDatesOverrides.css";
import "./Style/myJumbotron.css";

import MyNav from "./Components/MyNav";
import MySmallNav from "./Components/MySmallNav";
import Search from "./Components/Search";
import MyJumbotron from "./Components/MyJumbotron";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="d-none d-md-block bg-black pb-5">
        <section id="nav">
          <MyNav />
        </section>
        <section
          id="search"
          className="bg-black py-3 d-none d-md-flex justify-content-center"
        >
          <Search />
        </section>
        <section id="jumbotron">
          <MyJumbotron />
        </section>
      </Container>

      <Container fluid className="d-flex flex-column d-md-none bg-img">
        <section id="nav">
          <MySmallNav />
        </section>
      </Container>
    </>
  );
}

export default App;
