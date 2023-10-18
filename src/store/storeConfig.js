import { createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numerosReducer';

const reducers = combineReducers({
    numeros: numerosReducer
})

const storeConfig = () => {
    return createStore(reducers);
}

export default storeConfig;