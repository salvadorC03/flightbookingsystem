package com.salvador.flightbookingsystem.controller.auth;

import com.salvador.flightbookingsystem.config.JwtService;
import com.salvador.flightbookingsystem.domain.entity.user.Role;
import com.salvador.flightbookingsystem.domain.entity.user.Token;
import com.salvador.flightbookingsystem.domain.entity.user.User;
import com.salvador.flightbookingsystem.domain.entity.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private UserResponse buildResponse(DisplayUser user) {
        return UserResponse.builder()
                .resultList(List.of(user))
                .build();
    }

    private DisplayUser buildUser(User user) {
        return DisplayUser.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .username(user.getUsername())
                .role(user.getRole())
                .build();
    }

    public AuthenticationResponse register(RegisterRequest request) throws ExistingUsernameException, ExistingEmailException {
        var existingUsername = userRepository.findByUsername(request.getUsername());
        if (existingUsername.isPresent()) throw new ExistingUsernameException("Username exists");

        var existingEmail = userRepository.findByEmail(request.getEmail());
        if (existingEmail.isPresent()) throw new ExistingEmailException("Email exists");

        var user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.valueOf(request.getRole()))
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var token = Token.builder()
                .value(jwtToken)
                .expiresIn(jwtService.extractExpiration(jwtToken))
                .build();
        return AuthenticationResponse.builder()
                .token(token)
                .userDetails(user)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var token = Token.builder()
                .value(jwtToken)
                .expiresIn(jwtService.extractExpiration(jwtToken))
                .build();
        return AuthenticationResponse.builder()
                .token(token)
                .userDetails(user)
                .build();
    }

    public UserResponse findAll() {
        var users = userRepository.findAll();
        var userList = new ArrayList<DisplayUser>();

        users.forEach(user -> userList.add(buildUser(user)));

        return UserResponse.builder()
                .resultList(userList)
                .build();
    }

    public UserResponse findById(Long id) {
        var user = userRepository.findById(id).orElseThrow();
        return buildResponse(buildUser(user));
    }

    public UserResponse findByUsername(String username) {
        var user = userRepository.findByUsername(username).orElseThrow();
        return buildResponse(buildUser(user));
    }

    public UserResponse findByEmail(String email) {
        var user = userRepository.findByEmail(email).orElseThrow();
        return buildResponse(buildUser(user));
    }
}
