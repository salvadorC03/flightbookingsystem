package com.salvador.flightbookingsystem.domain.entity.passenger;

import com.salvador.flightbookingsystem.domain.entity.customer.Customer;
import com.salvador.flightbookingsystem.domain.entity.flight.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
    Optional<Passenger> findByCustomer(Customer customer);
    Optional<Passenger> findByFlight(Flight flight);
}
