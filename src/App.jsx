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
      <Container fluid>
        <section id="nav">
          <MyNav />
          <MySmallNav />
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
    </>
  );
}

export default App;
