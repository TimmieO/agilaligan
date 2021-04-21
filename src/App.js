import React from 'react';
import "./css/main.css"
import "./css/profile.css"
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Alexander from './Pages/Profiles/Alexander';
import Kevin from './Pages/Profiles/Kevin';
import Ossian from './Pages/Profiles/Ossian';
import Sofia from './Pages/Profiles/Sofia';
import Timmie from './Pages/Profiles/Timmie';
import Footer from "./components/Footer";
import { 
  Route, 
  BrowserRouter as Router, 
  Switch,
  } from "react-router-dom";

export default function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile-alex" component={Alexander} />
              <Route path="/profile-kevin" component={Kevin} />
              <Route path="/profile-ossian" component={Ossian} />
              <Route path="/profile-sofia" component={Sofia} />
              <Route path="/profile-timmie" component={Timmie} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }