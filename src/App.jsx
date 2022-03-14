import './App.css';
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
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminUsers } from './pages/AdminUsers';
import { AdminProblems } from './pages/AdminProblems';
import { AdminComplains } from './pages/AdminComplains';
import { AdminFeedback } from './pages/AdminFeedback';
import { CodingPage } from './pages/CodingPage';
import { EditProfile } from './pages/EditProfile';

function App() {
  return (
    <Router>
      <Route exact path={'/'}>
        <div className="App">
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
      <Route path={'/codingPage'}>
        <CodingPage/>
      </Route>
      <Route path={'/profile'}>
        <Profile/>
      </Route>
      <Route path={'/editProfile'}>
        <EditProfile/>
      </Route>
      <Route path={'/adminDashboard'}>
        <AdminDashboard/>
      </Route>
      <Route path={'/adminUsers'}>
        <AdminUsers/>
      </Route>
      <Route path={'/adminProblems'}>
        <AdminProblems/>
      </Route>
      <Route path={'/adminComplains'}>
        <AdminComplains/>
      </Route>
      <Route path={'/adminFeedback'}>
        <AdminFeedback/>
      </Route>
    </Router>
  );
}

export default App;
