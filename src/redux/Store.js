import { legacy_createStore as create_Store , applyMiddleware} from 'redux'
import ReduxThunk from "redux-thunk"
import logger from 'redux-logger';
import RootReducer from './reducer/RootReducer';

const middlwares = [ReduxThunk];
if(process.env.NODE_ENV === "development"){
    middlwares.push(logger);
}
const store = create_Store(RootReducer , applyMiddleware(...middlwares));

export default store;