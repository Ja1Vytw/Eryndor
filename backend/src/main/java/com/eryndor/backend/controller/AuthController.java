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
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    public static class LoginRequest {
        private String usernameOrEmail;
        private String password;

        public String getUsernameOrEmail() { return usernameOrEmail; }
        public void setUsernameOrEmail(String usernameOrEmail) { this.usernameOrEmail = usernameOrEmail; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    public static class RegisterRequest {
        private String username;
        private String email;
        private String password;

        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody RegisterRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            System.out.println("Tentativa de registro para: " + request.getUsername());
            
            // Verificar se usuário já existe
            if (userService.findByUsername(request.getUsername()).isPresent()) {
                System.out.println("Username já existe: " + request.getUsername());
                response.put("success", false);
                response.put("error", "Nome de usuário já existe");
                return ResponseEntity.badRequest().body(response);
            }
            
            if (userService.findByEmail(request.getEmail()).isPresent()) {
                System.out.println("Email já existe: " + request.getEmail());
                response.put("success", false);
                response.put("error", "Email já cadastrado");
                return ResponseEntity.badRequest().body(response);
            }

            // Criar novo usuário
            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            user.setPasswordHash(encoder.encode(request.getPassword()));
            
            System.out.println("Salvando usuário: " + user.getUsername());
            User savedUser = userService.saveUser(user);
            System.out.println("Usuário salvo com ID: " + savedUser.getId());
            
            response.put("success", true);
            response.put("message", "Usuário registrado com sucesso!");
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            System.out.println("Erro durante registro: " + e.getMessage());
            e.printStackTrace();
            response.put("success", false);
            response.put("error", "Erro ao registrar usuário: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            System.out.println("Tentativa de login para: " + request.getUsernameOrEmail());
            
            Optional<User> userOpt = userService.findByUsername(request.getUsernameOrEmail());
            if (userOpt.isEmpty()) {
                System.out.println("Usuário não encontrado por username, tentando email...");
                userOpt = userService.findByEmail(request.getUsernameOrEmail());
            }
            
            if (userOpt.isPresent()) {
                System.out.println("Usuário encontrado: " + userOpt.get().getUsername());
                BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                boolean passwordMatches = encoder.matches(request.getPassword(), userOpt.get().getPasswordHash());
                System.out.println("Senha confere: " + passwordMatches);
                
                if (passwordMatches) {
                    String token = jwtUtil.generateToken(userOpt.get().getUsername());
                    response.put("success", true);
                    response.put("token", token);
                    response.put("message", "Login realizado com sucesso!");
                    response.put("user", Map.of(
                        "id", userOpt.get().getId(),
                        "username", userOpt.get().getUsername(),
                        "email", userOpt.get().getEmail()
                    ));
                    return ResponseEntity.ok(response);
                }
            }
            
            System.out.println("Login falhou - usuário não encontrado ou senha incorreta");
            response.put("success", false);
            response.put("error", "Usuário ou senha inválidos");
            return ResponseEntity.status(401).body(response);
            
        } catch (Exception e) {
            System.out.println("Erro durante login: " + e.getMessage());
            e.printStackTrace();
            response.put("success", false);
            response.put("error", "Erro ao fazer login: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<Map<String, Object>> refreshToken(@RequestHeader("Authorization") String authHeader) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                String token = authHeader.substring(7);
                String username = jwtUtil.extractUsername(token);
                
                Optional<User> userOpt = userService.findByUsername(username);
                if (userOpt.isPresent()) {
                    String newToken = jwtUtil.generateToken(username);
                    response.put("success", true);
                    response.put("token", newToken);
                    response.put("message", "Token renovado com sucesso!");
                    return ResponseEntity.ok(response);
                }
            }
            
            response.put("success", false);
            response.put("error", "Token inválido");
            return ResponseEntity.status(401).body(response);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Erro ao renovar token: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
} 