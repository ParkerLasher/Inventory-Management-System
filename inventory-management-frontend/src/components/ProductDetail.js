import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../services/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService
      .getProductById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(id);
      navigate("/products");
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>SKU:</strong> {product.sku}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Location:</strong> {product.location}</p>
      <p><strong>Batch Number:</strong> {product.batchNumber}</p>
      <p><strong>Expiry Date:</strong> {product.expiryDate}</p>
      <p><strong>Status:</strong> {product.status}</p>
      <p><strong>Min Level:</strong> {product.minLevel}</p>
      <p><strong>Max Level:</strong> {product.maxLevel}</p>
      <p><strong>Reorder Point:</strong> {product.reorderPoint}</p>
      <p><strong>Safety Stock:</strong> {product.safetyStock}</p>
      <button onClick={() => navigate(`/products/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDetail;
