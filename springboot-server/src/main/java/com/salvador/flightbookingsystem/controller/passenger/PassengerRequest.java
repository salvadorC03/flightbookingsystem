package com.salvador.flightbookingsystem.controller.passenger;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PassengerRequest {
    private Long customerId;
    private Long flightId;
}
