package com.eryndor.backend.service;

import com.eryndor.backend.model.Room;
import com.eryndor.backend.model.User;
import com.eryndor.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    public List<Room> findPublicRooms() {
        return roomRepository.findByIsPublicTrue();
    }

    public List<Room> findByStatus(String status) {
        return roomRepository.findByStatus(status);
    }

    public List<Room> findByMaster(User master) {
        return roomRepository.findByMaster(master);
    }

    public Optional<Room> findById(Long id) {
        return roomRepository.findById(id);
    }

    public void deleteRoom(Long id) {
        roomRepository.deleteById(id);
    }
} 