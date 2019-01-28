package com.unycom.exercise.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@CrossOrigin
@RequestMapping("/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    /**
     * Returns Order by id
     * @param id
     * @return Order
     */
    @GetMapping("/{id}")
    Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    /**
     * Saves new Order entity
     * @param order
     * @return id
     */
    @PostMapping
    Long saveNewOrder(@RequestBody Order order) {
        order.setOrderDate(new Date());
        return orderService.saveNewOrder(order);
    }

    /**
     * Updates Order
     * @param order
     */
    @PutMapping
    void updateOrder(@RequestBody Order order) {
        orderService.updateOrder(order);
    }

    /**
     * Deletes Order by id
     * @param id
     */
    @DeleteMapping
    void deleteOrder(Long id) {
        orderService.deleteOrderById(id);
    }

}