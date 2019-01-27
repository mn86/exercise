package com.unycom.exercise.customer;

import com.fasterxml.jackson.annotation.*;
import com.unycom.exercise.order.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 20)
    private String code; // Unique identifier for customer

    @Size(max = 256)
    private String name; // Human readable name of customer

    @Size(max = 256)
    private String location; // Address (no further distinction between country, city, postal code, street necessary)

    private Date registrationDate; // Day when customer was registered

    private Boolean active; // Shows whether customer is still active. Has no impact on read only GUI

    private CustomerType type; // Qualifies customer

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "customer")
    private List<Order> orders; // The orders of the customer

}