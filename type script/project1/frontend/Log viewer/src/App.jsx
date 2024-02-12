// App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LogViewer from "./components/LogViewer";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Switch>
          <Route path="/service/:serviceName" component={<LogViewer/>} />
          <Route path="/" component={<LogViewer/>} />
  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
