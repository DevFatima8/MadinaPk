import React from 'react'; 
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import CartMain from '../../features/cart/CartMain';

const Cart: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Cart' />
            <CartMain />
        </>
    );
};

export default Cart;