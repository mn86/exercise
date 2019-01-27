package com.unycom.exercise.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/v1/customers")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    List<CustomerDto> getCustomers() {
        return customerService.getCustomersDtoList();
    }

    @GetMapping("/code/{code}")
    Customer getCustomerByCode(@PathVariable String code) {
        return customerService.getCustomersByCode(code);
    }

    @GetMapping("/{id}")
    Customer getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }

    @PostMapping
    Long saveNewCustomer(@RequestBody Customer customer) {
        customer.setRegistrationDate(new Date());
        return customerService.saveNewCustomer(customer);
    }

    @PutMapping
    Long updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }

    @DeleteMapping("/{id}")
    void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomerById(id);
    }

}
