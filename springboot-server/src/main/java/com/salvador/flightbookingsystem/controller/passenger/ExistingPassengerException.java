package com.salvador.flightbookingsystem.controller.passenger;

public class ExistingPassengerException extends RuntimeException {
    public ExistingPassengerException(String message) {
        super(message);
    }
}
