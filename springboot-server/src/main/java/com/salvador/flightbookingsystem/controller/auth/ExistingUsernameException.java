package com.salvador.flightbookingsystem.controller.auth;

public class ExistingUsernameException extends RuntimeException {
    public ExistingUsernameException(String message) {
        super(message);
    }
}
