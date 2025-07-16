package com.eryndor.backend.controller;

import com.eryndor.backend.model.User;
import com.eryndor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String usernameOrEmail, @RequestParam String password) {
        Optional<User> userOpt = userService.findByUsername(usernameOrEmail);
        if (userOpt.isEmpty()) {
            userOpt = userService.findByEmail(usernameOrEmail);
        }
        if (userOpt.isPresent()) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (encoder.matches(password, userOpt.get().getPasswordHash())) {
                // Aqui futuramente retornaremos o JWT
                return ResponseEntity.ok("Login realizado com sucesso!");
            }
        }
        return ResponseEntity.status(401).body("Usuário ou senha inválidos");
    }
} 