import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers/user';

export const store = createStore(rootReducer, initialState);
