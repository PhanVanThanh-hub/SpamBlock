
import { Route, Switch } from 'react-router-dom';
import './App.css';
 
import ScrollToTop from './constants/ScrollToTop';
import React  from 'react';
import LoginPage from './page/login/page/index';
import SignUpPage from './page/signup/page/index';
import ForgotPasswordPage from './page/forgotPassword/page/index';
import Header from './components/Header/index';
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
            <Route path="/forgot_password">
              <Header/> 
              <ForgotPasswordPage />
            </Route>
          </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
