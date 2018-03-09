import React, { Component } from 'react';
import { StackNavigator,NavigationActions} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Main from '../containers/main' ;
import welcome from '../containers/welcome' ;
import DrawNav from './drawNav';
const TransitionConfiguration = () => ({//让页面水平向左进来
    screenInterpolator: (sceneProps) => {
      const { scene } = sceneProps;
      const { route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'forHorizontal';
      return CardStackStyleInterpolator[transition](sceneProps);
    },
});
export const AppNavigator=StackNavigator({
    welcome:{screen:welcome},
    Main:{screen:Main},
    drawerNav:{
        screen :DrawNav,
        navigationOptions: ({navigation}) => ((navigation.state.params!=null&&navigation.state.params.dtitle !=null)?{
                                title:navigation.state.params.dtitle }:{
                                }),
   },
  },{
    transitionConfig: TransitionConfiguration,
    headerMode:  'screen',
    initialRouteName:'welcome',
});