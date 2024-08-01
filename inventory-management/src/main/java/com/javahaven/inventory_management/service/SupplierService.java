package com.javahaven.inventory_management.service;

import com.javahaven.inventory_management.exception.ResourceNotFoundException;
import com.javahaven.inventory_management.model.Supplier;
import com.javahaven.inventory_management.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {
    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier getSupplierById(Long id) {
        return supplierRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Supplier not found with id " + id));
    }

    public Supplier updateSupplier(Long id, Supplier supplierDetails) {
        Supplier supplier = supplierRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Supplier not found with id " + id));
        supplier.setName(supplierDetails.getName());
        supplier.setContactInfo(supplierDetails.getContactInfo());
        supplier.setAddress(supplierDetails.getAddress());
        supplier.setPaymentTerms(supplierDetails.getPaymentTerms());
        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(Long id) {
        Supplier supplier = supplierRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Supplier not found with id " + id));
        supplierRepository.delete(supplier);
    }
}
