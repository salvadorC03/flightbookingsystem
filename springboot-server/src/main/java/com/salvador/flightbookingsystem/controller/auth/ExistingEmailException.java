package com.salvador.flightbookingsystem.controller.auth;

public class ExistingEmailException extends RuntimeException {
    public ExistingEmailException(String message) {
        super(message);
    }
}
