package com.rentalBike.server.service;

import com.rentalBike.server.model.Order;
import com.rentalBike.server.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> findAll(){
        return orderRepository.findAll();
    }

    public void save(Order order){
        orderRepository.save(order);
    }
}
