package com.rentalBike.server.service;

import com.rentalBike.server.model.OrderItem;

import java.util.List;

public interface OrderService {
    OrderItem saveOrder(OrderItem newOrder);
    List<OrderItem> getAllOrders();
    OrderItem getOrderById(Long id);
    OrderItem updateOrder(OrderItem orderUpdate, Long id);
    void deleteOrder(Long id);
}
