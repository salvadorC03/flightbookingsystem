package com.salvador.flightbookingsystem.controller.auth;

import com.salvador.flightbookingsystem.controller.ExceptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService service;

    @GetMapping
    public ResponseEntity<UserResponse> findAll() {
        try {
            return ResponseEntity.ok(service.findAll());
        } catch (Exception e) {
            throw e;
        }
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
            try {
                return ResponseEntity.ok(service.register(request));
            } catch (Exception e) {
                throw e;
            }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        try {
            return ResponseEntity.ok(service.authenticate(request));
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
