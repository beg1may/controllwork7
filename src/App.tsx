import React, {useState} from 'react';
import OrderDetails from './OrderDetails';
import AddItems from './AddItems';
import './App.css';

const App: React.FC = () => {
    const [orderItems, setOrderItems] = useState<{ [key: string]: number }>({});

    const addToOrder = (item: menuItems) => {
        setOrderItems((prevItems) => ({
            ...prevItems,
            [item.name]: (prevItems[item.name] || 0) + 1,
        }));
    };

    const removeFromOrder = (itemName: string) => {
        setOrderItems((prevItems) => {
            const newItems = { ...prevItems };
            delete newItems[itemName];
            return newItems;
        });
    };

    return (
        <div>
            <div>
                <div>
                    <OrderDetails itemsOrder={orderItems} removeOrder={removeFromOrder} />
                </div>
                <div>
                    <AddItems addToOrder={addToOrder} />
                </div>
            </div>
        </div>
    );
};

export default App;
