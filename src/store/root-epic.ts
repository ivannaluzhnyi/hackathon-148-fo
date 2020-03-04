import { combineEpics } from 'redux-observable';
import { fetchLoginEpic } from '../actions/auth.actions';
import { inscriptionEpic } from '../actions/inscription.actions';
export default combineEpics(fetchLoginEpic, inscriptionEpic);
