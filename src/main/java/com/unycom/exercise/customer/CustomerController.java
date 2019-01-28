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

    /**
     * Returns list of all CustomersDto
     * @return Customer
     */
    @GetMapping
    List<CustomerDto> getCustomers() {
        return customerService.getCustomersDtoList();
    }

    /**
     * Returns Customer by code
     * @param code
     * @return Customer
     */
    @GetMapping("/code/{code}")
    Customer getCustomerByCode(@PathVariable String code) {
        return customerService.getCustomersByCode(code);
    }

    /**
     * Returns Customer by id
     * @param id
     * @return Customer
     */
    @GetMapping("/{id}")
    Customer getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }

    /**
     * Saves new Customer entity
     * @param customer
     * @return Customer id
     */
    @PostMapping
    Long saveNewCustomer(@RequestBody Customer customer) {
        customer.setRegistrationDate(new Date());
        return customerService.saveNewCustomer(customer);
    }

    /**
     * Updates Customer entity
     * @param customer
     */
    @PutMapping
    void updateCustomer(@RequestBody Customer customer) {
        customerService.updateCustomer(customer);
    }

    /**
     * Delete customer by id
     * @param id
     */
    @DeleteMapping("/{id}")
    void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomerById(id);
    }

}
