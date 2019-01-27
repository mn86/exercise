package com.unycom.exercise.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {

    private Long id;

    private String code;

    private String name;

    private Boolean active;

    private CustomerType type;

    private Integer ordersCount;

}
