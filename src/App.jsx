import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style/myStyle.css";
import "./Style/myNav.css";
import "./Style/mySmallNavStyle.css";
import "./Style/mySearchStyle.css";
import 'react-dates/lib/css/_datepicker.css';
import "./Style/reactDatesOverrides.css";

import MyNav from "./Components/MyNav";
import MySmallNav from "./Components/MySmallNav";
import Search from "./Components/Search";
import Jumbotron from "./Components/Jumbotron";

import { Container } from "react-bootstrap";
import Dates from "./Components/Dates";

function App() {
  return (
    <>
      <Container fluid className="bg-black">
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
        <Dates/>
          {/* <Jumbotron/> */}
        </section>
      </Container>
    </>
  );
}

export default App;
