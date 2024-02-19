import './App.css';
import Header from './components/Header';
import Panels from './components/Panels'
import Help from './components/Help'

function App() {
  return (
    <>
      <Help />
      <div className="App">
        <Header />
        <Panels />
      </div>
    </>

  );
}

export default App;
