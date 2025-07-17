package com.eryndor.backend.controller;

import com.eryndor.backend.model.Message;
import com.eryndor.backend.model.Room;
import com.eryndor.backend.model.User;
import com.eryndor.backend.service.MessageService;
import com.eryndor.backend.service.RoomService;
import com.eryndor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @Autowired
    private RoomService roomService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Message> sendMessage(@RequestBody Message message, 
                                             @RequestParam Long roomId,
                                             @RequestParam(required = false) Long userId) {
        Optional<Room> room = roomService.findById(roomId);
        if (room.isPresent()) {
            message.setRoom(room.get());
            
            if (userId != null) {
                Optional<User> user = userService.findById(userId);
                user.ifPresent(message::setSender);
            }
            
            Message saved = messageService.saveMessage(message);
            return ResponseEntity.ok(saved);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<List<Message>> getMessagesByRoom(@PathVariable Long roomId) {
        Optional<Room> room = roomService.findById(roomId);
        if (room.isPresent()) {
            List<Message> messages = messageService.findByRoom(room.get());
            return ResponseEntity.ok(messages);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/room/{roomId}/type/{type}")
    public ResponseEntity<List<Message>> getMessagesByRoomAndType(@PathVariable Long roomId, 
                                                                 @PathVariable String type) {
        Optional<Room> room = roomService.findById(roomId);
        if (room.isPresent()) {
            List<Message> messages = messageService.findByRoomAndType(room.get(), type);
            return ResponseEntity.ok(messages);
        }
        return ResponseEntity.notFound().build();
    }
} 