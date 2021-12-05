import React from "react"
import './App.css'
import Header from './Header'
import Sidebar from "./Sidebar"
import Main from './Main'
import SearchPage from "./searchPage/SearchPage"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from "./Authentification/Login"

function App() {
  return ( 
    <div>
      <div className="app">
        <Router>
          <Header/> {/* we called the Header page, and always show in every pages*/}
            <Switch>
              
               {/* the login page*/}
                <Route path="/auth"> 
                <div className="division">
                  <Login />
                </div>
              </Route>

                    {/* we called the Homepage*/}
             <Route path="/" exact>
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page */}
                  <Main />
                </div>
              </Route>
                    {/* we called the Search page*/}
              <Route path="/search/:searchTerm"> 
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page */}
                  <SearchPage />
                </div>
              </Route> 
              {/*   we called the Explore page
              <Route path="/feed/explore">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <Explore />
                </div>
              </Route> */}
              {/*   we called the Subscription page
              <Route path="/feed/subscriptions">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <Subscription />
                </div>
              </Route> */}
               {/*   we called the Library page
              <Route path="/feed/library">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <Library />
                </div>
              </Route> */}
               {/*   we called the History page
              <Route path="/feed/history">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <History />
                </div>
              </Route> */}
              {/*   we called the Watch later page
              <Route path="/playlist/:listItem">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <WatchLate />
                </div>
              </Route> */}
              {/*   we called the Watch later page
              <Route path="/playlist/:listItem">
                <div className="division">
                  <Sidebar/> {/* we called the sideBar page 
                  <WatchLate />
                </div>
              </Route> */}  
         <Redirect to='/'/>      
       </Switch>
      </Router> 
    </div>
  </div>
  );
}
export default App;
