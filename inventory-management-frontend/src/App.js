import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import SupplierList from './components/SupplierList';
import SupplierForm from './components/SupplierForm';
import SupplierDetail from './components/SupplierDetail';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Inventory Management</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products/new">Add Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/suppliers">Suppliers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/suppliers/new">Add Supplier</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders/new">Add Order</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/products/new" element={<ProductForm />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/suppliers" element={<SupplierList />} />
                        <Route path="/suppliers/new" element={<SupplierForm />} />
                        <Route path="/suppliers/:id" element={<SupplierDetail />} />
                        <Route path="/orders" element={<OrderList />} />
                        <Route path="/orders/new" element={<OrderForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;