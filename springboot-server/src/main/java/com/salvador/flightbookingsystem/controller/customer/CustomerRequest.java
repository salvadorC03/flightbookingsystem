package com.salvador.flightbookingsystem.controller.customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerRequest {
    private Long idCardNumber;
    private String fullName;
    private String phoneNumber;
    private LocalDate birthDate;
}
