package com.eryndor.backend.service;

import com.eryndor.backend.model.Message;
import com.eryndor.backend.model.Room;
import com.eryndor.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> findByRoom(Room room) {
        return messageRepository.findByRoomOrderByTimestampAsc(room);
    }

    public List<Message> findByRoomAndType(Room room, String type) {
        return messageRepository.findByRoomAndTypeOrderByTimestampAsc(room, type);
    }
} 