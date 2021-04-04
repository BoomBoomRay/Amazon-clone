import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import './Subtotal.css';
import { NotificationManager } from 'react-notifications';

export default function SubTotal() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const proceedCheckout = () => {
    if (basket.length <= 0) {
      NotificationManager.info(
        'Please select item before checkout',
        'Sorry no items!',
        2000
      );
      history.push('/');
    } else if (!user) {
      NotificationManager.info(
        'Please sign in to proceed with payment',
        'Sign in!',
        2000
      );
      history.push('/login');
    } else {
      history.push('/payment');
    }
  };
  return (
    <div className='subTotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item):<strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        value={getBasketTotal(basket)}
      />
      <button onClick={proceedCheckout}>Proceed to Checkout</button>
    </div>
  );
}
