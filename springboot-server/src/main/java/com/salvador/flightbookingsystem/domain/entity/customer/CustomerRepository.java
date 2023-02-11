package com.salvador.flightbookingsystem.domain.entity.customer;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByFullName(String fullName);
    Optional<Customer> findByPhoneNumber(String phoneNumber);
    Optional<Customer> findByBirthDate(LocalDate birthDate);
}
