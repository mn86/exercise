package com.unycom.exercise.customer;

import com.unycom.exercise.order.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
