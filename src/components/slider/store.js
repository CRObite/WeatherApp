import { createStore } from 'redux';
import sliderReducer from './reducer';

const store = createStore(sliderReducer);

export default store;