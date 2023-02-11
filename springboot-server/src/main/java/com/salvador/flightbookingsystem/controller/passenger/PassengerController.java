package com.salvador.flightbookingsystem.controller.passenger;

import com.salvador.flightbookingsystem.controller.ExceptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/passenger")
@RequiredArgsConstructor
@CrossOrigin
public class PassengerController {

    private final PassengerService service;

    @GetMapping
    public ResponseEntity<PassengerResponse> findAll() {
        try {
            return ResponseEntity.ok(service.findAll());
        } catch (Exception e) {
            throw e;
        }
    }


    @GetMapping("/id/{id}")
    public ResponseEntity<PassengerResponse> findById(@PathVariable(name = "id") Long id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping("/customerId/{customerId}")
    public ResponseEntity<PassengerResponse> findByCustomerId(@PathVariable(name = "customerId") Long customerId) {
        try {
            return ResponseEntity.ok(service.findByCustomerId(customerId));
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping("/passengerId/{id}")
    public ResponseEntity<PassengerResponse> findByFlightId(@PathVariable(name = "flightId") Long flightId) {
        try {
            return ResponseEntity.ok(service.findByFlightId(flightId));
        } catch (Exception e) {
            throw e;
        }
    }

    @PostMapping
    public ResponseEntity<PassengerResponse> add(@RequestBody PassengerRequest request) {
        try {
            return ResponseEntity.ok(service.add(request));
        } catch (Exception e) {
            throw e;
        }
    }

    @ExceptionHandler
    public ResponseEntity<ExceptionResponse> handleError(Exception e) {
        return new ResponseEntity<>(ExceptionResponse.builder()
                .message(e.getMessage())
                .localizedMessage(e.getLocalizedMessage())
                .build(), HttpStatusCode.valueOf(500));
    };
}
