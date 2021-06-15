import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../../App';
import CategoryDetail from './CategoryDetails/CategoryDetail';
const allProduct = [
    { name: 'Lenovo', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'Apple', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikkon', category: 'camera' }, { name: 'Sony', category: 'camera' }
]

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const matchProduct = allProduct.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProduct);
    }, [category])
    return (
        <div>
            <h4>Your selected Category: {category}</h4>
            {
                products.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;