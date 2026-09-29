'use client';
import React, { Suspense } from 'react';
import SearchFood from '../components/searchfood';

//option-1: To write promise
const foodPromise =  async () =>{
     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json();
    const foods = data.data;
    return foods;
}
//option 2
    const foodpromise2 = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then(res =>res.json());
const FoodPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            {/* <SearchFood foodPromise={foodPromise()}></SearchFood> */}
            <SearchFood foodPromise={foodpromise2}></SearchFood>
            </Suspense>
            <h2>Food Page</h2>
        </div>
    );
};

export default FoodPage;