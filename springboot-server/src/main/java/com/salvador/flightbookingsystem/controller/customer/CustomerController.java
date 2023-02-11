package com.salvador.flightbookingsystem.controller.customer;

import com.salvador.flightbookingsystem.controller.ExceptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {

    private final CustomerService service;

    @GetMapping
    public ResponseEntity<CustomerResponse> findAll() {
        try {
            return ResponseEntity.ok(service.findAll());
        } catch (Exception e) {
            throw e;
        }
    }


    @GetMapping("/id/{id}")
    public ResponseEntity<CustomerResponse> findById(@PathVariable(name = "id") Long id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (Exception e) {
            throw e;
        }
    }

    @PostMapping
    public ResponseEntity<CustomerResponse> add(@RequestBody CustomerRequest request) {
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
