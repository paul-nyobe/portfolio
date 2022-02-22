import './app.css';
import { Header, Intro, Portfolio, Menu, Services, Contact } from './components';

function App() {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <div className="containers">
        <Intro />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
