import React, { useState, useEffect } from 'react';
import { db } from '../../context/firebase';
import { Link } from 'react-router-dom';
import './Orders.css';
import { useStateValue } from '../../context/StateProvider';
import Order from '../../components/Order/Order';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) {
      setOrders([]);
      setLoading(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        if (user.uid) {
          db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>
              setOrders(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              )
            );
          setLoading(false);
        } else {
          setOrders([]);
        }
      }, 3000);
    }
  }, [user]);
  return (
    <>
      {!loading ? (
        <>
          <div className='orders'>
            <h1>Your Orders</h1>

            {orders.length <= 0 ? (
              <Link to='/'>
                <strong>No Orders? Check out our Products!</strong>
              </Link>
            ) : (
              <div className='orders__order'>
                {orders &&
                  orders.map((order, ind) => <Order key={ind} order={order} />)}
              </div>
            )}
          </div>

          <div className='page_ad_div'>
            <img
              className='page__ad'
              src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
              alt=''
            />
          </div>
        </>
      ) : (
        <div className='orders'>
          <div className='loader_spinner'>
            <Loader type='ThreeDots' color='#232f3e' height={50} width={50} />
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
