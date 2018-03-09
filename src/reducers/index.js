import {combineReducers} from 'redux';
import {statkNavReducer} from './stockNavReducer'
const rootReducer = combineReducers({
    stacknav:statkNavReducer,
});
export default rootReducer;