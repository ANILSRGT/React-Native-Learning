import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import CarList from './src/components/CarList';

const App = () => {
  return (
    <View>
      <Header title='Cars' />
      <CarList />
    </View>
  );
}

export default App;