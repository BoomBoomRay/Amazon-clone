import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import './Checkout.css';
import CheckoutProduct from '../../components/Checkoutproduct/CheckoutProduct';
import SubTotal from '../../components/Subtotal/SubTotal';
// import FlipMove from 'react-flip-move';

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  const renderCheckout = basket?.map((e, ind) => {
    return (
      <div key={ind}>
        <CheckoutProduct {...e} index={ind} />
      </div>
    );
  });
  return (
    <>
      <div className='checkout'>
        <div className='checkout-left'>
          <img
            className='checkout__ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
          />
          <div className='greeting__guest'>
            {user ? <h1>Hey {user.email}</h1> : <h1>Hey guest</h1>}
          </div>
        </div>
        <div className='checkout-right'>
          <SubTotal />
        </div>
      </div>
      {basket && basket.length <= 0 ? (
        <div>
          <h1 className='checkout__title'>Shopping basket is empty</h1>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Shopping Basket</h2>
          {/* <FlipMove
            duration={500}
            enterAnimation='accordionVertical'
            leaveAnimation='accordionVertical'
          > */}
          {renderCheckout}
          {/* </FlipMove> */}
        </div>
      )}
      <div className='page_ad_div'>
        <img
          className='page__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
          alt=''
        />
      </div>
    </>
  );
};
export default Checkout;
