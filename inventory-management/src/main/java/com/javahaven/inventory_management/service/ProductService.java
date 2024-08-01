package com.javahaven.inventory_management.service;

import com.javahaven.inventory_management.exception.ResourceNotFoundException;
import com.javahaven.inventory_management.model.Product;
import com.javahaven.inventory_management.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
        product.setName(productDetails.getName());
        product.setSku(productDetails.getSku());
        product.setDescription(productDetails.getDescription());
        product.setCategory(productDetails.getCategory());
        product.setQuantity(productDetails.getQuantity());
        product.setLocation(productDetails.getLocation());
        product.setBatchNumber(productDetails.getBatchNumber());
        product.setExpiryDate(productDetails.getExpiryDate());
        product.setStatus(productDetails.getStatus());
        product.setMinLevel(productDetails.getMinLevel());
        product.setMaxLevel(productDetails.getMaxLevel());
        product.setReorderPoint(productDetails.getReorderPoint());
        product.setSafetyStock(productDetails.getSafetyStock());
        product.setCreatedAt(productDetails.getCreatedAt());
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
        productRepository.delete(product);
    }

}
