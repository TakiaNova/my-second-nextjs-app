import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async () => {
    const res = await fetch(
        'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods'
    );

    console.log("Response:", res);

    const data = await res.json();

    console.log("Data:", data);

    const foods = data.data;

    return (
        <div>
            <h2>Menu Page</h2>

            <div className="grid grid-cols-3 gap-4">
                {foods.map(food => (
                    <FoodCard
                        key={food.id}
                        food={food}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;