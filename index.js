import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import LoginScreen from './loginScreen/index'
import NewTaskScreen from './NewTaskScreen/index'
import TaskListScreen from './TaskListScreen/index'

AppRegistry.registerComponent(appName, () => App);
