
import { Route, Switch } from 'react-router-dom';
import './App.css';
 
import ScrollToTop from './constants/ScrollToTop';
import React  from 'react';
import LoginPage from './page/login/page/index';
import SignUpPage from './page/signup/page/index';

function App() {
 
 

  return (
    <div className="App">
      <ScrollToTop>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
