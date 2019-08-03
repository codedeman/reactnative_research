/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import VerticalScrollView from './component/VerticalSrollView';
import HorizontalScrollView from './component/HorizontalScrollView';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => HorizontalScrollView);
