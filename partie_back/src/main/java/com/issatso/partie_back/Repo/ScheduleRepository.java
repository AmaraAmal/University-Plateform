package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Classes;
import com.issatso.partie_back.Entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule,Integer> {
    @Query("SELECT s FROM Schedule s WHERE s.classes = ?1")
    Optional<Schedule> findByClass(Optional<Classes> classes);
}
