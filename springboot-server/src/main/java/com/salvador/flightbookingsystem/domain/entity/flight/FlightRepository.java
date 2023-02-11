package com.salvador.flightbookingsystem.domain.entity.flight;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    Optional<Flight> findByDestination(String destination);
    Optional<Flight> findByPassengers(Long passengers);
    Optional<Flight> findByDepartureDate(LocalDate departureDate);
    Optional<Flight> findByDepartureTime(LocalTime departureTime);
    Optional<Flight> findByReturnDate(LocalDate returnDate);
    Optional<Flight> findByReturnTime(LocalTime returnTime);
}
