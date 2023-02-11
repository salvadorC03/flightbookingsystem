package com.salvador.flightbookingsystem.controller.auth;

import com.salvador.flightbookingsystem.domain.entity.user.Token;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private Token token;
    private UserDetails userDetails;
}
