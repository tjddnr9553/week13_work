import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import "7.css/dist/7.css";
import Routers from './Routers';
import "./styles/layout.css"

function App() {
  return (
    <div className='App'>
      <Header />
      <div id='wrapper'>
        <Routers/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
