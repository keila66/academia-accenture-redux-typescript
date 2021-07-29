import { Provider } from 'react-redux';
import React from 'react';
import ListProducts from './components/listProducts';
import Product from './components/product';
import store from './store';


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      {/* Provider permite que o 'store' esteja acessivel para qualquer componente que precise */}
      <Provider store={store}>
        <ListProducts />
        <Product />
      </Provider>
    </div>
  );
}

export default App;
