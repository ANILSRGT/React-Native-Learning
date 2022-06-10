import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BooksScreen from './src/screens/BooksScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books" defaultScreenOptions={{ title: 'Books' }}>
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;