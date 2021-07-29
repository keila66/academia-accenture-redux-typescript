import { createStore } from "redux";

//os reducers sao funcoes que pegam o estado anterior e a acao a ser feita na store e retornam o novo estado

import rootReducer from './reducers'

const store = createStore(rootReducer);

export type RootState =  ReturnType<typeof rootReducer>

export default store;
