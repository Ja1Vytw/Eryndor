package com.eryndor.backend.controller;

import com.eryndor.backend.model.Room;
import com.eryndor.backend.model.User;
import com.eryndor.backend.service.RoomService;
import com.eryndor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody Room room, @RequestParam Long masterId) {
        Optional<User> master = userService.findById(masterId);
        if (master.isPresent()) {
            room.setMaster(master.get());
            Room saved = roomService.saveRoom(room);
            return ResponseEntity.ok(saved);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/public")
    public ResponseEntity<List<Room>> getPublicRooms() {
        List<Room> rooms = roomService.findPublicRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/master/{masterId}")
    public ResponseEntity<List<Room>> getRoomsByMaster(@PathVariable Long masterId) {
        Optional<User> master = userService.findById(masterId);
        if (master.isPresent()) {
            List<Room> rooms = roomService.findByMaster(master.get());
            return ResponseEntity.ok(rooms);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoom(@PathVariable Long id) {
        Optional<Room> room = roomService.findById(id);
        return room.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
        return ResponseEntity.ok("Sala removida com sucesso");
    }
} 