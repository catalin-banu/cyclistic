package com.rentalBike.server.service;

import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.repository.OrderRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<OrderItem> findAll(){
        return orderRepository.findAll();
    }

    public void save(OrderItem orderItem){
        orderRepository.save(orderItem);
    }

    public OrderItem update(OrderItem newOrderItem, Long id){
        return orderRepository.findById(id).map(
                item -> {
                    item.setFirstName(newOrderItem.getFirstName());
                    item.setLastName(newOrderItem.getLastName());
                    item.setEmail(newOrderItem.getEmail());
                    item.setPhone(newOrderItem.getPhone());
                    item.setProduct(newOrderItem.getProduct());
                    item.setRentalTime(newOrderItem.getRentalTime());
                    item.setStatus(newOrderItem.getStatus());
                    return orderRepository.save(item);
                }
        ).orElseGet(() ->{
            newOrderItem.setId(id);
            return orderRepository.save(newOrderItem);
        });
    }
}
