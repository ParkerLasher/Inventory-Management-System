package com.javahaven.inventory_management.service;

import com.javahaven.inventory_management.exception.ResourceNotFoundException;
import com.javahaven.inventory_management.model.PurchaseOrder;
import com.javahaven.inventory_management.repository.PurchaseOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseOrderService {
    private final PurchaseOrderRepository purchaseOrderRepository;

    @Autowired
    public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
    }

    public List<PurchaseOrder> getAllOrders() {
        return purchaseOrderRepository.findAll();
    }

    public PurchaseOrder createOrder(PurchaseOrder purchaseOrder) {
        return purchaseOrderRepository.save(purchaseOrder);
    }

    public PurchaseOrder getOrderById(Long id) {
        return purchaseOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + id));
    }

    public PurchaseOrder updateOrder(Long id, PurchaseOrder orderDetails) {
        PurchaseOrder order = purchaseOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + id));
        order.setSupplier(orderDetails.getSupplier());
        order.setOrderDate(orderDetails.getOrderDate());
        order.setStatus(orderDetails.getStatus());
        order.setTotal(orderDetails.getTotal());
        return purchaseOrderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        PurchaseOrder order = purchaseOrderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + id));
        purchaseOrderRepository.delete(order);
    }
}
