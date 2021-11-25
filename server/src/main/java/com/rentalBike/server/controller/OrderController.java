package com.rentalBike.server.controller;

import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/v1/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    private List<OrderItem> getAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping("/order/{id}")
    private ResponseEntity<OrderItem> getOrderById(@PathVariable Long id){
        return new ResponseEntity<OrderItem>(orderService.getOrderById(id), HttpStatus.OK);
    }

    @PostMapping("/order")
    private ResponseEntity<OrderItem> addOrder(@RequestBody OrderItem orderItem){
        return new ResponseEntity<OrderItem>(orderService.saveOrder(orderItem), HttpStatus.CREATED);
    }

    @PutMapping("/order/{id}")
    private ResponseEntity<OrderItem> updateOrder(@RequestBody OrderItem orderItem, @PathVariable Long id){
        return new ResponseEntity<OrderItem>(orderService.updateOrder(orderItem,id), HttpStatus.OK);
    }

    @DeleteMapping("/order/{id}")
    private ResponseEntity<String> deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
        return new ResponseEntity<String>("Order deleted successfully!.", HttpStatus.NO_CONTENT);
    }
}
