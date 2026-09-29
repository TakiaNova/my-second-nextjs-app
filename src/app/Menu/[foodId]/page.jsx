import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    console.log('Food ID:', foodId);

    const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`
    );

    const data = await res.json();

    const {
        dish_name,
        image_link,
        origin_and_popularity
    } = data.data;

    return (
        <div>
            <h2>Food Detail: {foodId}</h2>
            <h3>{dish_name}</h3>
            <p>{origin_and_popularity}</p>
        </div>
    );
};

export default FoodDetailPage;