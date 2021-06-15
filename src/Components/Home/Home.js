import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from './Category/Category';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid gray', padding:'5px'}}>
            <h1>This is Home page {category}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;