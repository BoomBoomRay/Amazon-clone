import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './pages/Orders/Orders';
import { auth } from './context/firebase';
import { useStateValue } from './context/StateProvider';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

const promise = loadStripe('pk_test_rXv4cFMFIBuY3oHysT1nu3Yv00YjhOJACr');
function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path='/error'>
            <Header />
            <Error />
            <Footer />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;
