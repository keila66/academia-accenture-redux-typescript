//responsavel por importar todos os contextos de reducers

import { combineReducers } from 'redux';

import product from '../products'

export default combineReducers({
    product
})