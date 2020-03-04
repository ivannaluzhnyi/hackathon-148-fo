import { combineReducers } from 'redux';

import authReducer from '../reducers/auth.reducer';
import settingReducer from '../reducers/setting.reducer';
import inscriptionReducer from '../reducers/inscription.reducer';

const rootReducer = combineReducers({
    authReducer,
    settingReducer,
    inscriptionReducer,
});

export default rootReducer;
