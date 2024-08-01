import React, { useState } from 'react';
import orderService from '../services/orderService';

const OrderForm = ({ order, onSave }) => {
  const [formData, setFormData] = useState(order || {
    supplierId: '',
    orderDate: '',
    status: 'pending',
    total: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order) {
      orderService.updateOrder(order.id, formData).then(onSave);
    } else {
      orderService.createOrder(formData).then(onSave);
    }
  };

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="supplierId" className="form-label">Supplier ID</label>
          <input type="text" name="supplierId" value={formData.supplierId} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="orderDate" className="form-label">Order Date</label>
          <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="status" className="form-label">Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="form-select" required>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="received">Received</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="total" className="form-label">Total</label>
          <input type="number" name="total" value={formData.total} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;