import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from './Category/Category';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Home page {category}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;