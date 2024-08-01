package com.javahaven.inventory_management.repository;

import com.javahaven.inventory_management.model.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long>  {
}
