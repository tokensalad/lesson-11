import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = state => ({
//  currentUser: state.user.currentUser
// })

export default CartDropdown;
