import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

//os reducers sao funcoes que pegam o estado anterior e a acao a ser feita na store e retornam o novo estado

import rootReducer from './reducers'

//applyMiddleware: hook do redux onde todas as actions passaram por ele, e fara o tratamento necessario para a continuacao da execucao
const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState =  ReturnType<typeof rootReducer>

export default store;
