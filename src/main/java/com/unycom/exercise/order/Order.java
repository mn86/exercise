package com.unycom.exercise.order;

import com.fasterxml.jackson.annotation.*;
import com.unycom.exercise.customer.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@Table(name = "order_table")
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date orderDate; // Date when order was received

    private Date confirmationDate; // Date when order was confirmed

    private Date completionDate; // date when order was completed/delivered

    @Size(max = 256)
    private String product; // What was ordered (of course in real life this would be a reference to another entity)

    @Digits(integer = 10, fraction = 2)
    private BigDecimal originalPrice; // The standard price for the order, without any discounts [in EUR]

    @Column(name="order_status")
    private OrderStatus order; // The current status of the order

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer; // The customer who created that order

}
