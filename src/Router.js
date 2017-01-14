import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing from './components/Landing';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="landing" component={Landing} title="Landing" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
