package com.salvador.flightbookingsystem.controller.flight;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightRequest {
    private String destination;
    private Long passengers;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
}
