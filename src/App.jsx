import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ProductList from './components/product-list/product-list';

function App() {
  const products = [
    {id: shortid.generate(), name: 'Pizza Margarita', price: 8},
    {id: shortid.generate(), name: 'Pizza Hawai', price: 13, promo: true},
    {id: shortid.generate(), name: 'Pate', price: 6.5},
    {id: shortid.generate(), name: 'Glace Vanille', price: 4.99},
    {id: shortid.generate(), name: 'Glace Chocolat', price: 4.99},
    {id: shortid.generate(), name: 'Café', price: 2.5, promo: true}
  ]

  return (
    <div>
      <h1>Exercice - Liste de produit</h1>
      <ProductList data={products}/>
    </div>
  );
}

export default App;
