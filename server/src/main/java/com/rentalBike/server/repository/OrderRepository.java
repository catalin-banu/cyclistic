package com.rentalBike.server.repository;

import com.rentalBike.server.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderItem,Long> {
    List<OrderItem> findAll();
}
