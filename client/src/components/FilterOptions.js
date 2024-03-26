// src/components/FilterOptions.js

import React from 'react';

const FilterOptions = ({ categories, onCategoryChange }) => {
    return (
        <div>
            <h3>Filter Options</h3>
            <select onChange={onCategoryChange}>
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                ))}
            </select>
            {/* Add more filter options here */}
        </div>
    );
};

export default FilterOptions;

