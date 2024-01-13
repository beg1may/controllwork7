import React from 'react';
import './Orderdetails.css';

interface OrderDetailsProps {
    itemsOrder: { [key: string]: number };
    removeOrder: (itemName: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ itemsOrder, removeOrder }) => {
    const menuItems = [
        { name: "Hamburger", price: 200 },
        { name: "Pizza", price: 350 },
        { name: "Fries", price: 150 },
        { name: "Taco", price: 200 },
        { name: "Tea", price: 200 },
        { name: "Coffee", price: 200 },
        { name: "Juice", price: 200 },
    ];

    const total = Object.keys(itemsOrder).reduce((acc, item) => {
        const menuItem = menuItems.find((menu) => menu.name === item);
        if (menuItem) {
            return acc + itemsOrder[item] * menuItem.price;
        }
        return acc;
    }, 0);

    return (
        <div>
            <h2>Order Details</h2>
            {Object.keys(itemsOrder).length === 0 ? (
                <p>Order is empty! Please add some items!</p>
            ) : (
                <ul>
                    {Object.keys(itemsOrder).map((item) => {
                        const menuItem = menuItems.find((menu) => menu.name === item);
                        return (
                            <li key={item}>
                                {menuItem?.name} x {itemsOrder[item]} {menuItem?.price} KGS
                                <button onClick={() => removeOrder(item)}> x </button>
                            </li>
                        );
                    })}
                    <p>Total price: {total} KGS</p>
                </ul>
            )}
        </div>
    );
};

export default OrderDetails;
