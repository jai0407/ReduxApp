import { combineReducers } from 'redux';
import ammountReducer from './ammountReducer';

const  reducers = combineReducers({

    amount : ammountReducer
})

export default reducers;