import { DrawerNavigator,NavigationActions} from 'react-navigation';
import HomePage from '../containers/HomePage' 
import Main from '../containers/main' 
const DrawNav = DrawerNavigator({
    Main: {
      screen: Main,
    },
    Home: {
      screen: HomePage,
    },
});
export default DrawNav;