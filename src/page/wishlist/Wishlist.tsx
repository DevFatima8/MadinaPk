import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import WishlistMain from '../../features/wishlist/WishlistMain';
const Wishlist: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Wishlist' />
            <WishlistMain />
        </>
    );
};

export default Wishlist;