import { StackNavigator,NavigationActions} from 'react-navigation';
import DrawNav from '../navigation/drawNav'

export const drawNavReducer = (state, action) => {
   switch(action.type){
        case 'login_success':
            return DrawNav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Main' }), state);
   }
   const newState = DrawNav.router.getStateForAction(action, state);
   return (newState ? newState : state)
};