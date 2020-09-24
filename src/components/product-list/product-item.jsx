import React from 'react';
import PropTypes from 'prop-types';
import style from './product.module.css';

const ProductItem = (props) => {
    const {name, price, promo} = props;

    //Ternaire =>   const var = condition ? 'Rep Vrai' : 'Rep Faux'
    return (
        <li>{name} <span className={promo ? style.onPromo : ''}>{price}€</span></li>
    );
}

ProductItem.defaultProps = {
    promo: false
}

ProductItem.propTypes = {
    name : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promo: PropTypes.bool
}

export default ProductItem;