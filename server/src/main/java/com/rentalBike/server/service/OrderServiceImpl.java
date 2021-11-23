package com.rentalBike.server.service;

import com.rentalBike.server.exception.ResourceNotFoundException;
import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public OrderItem saveOrder(OrderItem newOrder){
        return orderRepository.save(newOrder);
    }

    @Override
    public List<OrderItem> getAllOrders(){
        return orderRepository.findAll();
    }

    @Override
    public OrderItem getOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Order","Id",id));
    }

    @Override
    public OrderItem updateOrder(OrderItem orderUpdate, Long id) {
        OrderItem existingOrder = orderRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Order","Id",id));
        existingOrder.setFirstName(orderUpdate.getFirstName());
        existingOrder.setLastName(orderUpdate.getLastName());
        existingOrder.setEmail(orderUpdate.getEmail());
        existingOrder.setPhone(orderUpdate.getPhone());
        existingOrder.setProductList(orderUpdate.getProductList());
        existingOrder.setRentalTime(orderUpdate.getRentalTime());
        existingOrder.setDetails(orderUpdate.getDetails());
        existingOrder.setStatus(orderUpdate.getStatus());
        orderRepository.save(existingOrder);
        return existingOrder;
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Order","Id",id));
        orderRepository.deleteById(id);
    }
}
