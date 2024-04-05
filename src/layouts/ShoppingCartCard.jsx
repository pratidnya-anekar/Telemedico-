import React from 'react';

const ShoppingCartCard = ({ item, image, removeFromCart }) => {
    return (
        <li className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center">
                <img src={image} alt="Product" className="w-16 h-16 mr-4 rounded-full" />
                <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                </div>
            </div>
            <button
                className="text-sm text-red-600 hover:text-red-800"
                onClick={removeFromCart}
            >
                Remove
            </button>
        </li>
    );
};

export default ShoppingCartCard;
