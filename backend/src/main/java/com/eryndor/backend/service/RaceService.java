package com.eryndor.backend.service;

import com.eryndor.backend.model.Race;
import com.eryndor.backend.repository.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RaceService {
    @Autowired
    private RaceRepository raceRepository;

    public List<Race> getAllRaces() {
        return raceRepository.findAll();
    }

    public Optional<Race> findByName(String name) {
        return raceRepository.findByName(name);
    }

    public Optional<Race> findById(Long id) {
        return raceRepository.findById(id);
    }

    public Race saveRace(Race race) {
        return raceRepository.save(race);
    }
} 