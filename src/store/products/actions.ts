import { IProduct } from './types'
import { api } from '../../services/api'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..';
import { AnyAction } from 'redux';

//action para exibir o produto selecionado na paginas inicial
export function toggleProduct(product: IProduct) {
    return {
      type: "TOGGLE_PRODUCT",
      product
    };
}

//action para setar os valor na array products
export function setProducts(products: IProduct[]) {
  return {
    type: 'SET_PRODUCTS',
    products
  }
}

//função que busca os dados na api e irá retornar pra o setProducts
//return da funcao, state, parametros que a funcao pode receber,             
export function getProducts(): ThunkAction<void, RootState, unknown, AnyAction> {
  return (dispatch) => {
    api.get('products').then(
      success => dispatch(setProducts(success.data)),
      error => alert('Erro ao buscar produtos')
    )
  }
}