package com.salvador.flightbookingsystem.domain.entity.flight;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "flight")
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;
    @Column(nullable = false)
    private String destination;
    @Column(nullable = false)
    private Long passengers;
    @Column(nullable = false)
    private LocalDate departureDate;
    @Column(nullable = false)
    private LocalTime departureTime;
    @Column(nullable = false)
    private LocalDate returnDate;
    @Column(nullable = false)
    private LocalTime returnTime;
}
