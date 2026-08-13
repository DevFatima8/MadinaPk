import React, { useState } from 'react';
import { Link } from 'react-router';

interface CartPro {
    id: number;
    name: string;
    image: string;
    link: string;
    price: number;
}

interface CartProductProps {
    product: CartPro;
    removeProduct: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({ product, removeProduct }) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <tr>
            <td>
                <div className="cart-page__table-product">
                    <div className="cart-page__table-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="cart-page__table-content">
                        <h3 className="cart-page__table-title">
                            <Link to={product.link}>{product.name}</Link>
                        </h3>
                    </div>
                </div>
            </td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <div className="product-quantity">
                    <button 
                        type="button" 
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))} 
                        className="quantity-decrement"
                    >
                        -
                    </button>
                    <input 
                        type="text" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                    />
                    <button 
                        type="button" 
                        onClick={() => setQuantity((q) => q + 1)} 
                        className="quantity-increment"
                    >
                        +
                    </button>
                </div>
            </td>
            <td>${(product.price * quantity).toFixed(2)}</td>
            <td>
                <button 
                    type="button" 
                    className="cart-page__table-remove" 
                    onClick={() => removeProduct(product.id)}
                >
                    <i className="icon-cross-out"></i>
                </button>
            </td>
        </tr>
    );
};

export default CartProduct;
