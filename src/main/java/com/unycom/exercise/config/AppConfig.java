package com.unycom.exercise.config;

import com.unycom.exercise.customer.Customer;
import com.unycom.exercise.customer.CustomerDto;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AppConfig {

    @Bean
    public ModelMapper modelMapper() {
        // this mapper has additional mapping to map orders count from Customer to DTO
        ModelMapper modelMapper = new ModelMapper();
        modelMapper
                .typeMap(Customer.class, CustomerDto.class)
                .addMappings(mapper -> mapper
                        .using(ctx -> ((List) ctx.getSource()).size())
                        .map(Customer::getOrders, CustomerDto::setOrdersCount));
        return modelMapper;
    }

}
