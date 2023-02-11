package com.salvador.flightbookingsystem.controller.passenger;

public class NonexistantCustomerException extends  RuntimeException {
    public NonexistantCustomerException(String message) {
        super(message);
    }
}
