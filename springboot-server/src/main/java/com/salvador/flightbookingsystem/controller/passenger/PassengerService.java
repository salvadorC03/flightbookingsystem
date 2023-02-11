package com.salvador.flightbookingsystem.controller.passenger;

import com.salvador.flightbookingsystem.controller.customer.ExistingCustomerException;
import com.salvador.flightbookingsystem.domain.entity.customer.CustomerRepository;
import com.salvador.flightbookingsystem.domain.entity.flight.FlightRepository;
import com.salvador.flightbookingsystem.domain.entity.passenger.Passenger;
import com.salvador.flightbookingsystem.domain.entity.passenger.PassengerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PassengerService {

    private final PassengerRepository passengerRepository;
    private final CustomerRepository customerRepository;
    private final FlightRepository flightRepository;

    private final PassengerResponse buildResponse(Passenger passenger) {
        return PassengerResponse.builder()
                .resultList(List.of(passenger))
                .build();
    }

    public PassengerResponse add(PassengerRequest request) {
        var customer = customerRepository.findById(request.getCustomerId());
        if (customer.isEmpty()) throw new NonexistantCustomerException("Customer does not exist");
        var flight = flightRepository.findById(request.getFlightId());
        if (flight.isEmpty()) throw new NonexistantFlightException("Flight does not exist");

        var existingCustomer = passengerRepository.findByCustomer(customer.get());
        if (existingCustomer.isPresent()) throw new ExistingPassengerException("Passenger exists");

        var passenger = Passenger.builder()
                .customer(customer.get())
                .flight(flight.get())
                .build();
        passengerRepository.save(passenger);
        return buildResponse(passenger);
    }

    public PassengerResponse findAll() {
        return PassengerResponse.builder()
                .resultList(passengerRepository.findAll())
                .build();
    }

    public PassengerResponse findById(Long id) {
        var passenger = passengerRepository.findById(id).orElseThrow();
        return buildResponse(passenger);
    }

    public PassengerResponse findByCustomerId(Long customerId) {
        var customer = customerRepository.findById(customerId);
        if (customer.isEmpty()) throw new NonexistantCustomerException("Customer does not exist");

        var passenger = passengerRepository.findByCustomer(customer.get()).orElseThrow();
        return buildResponse(passenger);
    }

    public PassengerResponse findByFlightId(Long flightId) {
        var flight = flightRepository.findById(flightId);
        if (flight.isEmpty()) throw new NonexistantFlightException("Flight does not exist");

        var passenger = passengerRepository.findByFlight(flight.get()).orElseThrow();
        return buildResponse(passenger);
    }
}
