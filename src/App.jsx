import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Style/MyStyle.css';
import './Style/MyNav.css';
import './Style/MySmallNavStyle.css';

import MyNav from './Components/MyNav';
import MySmallNav from './Components/MySmallNav';

function App() {
  return (
    <section id="nav">
      <MyNav/>
      <MySmallNav/>
    </section>
  );
}

export default App;
