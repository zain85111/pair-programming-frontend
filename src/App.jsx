import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from'./components/Main'
import { Content } from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Content/>
    </div>
  );
}

export default App;
