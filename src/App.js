import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { blogRoutes } from './routes';
import AppRoute from './routes/route';

//Layout
import MainLayout from './components/layout/index'


function App() {
  return (
    <div className="App">
      <Switch>
      {blogRoutes.map((route, idx) => (
            <AppRoute
              exact={true}
              path={route.path}
              layout={MainLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false} />
          ))}
      </Switch>
    </div>
  );
}

export default App;
