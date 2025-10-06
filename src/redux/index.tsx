import {combineReducers} from 'redux';
import profileSlice from './reducers/Profile/index';
import genresSlice from './reducers/Genres/index';

const rootReducer = combineReducers({
  profile: profileSlice,
  genres: genresSlice,
});

export default rootReducer;