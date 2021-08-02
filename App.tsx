import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from 'react-native-flash-message';

import configureStore from './src/redux/store';
import TaskRoute from './src/routes/Task.route';

let store = configureStore()

export default function App() {
  return (
    <Provider store={ store }>
        <NavigationContainer>
          <TaskRoute />
          <FlashMessage position={{ bottom: 60 }} />
        </NavigationContainer>
    </Provider>
  );
}
