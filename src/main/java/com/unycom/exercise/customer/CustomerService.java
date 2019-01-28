package com.unycom.exercise.customer;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CustomerService(CustomerRepository customerRepository, ModelMapper modelMapper) {
        this.customerRepository = customerRepository;
        this.modelMapper = modelMapper;
    }

    List<CustomerDto> getCustomersDtoList() {
        return customerRepository.findAll().stream()
                .map(customer -> modelMapper.map(customer, CustomerDto.class))
                .collect(Collectors.toList());
    }

    Customer getCustomersByCode(String code) {
        return customerRepository.findByCode(code);
    }

    Customer getCustomerById(@PathVariable Long id) {
        return customerRepository.findById(id).get();
    }

    Long saveNewCustomer(Customer customer) {
        return customerRepository.save(customer).getId();
    }

    void updateCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    void deleteCustomerById(Long id) {
        customerRepository.deleteById(id);
    }

}
