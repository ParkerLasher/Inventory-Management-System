import React, { useState } from 'react';
import productService from '../services/productService';

const ProductForm = ({ product, onSave }) => {
    const [formData, setFormData] = useState(product || {
        name: '',
        sku: '',
        description: '',
        category: '',
        quantity: 0,
        location: '',
        batchNumber: '',
        expiryDate: '',
        status: 'available',
        minLevel: 0,
        maxLevel: 0,
        reorderPoint: 0,
        safetyStock: 0,
    });
    
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            productService.updateProduct(product.id, formData)
                .then(() => {
                    setMessage('Product updated successfully!');
                    setError('');
                    onSave();
                })
                .catch((err) => {
                    setError('Failed to update product.');
                    setMessage('');
                });
        } else {
            productService.createProduct(formData)
                .then(() => {
                    setMessage('Product added successfully!');
                    setError('');
                    setFormData({
                        name: '',
                        sku: '',
                        description: '',
                        category: '',
                        quantity: 0,
                        location: '',
                        batchNumber: '',
                        expiryDate: '',
                        status: 'available',
                        minLevel: 0,
                        maxLevel: 0,
                        reorderPoint: 0,
                        safetyStock: 0,
                    });
                })
                .catch((err) => {
                    setError('Failed to add product.');
                    setMessage('');
                });
        }
    };

    return (
        <div>
            <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" name="sku" value={formData.sku} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="batchNumber" className="form-label">Batch Number</label>
                    <input type="text" name="batchNumber" value={formData.batchNumber} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="form-select" required>
                        <option value="available">Available</option>
                        <option value="out of stock">Out of Stock</option>
                        <option value="discontinued">Discontinued</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="minLevel" className="form-label">Min Level</label>
                    <input type="number" name="minLevel" value={formData.minLevel} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="maxLevel" className="form-label">Max Level</label>
                    <input type="number" name="maxLevel" value={formData.maxLevel} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="reorderPoint" className="form-label">Reorder Point</label>
                    <input type="number" name="reorderPoint" value={formData.reorderPoint} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="safetyStock" className="form-label">Safety Stock</label>
                    <input type="number" name="safetyStock" value={formData.safetyStock} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;