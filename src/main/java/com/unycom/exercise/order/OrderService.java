package com.unycom.exercise.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    Order getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id).get();
    }

    Long saveNewOrder(Order order) {
        return orderRepository.save(order).getId();
    }

    Long updateOrder(Order order) {
        return orderRepository.save(order).getId();
    }

    void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }

}
