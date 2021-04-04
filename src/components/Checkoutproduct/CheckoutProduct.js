import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../context/StateProvider';

export default function CheckoutProduct({
  id,
  title,
  price,
  rating,
  image,
  hideButton,
}) {
  const [, dispatch] = useStateValue();

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
          {title}
          {/* <strong className='productQuantity'>
            (
            {basket && basket.filter((i) => i.id === id).map((i) => i.quantity)}
            x)
          </strong> */}
        </p>
        <p className='checkoutProdcut__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role='img' aria-labelledby={i} key={i}>
                ⭐
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={handleRemove}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}
