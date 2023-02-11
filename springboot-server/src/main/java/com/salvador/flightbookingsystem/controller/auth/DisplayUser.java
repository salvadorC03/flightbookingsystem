package com.salvador.flightbookingsystem.controller.auth;

import com.salvador.flightbookingsystem.domain.entity.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DisplayUser {
    private Long id;
    private String fullName;
    private String email;
    private String username;
    private Role role;
}
