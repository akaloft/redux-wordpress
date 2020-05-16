import React from 'react';
import { Switch } from 'react-router-dom';
import { blogRoutes } from './routes';
import AppRoute from './routes/route';

//Layout
import MainLayout from './components/layout/index'

//Assets
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

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
