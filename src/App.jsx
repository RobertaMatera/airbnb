import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Style/MyStyle.css";
import "./Style/MyNav.css";
import "./Style/MySmallNavStyle.css";
import "./Style/MySearchStyle.css";

import MyNav from "./Components/MyNav";
import MySmallNav from "./Components/MySmallNav";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <section id="nav">
        <MyNav />
        <MySmallNav />
      </section>
      <section id="search" className="bg-black py-3 d-none d-md-flex justify-content-center">
        <Search />
      </section>
    </>
  );
}

export default App;
