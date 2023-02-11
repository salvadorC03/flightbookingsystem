package com.salvador.flightbookingsystem.controller.customer;

import com.salvador.flightbookingsystem.domain.entity.customer.Customer;
import com.salvador.flightbookingsystem.domain.entity.customer.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    private CustomerResponse buildResponse(Customer customer) {
        return CustomerResponse.builder()
                .resultList(List.of(customer))
                .build();
    }
    public CustomerResponse add(CustomerRequest request) {
        if(customerRepository.existsById(request.getIdCardNumber())) throw new ExistingCustomerException("Customer exists");

        var customer = Customer.builder()
                .idCardNumber(request.getIdCardNumber())
                .fullName(request.getFullName())
                .phoneNumber(request.getPhoneNumber())
                .birthDate(request.getBirthDate())
                .build();
        customerRepository.save(customer);
        return buildResponse(customer);
    }

    public CustomerResponse findById(Long id) {
        var customer = customerRepository.findById(id).orElseThrow();
        return buildResponse(customer);
    }

    public CustomerResponse findAll() {
        return CustomerResponse.builder()
                .resultList(customerRepository.findAll())
                .build();
    }
}
