import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect } from 'react-redux'
import { addNavigationHelpers,StackNavigator } from 'react-navigation'
import {AppNavigator} from './navigation/stackNav'
import MyApp from './navigation/drawNav'
import { addListener } from './utils/test';
class Main extends Component {
     componentDidMount(){
      
     }    
    render(){
        return (
             <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.stacknav,
                addListener:addListener,
            })}  />
            // <MyApp/>
        );
    }
}
function mapStateToProps(state) {
    return {
      stacknav:state.stacknav
    }
}

export default connect(mapStateToProps)(Main);