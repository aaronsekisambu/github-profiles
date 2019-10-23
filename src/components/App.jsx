import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './landingPage';
import UserDetails from './userDetails';
import Repositories from './reposDetails';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/:name" component={UserDetails} />
          <Route exact path="/:name/repos" component={Repositories} />
        </Switch>
      </Router>
    )
  }
}
export default App;
