import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Single from './pages/Single';
import Archive from './pages/Archive';
import Author from './pages/Author';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Single} />
        <Route exact path="/categories/:id" component={Archive} />
        <Route exact path="/author/:id" component={Author} />
      </Switch>
    </div>
  );
}

export default App;
