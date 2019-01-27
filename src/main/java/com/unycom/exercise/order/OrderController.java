package com.unycom.exercise.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@CrossOrigin // TODO remove after debugging
@RequestMapping("/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/{id}")
    Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    Long saveNewOrder(@RequestBody Order order) {
        order.setOrderDate(new Date());
        return orderService.saveNewOrder(order);
    }

    @PutMapping
    Long updateOrder(@RequestBody Order order) {
        return orderService.updateOrder(order);
    }

    @DeleteMapping
    void deleteOrder(Long id) {
        orderService.deleteOrderById(id);
    }

}