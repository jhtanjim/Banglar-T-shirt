import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
const Home = () => {

    const tShirts = useLoaderData();
    console.log(tShirts);
    return (

        <div>
            <h2>This is Home {tShirts.length} </h2>
        </div>
    );
};

export default Home;