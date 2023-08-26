import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
const rootReducer = combineReducers({
    //some more reducer will come
    userReducer: UserReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export { rootReducer }
