/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import VerticalScrollView from './component/VerticalSrollView';
import HorizontalScrollView from './component/HorizontalScrollView';
import FlatListBasic from './component/FlatListBasic';
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => FlatListBasic);
