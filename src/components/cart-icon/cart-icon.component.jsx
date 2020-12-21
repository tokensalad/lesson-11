import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count' >0</span>
  </div>
);

const mapStateToProps = state => ({
 currentUser: state.user.currentUser
})

export default CartIcon;
