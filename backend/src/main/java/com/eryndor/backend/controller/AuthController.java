package com.eryndor.backend.controller;

import com.eryndor.backend.model.User;
import com.eryndor.backend.security.JwtUtil;
import com.eryndor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestParam String usernameOrEmail, @RequestParam String password) {
        Optional<User> userOpt = userService.findByUsername(usernameOrEmail);
        if (userOpt.isEmpty()) {
            userOpt = userService.findByEmail(usernameOrEmail);
        }
        if (userOpt.isPresent()) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (encoder.matches(password, userOpt.get().getPasswordHash())) {
                String token = jwtUtil.generateToken(userOpt.get().getUsername());
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                response.put("message", "Login realizado com sucesso!");
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body(Map.of("error", "Usuário ou senha inválidos"));
    }
} 