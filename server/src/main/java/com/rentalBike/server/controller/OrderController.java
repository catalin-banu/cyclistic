package com.rentalBike.server.controller;

import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    private List<OrderItem> getAllOrders(){
        return orderService.findAll();
    }

    @PostMapping("/order")
    private OrderItem addOrder(@RequestBody OrderItem orderItem){
        orderService.save(orderItem);
        return orderItem;
    }

    @PutMapping("/order/{id}")
    private OrderItem updateOrder(@RequestBody OrderItem orderItem, @PathVariable Long id){
        return orderService.update(orderItem,id);
    }
}
