import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';

const ProductList = (props) => {

    // const listItems = props.data.map(
    //     elem => <ProductItem key={elem.id} 
    //                          name={elem.name}
    //                          price={elem.price}
    //                          promo={elem.promo} /> 
    // );

    const listItems = props.data.map(
        elem => <ProductItem key={elem.id} {...elem} /> 
    );

    return (
        <ul>{listItems}</ul>
    )
}

ProductList.defaultProps = {
    data: []
}

ProductList.propTypes = {
    data: PropTypes.array
}

export default ProductList;