import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import middleware from './middleware'

const store = createStore(reducer, undefined, applyMiddleware(middleware)); 
// createStore recibe 3 argumentos, donde el reducer q es el primero es obligatorio y los otros opcionales
// El tercero es el middleware.
export default store;