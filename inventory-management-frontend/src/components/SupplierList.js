import React, { useEffect, useState } from 'react';
import supplierService from '../services/supplierService';
import { Link } from 'react-router-dom';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    supplierService.getAllSuppliers().then((response) => {
      setSuppliers(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">Supplier List</h1>
      <Link to="/suppliers/new" className="btn btn-primary mb-4">Add Supplier</Link>
      <ul className="list-group">
        {suppliers.map((supplier) => (
          <li key={supplier.id} className="list-group-item">
            {supplier.name} - {supplier.contactInfo}
            <Link to={`/suppliers/${supplier.id}`} className="btn btn-sm btn-info float-end">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;