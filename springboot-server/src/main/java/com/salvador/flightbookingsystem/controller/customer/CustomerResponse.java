package com.salvador.flightbookingsystem.controller.customer;

import com.salvador.flightbookingsystem.domain.entity.customer.Customer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerResponse {
    private List<Customer> resultList;
}
