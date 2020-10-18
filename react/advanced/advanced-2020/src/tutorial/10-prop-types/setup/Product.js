import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({id, image, name, price}) => {
  const url = image&& image.url
  return (
  <article className='product'>
    
    <h2>Products</h2>
    {/*<img src={defaultImage}/>*/}
    <h3>{name}</h3>
    <img src={url || defaultImage} alt={name || 'default name'}/>
    <h4>${price || 3.99}</h4>
  <button className="btn">Buy</button>
  </article>
  );
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
};

/*
Product.defaultProps = {
  name: 'default',
  price: 2.99,
  image: defaultImage,
}
*/
export default Product;
