import React from 'react';
import {Route, Switch} from "react-router-dom";
import A from './A';

function App() {
  return (
  
      <>
      <div>
      <Switch>
        <Route exact path='/' component={A} />
      </Switch>
      </div>
      </>
     
  );
}

export default App;
