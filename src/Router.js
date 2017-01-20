import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing from './components/Landing';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginTop: 60 }}>
      <Scene key="root">
        <Scene
          key="landing"
          component={Landing}
          title="Landing"
          hideNavBar
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
