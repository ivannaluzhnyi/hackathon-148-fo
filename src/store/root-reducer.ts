import { combineReducers } from 'redux';

import authReducer from '../reducers/auth.reducer';
import settingReducer from '../reducers/setting.reducer';

const rootReducer = combineReducers({ authReducer, settingReducer });

export default rootReducer;
