package com.salvador.flightbookingsystem.controller.passenger;

import com.salvador.flightbookingsystem.domain.entity.passenger.Passenger;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PassengerResponse {
    private List<Passenger> resultList;
}
