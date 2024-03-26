// src/screens/ProductListingScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const ProductListingScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const renderProductItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item._id)} />
        </View>
    );

    const addToCart = (productId) => {
        // Implement addToCart logic
        console.log('Product added to cart:', productId);
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default ProductListingScreen;

