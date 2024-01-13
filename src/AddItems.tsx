import React from 'react';
import './AddItems.css';
import hamburgerImage from './assets/Humburger.jpg';
import pizzaImage from './assets/Pizza.jpg';
import friesImage from './assets/Fries.jpg';
import tacoImage from './assets/Taco.jpg';
import teaImage from './assets/Tea.jpg';
import coffeeImage from './assets/Coffee.jpg';
import juiceImage from './assets/juice.jpg';

interface MenuItem {
    name: string;
    price: number;
    image: string;
}

interface AddItemsProps {
    addToOrder: (item: MenuItem) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ addToOrder }) => {
    const menuItems: MenuItem[] = [
        { name: "Hamburger", price: 220, image: hamburgerImage },
        { name: "Pizza", price: 350, image: pizzaImage },
        { name: "Fries", price: 150, image: friesImage },
        { name: "Taco", price: 200, image: tacoImage },
        { name: "Tea", price: 200, image: teaImage },
        { name: "Coffee", price: 200, image: coffeeImage },
        { name: "Juice", price: 200, image: juiceImage },
    ];

    return (
        <div className="add-items-container">
            <h2>Add items</h2>
            <div className="Add-flex">
                {menuItems.map((item) => (
                    <div key={item.name} className="menu-item" onClick={() => addToOrder(item)}>
                        <img src={item.image} alt={item.name} className="item-image" />
                        <p>{item.name}</p>
                        <p>Price: {item.price} KGS</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItems;
