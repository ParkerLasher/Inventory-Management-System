package com.javahaven.inventory_management.repository;

import com.javahaven.inventory_management.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
