import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { api } from '../services/api'

import * as ProductActions from '../store/products/actions'
import { IProduct, IProductState } from '../store/products/types'

interface IListProductsProps {
  products: IProduct[],
  toggleProduct(product: IProduct) : void,
  setProducts(products: IProduct[]) : void,
  getProducts() : void,
}

interface IResponseProducts {
  data: IProduct[]
}

const ListProducts = ({ products, toggleProduct, setProducts, getProducts }: IListProductsProps) => {

  //action utilizando o thunk
  useEffect(() =>{
    getProducts();
  }, [getProducts]);


  // //quando o componente for renderizado a funcao handle é executada
  // useEffect(() =>{
  //   handleProducts();
  // }, []);

  // //pega os dados de products da api
  // async function handleProducts() {
  //   const { data } : IResponseProducts = await api.get('/products');

  //   setProducts(data)
  // }

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p> Valor: R$ {product.value},00</p>
          <button onClick={() => toggleProduct(product)}>
            Selecionar Curso
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IProductState) => ({
  products: state.product.products,
});

//funcoes que disparam para actions
const mapDispatchToProps = (dispatch: Function) => ({
  toggleProduct: (product: IProduct) => dispatch(ProductActions.toggleProduct(product)),
  setProducts: (products: IProduct[]) => dispatch(ProductActions.setProducts(products)),
  getProducts: () => dispatch(ProductActions.getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
