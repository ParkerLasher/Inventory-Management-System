import React, { useState } from 'react';
import supplierService from '../services/supplierService';

const SupplierForm = ({ supplier, onSave }) => {
  const [formData, setFormData] = useState(supplier || {
    name: '',
    contactInfo: '',
    address: '',
    paymentTerms: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (supplier) {
      supplierService.updateSupplier(supplier.id, formData)
        .then((response) => {
          console.log('Update response:', response);
          setMessage('Supplier updated successfully!');
          setError('');
          onSave();
        })
        .catch((err) => {
          console.error('Update error:', err);
          setError('Failed to update supplier.');
          setMessage('');
        });
    } else {
      supplierService.createSupplier(formData)
        .then((response) => {
          console.log('Create response:', response);
          setMessage('Supplier added successfully!');
          setError('');
          setFormData({
            name: '',
            contactInfo: '',
            address: '',
            paymentTerms: '',
          });
        })
        .catch((err) => {
          console.error('Create error:', err);
          setError('Failed to add supplier.');
          setMessage('');
        });
    }
  };

  return (
    <div>
      <h2>{supplier ? 'Edit Supplier' : 'Add Supplier'}</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="contactInfo" className="form-label">Contact Info</label>
          <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <label htmlFor="paymentTerms" className="form-label">Payment Terms</label>
          <input type="text" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;