package com.eryndor.backend.repository;

import com.eryndor.backend.model.Room;
import com.eryndor.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByStatus(String status);
    List<Room> findByType(String type);
    List<Room> findByMaster(User master);
    List<Room> findByIsPublicTrue();
} 