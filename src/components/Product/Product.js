import React from 'react';
import './Product.css';
import { useStateValue } from '../../context/StateProvider';
import { NotificationManager } from 'react-notifications';

export default function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addtoBasket = (event) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        quantity: 1,
      },
    });
    NotificationManager.success('Added to cart!', 'Successful!', 2000);
  };

  return (
    <>
      <div className='product'>
        <div className='product__info'>
          <p>{title}</p>s
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role='img' aria-labelledby={i} key={i}>
                  ⭐
                </span>
              ))}
          </div>
        </div>

        <img src={image} alt='' />
        <button onClick={() => addtoBasket()}> Add to Basket</button>
      </div>
    </>
  );
}
