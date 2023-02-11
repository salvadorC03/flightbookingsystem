package com.salvador.flightbookingsystem.controller.flight;

import com.salvador.flightbookingsystem.domain.entity.flight.Flight;
import com.salvador.flightbookingsystem.domain.entity.flight.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightService {

    private final FlightRepository flightRepository;

    private FlightResponse buildResponse(Flight flight) {
        return FlightResponse.builder()
                .resultList(List.of(flight))
                .build();
    }

    public FlightResponse findAll() {
        return FlightResponse.builder()
                .resultList(flightRepository.findAll())
                .build();
    }

    public FlightResponse findById(Long id) {
        var flight = flightRepository.findById(id).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByDestination(String destination) {
        var flight = flightRepository.findByDestination(destination).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByPassengers(Long passengers) {
        var flight = flightRepository.findByPassengers(passengers).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByDepartureDate(LocalDate departureDate) {
        var flight = flightRepository.findByDepartureDate(departureDate).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByDepartureTime(LocalTime departureTime) {
        var flight = flightRepository.findByDepartureTime(departureTime).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByReturnDate(LocalDate returnDate) {
        var flight = flightRepository.findByReturnDate(returnDate).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse findByReturnTime(LocalTime returnTime) {
        var flight = flightRepository.findByReturnTime(returnTime).orElseThrow();
        return buildResponse(flight);
    }

    public FlightResponse add(FlightRequest request) {
        var flight = Flight.builder()
                .destination(request.getDestination())
                .passengers(request.getPassengers())
                .departureDate(request.getDepartureDate())
                .departureTime(request.getDepartureTime())
                .returnDate(request.getReturnDate())
                .returnTime(request.getReturnTime())
                .build();
        flightRepository.save(flight);
        return buildResponse(flight);
    }
}
