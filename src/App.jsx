import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from'./components/Main'
import { Content } from './components/Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ProblemPage } from './pages/ProblemPage';
import { MatchingUsers } from './pages/MatchingUsers';
import { Messages } from './pages/Messages';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';

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
      <Route path={'/problemPage'}>
        <ProblemPage/>
      </Route>
      <Route path={'/matchingUsers'}>
        <MatchingUsers/>
      </Route>
      <Route path={'/messeges'}>
        <Messages/>
      </Route>
      <Route path={'/notifications'}>
        <Notifications/>
      </Route>
      <Route path={'/profile'}>
        <Profile/>
      </Route>
    </Router>
  );
}

export default App;
