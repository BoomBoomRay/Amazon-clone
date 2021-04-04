import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../context/firebase';
import LongMenu from '../Longmenu/LongMenu';

export default function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='#'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        <SearchIcon className='header_searchIcon' />
      </div>
      <LongMenu logout={logout} />
      <div className='header__Nav'>
        {user ? (
          <div onClick={logout} className='header_option logout_button'>
            <span className='header__optionLinetwo'>Hey {user.email} </span>
            <span className='header__optionLinetwo'>Logout </span>
          </div>
        ) : (
          <Link to='/login' className='header__link'>
            <div className='header_option'>
              <span className='header__optionLinetwo sign_in'>Sign in</span>
            </div>
          </Link>
        )}
        <Link to='/orders' className='header__link'>
          <div className='header_option'>
            <span className='header__optionLinOne'>Returns</span>
            <span className='header__optionLinetwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header_option'>
            <span className='header__optionLinOne'>Your</span>
            <span className='header__optionLinetwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLinetwo header__basketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
