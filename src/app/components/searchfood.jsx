'use client';
import React, { use, useState, useEffect } from 'react';

const SearchFood = ({foodPromise}) => {
    //const [foods, setFoods] = useState([])
    // const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    // const data = await res.json();
    // const foods = data.data;
    
    
    const foods = use(foodPromise).data;
    // useEffect(() =>{
    //     fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    //     .then(res => res.json())
    //     .then(data => setFoods(data.data))
    // }, [])
    return (
        <div>
            <h2>Top Foods = {foods.length}</h2>
        </div>
    );
};

export default SearchFood;