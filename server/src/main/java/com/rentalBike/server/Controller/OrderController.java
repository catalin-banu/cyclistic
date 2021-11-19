package com.rentalBike.server.Controller;

import com.rentalBike.server.model.Order;
import com.rentalBike.server.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    private List<Order> getAllOrders(){
        return orderService.findAll();
    }

    @PostMapping("/order")
    private int addOrder(@RequestBody Order order){
        orderService.save(order);
        return order.getId();
    }
}
