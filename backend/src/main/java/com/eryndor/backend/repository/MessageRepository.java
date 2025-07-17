package com.eryndor.backend.repository;

import com.eryndor.backend.model.Message;
import com.eryndor.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByRoomOrderByTimestampAsc(Room room);
    List<Message> findByRoomAndTypeOrderByTimestampAsc(Room room, String type);
} 