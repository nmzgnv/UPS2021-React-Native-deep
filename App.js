import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginScreen/index'
import NewTaskScreen from './NewTaskScreen/index'
import TaskListScreen from './TaskListScreen/index'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tasks" component={TaskListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="New Task" component={NewTaskScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
