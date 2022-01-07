import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style/myStyle.css";
import "./Style/myNav.css";
import "./Style/mySmallNavStyle.css";
import "./Style/mySearchStyle.css";
import "react-dates/lib/css/_datepicker.css";
import "./Style/reactDatesOverrides.css";
import "./Style/myJumbotron.css";
import "./Style/shopNow.css";
import "./Style/smallCard.css";
import "./Style/bigCard.css";
import "./Style/hosting.css";
import "./Style/gateway.css";
import "./Style/footer.css";

import MyNav from "./Components/MyNav";
import MySmallNav from "./Components/MySmallNav";
import Search from "./Components/Search";
import MyJumbotron from "./Components/MyJumbotron";
import ShopNow from "./Components/ShopNow";
import NextTrips from "./Components/NextTrips";
import Experiences from "./Components/Experiences";
import Hosting from "./Components/Hosting";
import Gateways from "./Components/Getaways";
import Footer from "./Components/Footer";
import FooterBottom from "./Components/FooterBottom";

import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <main>
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

        <section id="shop-now" className="px-4">
          <ShopNow />
        </section>

        <Container fluid className="d-flex flex-column d-md-none bg-img">
          <section id="nav">
            <MySmallNav />
          </section>
        </Container>

        <Container>
          <div className="padding"></div>
        </Container>

        <section id="new-inspiration" className="px-5">
          <Container fluid>
            <Row className="ml-5 p-0">
              <h2 className="font-w-600">Inspiration for your next trip</h2>
            </Row>
            <Row className="d-flex justify-content-center my-5 mx-4">
              <NextTrips />
            </Row>
          </Container>
        </section>
      </main>

      <section id="experiences">
        <Container fluid className="pt-md-5 mx-1 mx-md-0 px-md-5">
          <Row className="ml-1 ml-md-5 p-0">
            <h2 className="font-w-600 pb-3 mb-4">
              Discover Airbnb Experiences
            </h2>
          </Row>
          <Row>
            <Experiences />
          </Row>
        </Container>
      </section>

      <section id="host">
        <Container fluid className="pt-md-5 mx-1 mx-md-0 px-md-5 my-2">
          <Row>
            <Hosting />
          </Row>
        </Container>
      </section>

      <section id="gateways" className="mx-5 mt-5">
        <Container fluid className="pt-md-5 mx-1 mx-md-0 px-md-5">
          <Row className="p-0">
            <h3 className="font-w-600">Inspiration for future gateways</h3>
          </Row>
          <Row>
            <Gateways />
          </Row>
        </Container>
      </section>

      <section id="footer">
        <Container fluid className="pt-5 bg-footer">
          <Row className="p-0">
            <Footer />
          </Row>
          <Row>
            <hr className="mt-3 mb-2 hr-style" />
          </Row>
          <Row id="footer-bottom" className="px-4 pt-4">
            <FooterBottom />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default App;
