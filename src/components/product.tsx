import { connect } from "react-redux";
import { RootState } from '../store/'
import { IProduct } from "../store/products/types";

export interface IProductProps {
    product?: IProduct
}

const product = ({ product }: IProductProps) => {
  return (
    <>
    {product && (
       <div>
          <h2>Página do Produto</h2>
          <h3>{product.title}</h3>
          <p>Valor: R$ {product.value},00</p>
          <h4>Modulos:</h4>
          <ul>
            {product.modules.map((module) => (
              <li key={module.id}>{module.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  product: state.product.product
});

export default connect(mapStateToProps)(product);
