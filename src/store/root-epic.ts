import { combineEpics } from 'redux-observable';
import { fetchLoginEpic } from '../actions/auth.actions';
export default combineEpics(fetchLoginEpic);
