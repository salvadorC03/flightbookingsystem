package com.salvador.flightbookingsystem.domain.entity.passenger;

import com.salvador.flightbookingsystem.domain.entity.customer.Customer;
import com.salvador.flightbookingsystem.domain.entity.flight.Flight;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "passenger")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(nullable = false, name = "customerId", referencedColumnName = "idCardNumber")
    private Customer customer;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(nullable = false, name = "flightId", referencedColumnName = "id")
    private Flight flight;
}
