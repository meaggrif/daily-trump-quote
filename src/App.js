import React from 'react';
import { Title } from './components/Title';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ProfilePage } from './Pages/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
