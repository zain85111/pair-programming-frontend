import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from'./components/Main'
import { Content } from './components/Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <Router>
      <Route exact path={'/'}>
        <div className="App">
          <Navbar />
          <Main />
          <Content/>
        </div>
      </Route>
      <Route path={'/login'}>
        <Login/>
      </Route>
      <Route path={'/signup'}>
        <Signup/>
      </Route>
    </Router>
  );
}

export default App;
