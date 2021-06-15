import React, { useContext } from 'react';
import { CategoryContext } from '../../../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h6>Category Detail {category}</h6>
        </div>
    );
};

export default CategoryDetail;