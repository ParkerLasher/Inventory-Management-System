import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supplierService from "../services/supplierService";

const SupplierDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    supplierService
      .getSupplierById(id)
      .then((response) => {
        console.log(response.data);
        setSupplier(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the supplier!", error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await supplierService.deleteSupplier(id);
      navigate("/suppliers"); // Redirect to the suppliers list after deletion
    } catch (error) {
      console.error("There was an error deleting the supplier!", error);
    }
  };

  if (!supplier) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{supplier.name}</h1>
      <p>Contact Info: {supplier.contactInfo}</p>
      <p>Address: {supplier.address}</p>
      <p>Payment Terms: {supplier.paymentTerms}</p>
      <button onClick={() => navigate(`/suppliers/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SupplierDetail;
