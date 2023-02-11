package com.salvador.flightbookingsystem.controller.flight;

import com.salvador.flightbookingsystem.controller.ExceptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/flight")
@RequiredArgsConstructor
@CrossOrigin
public class FlightController {

    private final FlightService service;

    @GetMapping
    public ResponseEntity<FlightResponse> findAll() {
        try {
            return ResponseEntity.ok(service.findAll());
        } catch (Exception e) {
            throw e;
        }
    }


    @GetMapping("/id/{id}")
    public ResponseEntity<FlightResponse> findById(@PathVariable(name = "id") Long id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (Exception e) {
            throw e;
        }
    }

    @PostMapping
    public ResponseEntity<FlightResponse> add(@RequestBody FlightRequest request) {
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
