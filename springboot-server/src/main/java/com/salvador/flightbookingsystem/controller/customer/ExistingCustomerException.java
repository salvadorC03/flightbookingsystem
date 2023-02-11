package com.salvador.flightbookingsystem.controller.customer;

public class ExistingCustomerException extends RuntimeException {
    public ExistingCustomerException(String message) {
        super(message);
    }
}
