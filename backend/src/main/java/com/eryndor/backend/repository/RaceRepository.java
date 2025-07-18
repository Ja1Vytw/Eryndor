package com.eryndor.backend.repository;

import com.eryndor.backend.model.Race;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
 
public interface RaceRepository extends JpaRepository<Race, Long> {
    Optional<Race> findByName(String name);
} 