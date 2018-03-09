
import { StackNavigator,NavigationActions} from 'react-navigation';
import {AppNavigator} from '../navigation/stackNav'

export const statkNavReducer = (state, action) => {
   switch(action.type){
        case 'jump_main':
            return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Main' }), state);
        case 'login_success':
            return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'drawerNav' }), state);
   }
   const newState = AppNavigator.router.getStateForAction(action, state);
   return (newState ? newState : state)
};