package com.unycom.exercise;

import com.unycom.exercise.customer.Customer;
import com.unycom.exercise.customer.CustomerRepository;
import com.unycom.exercise.order.Order;
import com.unycom.exercise.order.OrderRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ExerciseApplicationTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    public void whenFindCustomerByCodeThenReturnCorrectCustomer() {

        String testCustomerName = "Test Customer";
        String testCustomerCode = "01234567-9012-456789";

        Customer testCustomer = new Customer();
        testCustomer.setName(testCustomerName);
        testCustomer.setCode(testCustomerCode);

        entityManager.persist(testCustomer);
        entityManager.flush();

        Customer customer = customerRepository.findByCode(testCustomerCode);

        assert customer.getCode().equals(testCustomerCode);
        assert customer.getName().equals(testCustomerName);
    }

    @Test
    public void whenFindByOrderDateBetweenThenReturnListOfOrders() {

        Instant testDate = Instant.now();

        Order testOrder1 = new Order();
        Order testOrder2 = new Order();
        Order testOrder3 = new Order();

        testOrder1.setOrderDate(Date.from(testDate.minusSeconds(90L))); // set order date 90 seconds in past
        testOrder2.setOrderDate(Date.from(testDate.minusSeconds(60L))); // set order date 60 seconds in past
        testOrder3.setOrderDate(Date.from(testDate.minusSeconds(30L))); // set order date 30 seconds in past

        Date startDate = Date.from(testDate.minusSeconds(80L));
        Date endDate = Date.from(testDate);

        entityManager.persist(testOrder1);
        entityManager.persist(testOrder2);
        entityManager.persist(testOrder3);
        entityManager.flush();

        // search for orders created from 80 seconds back until now (only 2 orders will meet this condition)
        List<Order> orders = orderRepository.findByOrderDateBetween(startDate, endDate);

        assert orders.size() == 2;

    }



}
