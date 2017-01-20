import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing from './containers/Landing';
import NewGame from './containers/NewGame';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      <Scene key="root">
        <Scene
          key="landing"
          component={Landing}
          title="Landing"
          hideNavBar
          initial
        />
        <Scene key="newGame" component={NewGame} title="Starting Phrase" hideNavBar={false} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
