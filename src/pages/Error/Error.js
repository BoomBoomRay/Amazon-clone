import React from 'react';
import './Error.css';

export default function Error() {
  return (
    <>
      <div className='error'>
        <h1>Sorry processing came across a problem, please try again.....</h1>
      </div>
      <div className='page_ad_div'>
        <img
          className='page__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
          alt=''
        />
      </div>
    </>
  );
}
