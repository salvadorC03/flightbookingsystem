package com.salvador.flightbookingsystem.controller.passenger;

public class NonexistantFlightException extends  RuntimeException {
    public NonexistantFlightException(String message) {
        super(message);
    }
}
