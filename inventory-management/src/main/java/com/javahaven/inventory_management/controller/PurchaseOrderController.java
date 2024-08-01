package com.javahaven.inventory_management.controller;

import com.javahaven.inventory_management.model.PurchaseOrder;
import com.javahaven.inventory_management.service.PurchaseOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "https://inventory.parkerlasher.com")
public class PurchaseOrderController {
    private final PurchaseOrderService purchaseOrderService;

    @Autowired
    public PurchaseOrderController(PurchaseOrderService purchaseOrderService) {
        this.purchaseOrderService = purchaseOrderService;
    }

    @GetMapping
    public List<PurchaseOrder> getAllOrders() {
        return purchaseOrderService.getAllOrders();
    }

    @PostMapping
    public PurchaseOrder createOrder(@RequestBody PurchaseOrder purchaseOrder) {
        return purchaseOrderService.createOrder(purchaseOrder);
    }

    @GetMapping("/{id}")
    public PurchaseOrder getOrderById(@PathVariable Long id) {
        return purchaseOrderService.getOrderById(id);
    }

    @PutMapping("/{id}")
    public PurchaseOrder updateOrder(@PathVariable Long id, @RequestBody PurchaseOrder orderDetails) {
        return purchaseOrderService.updateOrder(id, orderDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        purchaseOrderService.deleteOrder(id);
    }
}
