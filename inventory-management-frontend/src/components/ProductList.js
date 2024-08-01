import React, { useState, useEffect } from 'react';
import productService from '../services/productService';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAllProducts().then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.error('There was an error fetching the products!', error);
        });
    }, []);

    return (
        <div>
            <h1 className="mb-4">Product List</h1>
            <Link to="/products/new" className="btn btn-primary mb-4">Add Product</Link>
            <ul className="list-group">
                {products.map((product) => (
                    <li key={product.id} className="list-group-item">
                        {product.name} - {product.description}
                        <Link to={`/products/${product.id}`} className="btn btn-sm btn-info float-end">View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;